import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });

      alert(res.data.message);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-80">
        <h2 className="text-2xl mb-4 text-center text-yellow-400">Login</h2>

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
          onClick={handleLogin}
          className="w-full bg-yellow-500 text-black py-2 rounded hover:scale-105 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}