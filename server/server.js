const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const Contact = require("./models/Contact");

const app = express();
app.use(express.json());
app.use(cors());

// ---------------- DATABASE ----------------
mongoose.connect("mongodb://127.0.0.1:27017/aicpe")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// ---------------- GEMINI SETUP ----------------
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Gemini 2.5 style (works via SDK)
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

// ---------------- CONTACT ----------------
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await Contact.create({ name, email, message });
    res.send({ message: "Saved" });
  } catch (err) {
    res.status(500).send({ message: "Error saving contact" });
  }
});

// Get contacts (protected)
app.get("/contacts", async (req, res) => {
  try {
    jwt.verify(req.headers.authorization, "secretkey");
    const data = await Contact.find();
    res.send(data);
  } catch {
    res.status(403).send("Unauthorized");
  }
});

// Delete contact
app.delete("/contact/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted" });
  } catch {
    res.status(500).send({ message: "Delete failed" });
  }
});

// Reply
app.post("/reply/:id", async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, {
      reply: req.body.reply,
    });
    res.send({ message: "Replied" });
  } catch {
    res.status(500).send({ message: "Reply failed" });
  }
});

// ---------------- ADMIN ----------------
const ADMIN_EMAIL = "admin@aicpe.com";
const ADMIN_PASS = "123456";

app.post("/admin/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
    const token = jwt.sign({ role: "admin" }, "secretkey");
    res.send({ token });
  } else {
    res.status(401).send("Invalid");
  }
});

// ---------------- USER ----------------
const User = mongoose.model("User", {
  email: String,
  password: String,
});

// Signup
app.post("/signup", async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);

    await User.create({
      email: req.body.email,
      password: hashed,
    });

    res.send({ message: "User created" });
  } catch {
    res.status(500).send({ message: "Signup error" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.send({ message: "User not found" });

    const match = await bcrypt.compare(req.body.password, user.password);

    if (match) res.send({ message: "Login success" });
    else res.send({ message: "Wrong password" });
  } catch {
    res.status(500).send({ message: "Login error" });
  }
});

// ================= 🤖 GEMINI CHAT =================
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const prompt = `
You are a professional Chartered Accountant mentor.

Rules:
- Answer only CA-related questions
- Use simple language
- Give structured answers (points)
- If unrelated: "I only answer CA-related queries"

User: ${message}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.send({ reply: text });

  } catch (error) {
    console.log("❌ Gemini Error:", error);
    res.status(500).send({ reply: "AI error" });
  }
});

// ---------------- SERVER ----------------
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});