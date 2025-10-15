import React from "react";
import { motion } from "framer-motion";

export default function FeatureCard({ title, description, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(37,99,235,0.25)" }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200, delay }}
      viewport={{ once: true }}
      className="group p-6 rounded-2xl bg-white/40 backdrop-blur-lg border border-white/20 shadow-md cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon ? (
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 via-cyan-400 to-purple-500 text-white">
            {icon}
          </div>
        ) : (
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-400 to-purple-500" />
        )}
        <h3 className="text-lg font-semibold text-textPrimary group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-sm text-textSecondary leading-relaxed">{description}</p>
    </motion.div>
  );
}
