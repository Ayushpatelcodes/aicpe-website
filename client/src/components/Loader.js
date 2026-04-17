import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-yellow-400 text-4xl font-bold"
      >
        AICPE
      </motion.h1>
    </div>
  );
}