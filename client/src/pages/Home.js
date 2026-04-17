import { useState, useEffect } from "react";
import ThreeBackground from "../components/ThreeBackground";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";

import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import WhatsappButton from "../components/WhatsappButton";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import { playClick } from "../utils/sound";
import { caData } from "../data/caContent";
import Chatbot from "../components/Chatbot";

export default function Home() {
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-black text-white">

      <Cursor />

      {/* 🔥 HERO SECTION */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">

        {/* 💀 3D GRID BACKGROUND */}
        <ThreeBackground />

        {/* 🔥 DARK OVERLAY (important for readability) */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* 🔥 SOFT CENTER GLOW (controlled) */}
        <div className="absolute w-[500px] h-[500px] bg-yellow-400 opacity-10 blur-[120px] rounded-full"></div>

        {/* 🔥 CONTENT */}
        <div className="relative z-10 px-4">

          <h1 className="text-4xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_40px_rgba(250,204,21,0.9)] leading-tight">
            Become a Chartered Accountant 
          </h1>

          <ReactTyped
            className="mt-4 text-gray-300 text-lg md:text-xl"
            strings={[
              "Complete Roadmap + AI Mentor",
              "Step-by-Step CA Journey",
              "Ask AI & Clear Your Doubts"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />

          {/* 🔥 BUTTONS */}
          <div className="mt-6 flex gap-4 justify-center flex-wrap">

            {/* SCROLL BUTTON */}
            <button
              onClick={() =>
                document.getElementById("ca-section").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-110 transition shadow-[0_0_20px_rgba(250,204,21,0.7)]"
            >
              Start Journey
            </button>

            {/* CHATBOT BUTTON */}
            <button
              onClick={() => setOpenChat(true)}
              className="border border-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              Ask AI Mentor 🤖
            </button>

          </div>

        </div>
      </div>

      {/*  CA SECTION (NO ANIMATION) */}
      <div id="ca-section" className="px-10 py-20">

        <h2 className="text-3xl text-yellow-400 text-center mb-10">
          Explore CA Career
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {Object.keys(caData).map((item, i) => (
            <div
              key={i}
              onClick={() => {
                playClick();
                setActive(item);
              }}
              className="bg-gray-900 p-6 rounded-xl border border-yellow-400 cursor-pointer hover:scale-105 transition duration-300"
            >
              {caData[item].icon}
              <h3 className="mt-3 text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-xl w-[90%] md:w-[750px] max-h-[90vh] overflow-y-auto border border-yellow-400"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setActive(null)}
                className="text-red-400 float-right"
              >
                ✕
              </button>

              <h2 className="text-2xl text-yellow-400 mb-4">{active}</h2>

              {caData[active].content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Testimonials />
      <Gallery />

      {/* 🤖 CHATBOT */}
      <Chatbot externalOpen={openChat} />

      <WhatsappButton />

    </div>
  );
}