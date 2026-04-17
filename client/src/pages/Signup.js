import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/signup", {
        email,
        password
      });

      alert("Account created successfully");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-80">
        <h2 className="text-2xl mb-4 text-center text-yellow-400">Signup</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 rounded bg-black border border-gray-600"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-black border border-gray-600"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-yellow-500 text-black py-2 rounded hover:scale-105 transition"
        >
          Signup
        </button>
      </div>
    </div>
  );
}