import React from "react";
import { motion } from "framer-motion";
import teamIllustration from "../assets/about/team-illustration.svg";

export default function AboutPage() {
  return (
    <main className="relative bg-gradient-to-br from-[#F9FAFB] via-[#E5E7EB] to-[#F3F4F6] overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-400 via-blue-400 to-cyan-300 opacity-20 blur-3xl rounded-full"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-10 sm:pb-6">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-8"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            CSAP
          </span>
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          CSAP is an AI-powered CCTV security assessment platform that combines
          artificial intelligence, blockchain, and post-quantum cryptography to make
          cybersecurity audits transparent, autonomous, and future-ready.
        </motion.p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">🌍 Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              To build a resilient and intelligent cybersecurity framework for surveillance
              systems worldwide — empowering institutions to detect, analyze, and remediate
              vulnerabilities with AI precision and blockchain integrity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">🚀 Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              To redefine digital security by introducing automation, transparency, and
              quantum-resilient cryptography — creating safer cities, institutions, and
              digital ecosystems for the next decade.
            </p>
          </motion.div>
        </div>

        {/* Technology Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Technology with Trust
          </h2>
          <p className="text-gray-700 leading-relaxed -mb-80">
            Our development philosophy revolves around three pillars — intelligence,
            transparency, and security. Every module, from AI-driven scanning to blockchain
            audits, is designed for traceability, ethical AI, and data privacy.
          </p>
        </motion.section>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center -mt-60 -mb-160"
        >
          <img
            src={teamIllustration}
            alt="CSAP Team Illustration"
            className="w-64 sm:w-80 opacity-90 drop-shadow-xl "
          />
        </motion.div>

        {/* Closing Section */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 -pb-140"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">💡 Our Ethos</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Innovation is not just about new technology — it’s about responsible design,
            protecting what matters most, and preparing for the challenges of tomorrow.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
