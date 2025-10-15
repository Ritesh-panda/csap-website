import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ title, value, note, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 30px rgba(6,182,212,0.25)",
        borderColor: "rgba(37,99,235,0.3)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 12, delay }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/20 shadow-sm hover:shadow-lg transition-all cursor-pointer"
    >
      <h4 className="text-sm font-semibold text-primary/80">{title}</h4>
      <h3 className="text-xl font-bold text-textPrimary mt-2">{value}</h3>
      {note && <p className="text-sm text-textSecondary mt-2">{note}</p>}
    </motion.div>
  );
}
