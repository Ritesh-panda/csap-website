import React from "react";
import { motion } from "framer-motion";

/**
 * StepItem Component
 * Displays a single step card with a number, title, description, and highlight badge.
 * Supports "reversed" layout for alternating sections.
 */

export default function StepItem({ step, title, description, highlight, reversed = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row ${
        reversed ? "md:flex-row-reverse" : ""
      } items-start md:items-center gap-6`}
    >
      {/* Step number icon */}
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-400 to-purple-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
        {step}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-2 leading-relaxed">{description}</p>

        {highlight && (
          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur-lg text-sm text-gray-700 border border-white/30 shadow-sm">
            {highlight}
          </div>
        )}
      </div>
    </motion.div>
  );
}
