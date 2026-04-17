import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a CA (Chartered Accountant) career assistant. Answer only CA-related queries in simple language.\n\nUser: ${message}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand.";

    res.json({ reply });

  } catch (error) {
    res.status(500).json({ reply: "Server error" });
  }
});

export default router;