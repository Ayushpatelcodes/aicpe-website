import { useState, useEffect, useRef } from "react";

export default function Chatbot({ externalOpen }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Ask me anything about CA!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // 🔥 Open from Home button
  useEffect(() => {
    if (externalOpen) setOpen(true);
  }, [externalOpen]);

  // 🔥 Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("https://aicpe-website.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botReply = {
        text: data.reply,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botReply]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Error connecting to AI", sender: "bot" },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {/* 🔥 Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-yellow-400 text-black px-4 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        🤖
      </button>

      {/* 🔥 Chat Window */}
      {open && (
        <div className="w-96 h-[500px] bg-black border border-yellow-400 mt-3 rounded-2xl flex flex-col shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="p-3 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-yellow-400 font-bold">CA Mentor AI</h2>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-yellow-400 text-black ml-auto"
                    : "bg-gray-800 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Typing loader */}
            {loading && (
              <div className="bg-gray-800 text-white p-2 rounded-lg w-fit">
                typing...
              </div>
            )}

            <div ref={bottomRef}></div>
          </div>

          {/* Input */}
          <div className="p-2 flex border-t border-gray-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 p-2 bg-gray-800 text-white rounded-l outline-none"
              placeholder="Ask about CA..."
            />
            <button
              onClick={sendMessage}
              className="bg-yellow-400 px-4 rounded-r hover:scale-105 transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}