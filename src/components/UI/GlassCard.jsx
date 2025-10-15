import React from "react";
import { motion } from "framer-motion";

export default function GlassCard({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(255,255,255,0.6)",
        boxShadow: "0 8px 32px rgba(139,92,246,0.25)",
      }}
      transition={{ duration: 0.4, delay, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-white/40 backdrop-blur-lg border border-white/20 shadow-md cursor-pointer transition-all"
    >
      {children}
    </motion.div>
  );
}
