import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import FeatureCard from "../components/UI/FeatureCard";
const HeroScene = lazy(() => import("../components/3d/HeroScene.jsx"));
import { STREAMLIT_URL } from "../config";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#E5E7EB] to-[#F9FAFB]">
      {/* Glowing background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 opacity-30 blur-3xl rounded-full"></div>
      </div>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT — Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#06B6D4,#8B5CF6)]">
            CSAP AI
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            AI-powered CCTV security assessment & visualization. Explore the
            interactive dashboard to see live analysis, exploit visualizations,
            and remediation guidance.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(STREAMLIT_URL, "_blank")}
              className="px-6 py-3 rounded-xl font-semibold text-white bg-[linear-gradient(90deg,#2563EB,#06B6D4,#8B5CF6)] shadow-lg text-sm sm:text-base"
            >
              Open Dashboard
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/features"
              className="px-6 py-3 rounded-xl font-semibold border border-primary text-primary hover:bg-primary hover:text-white transition-all text-sm sm:text-base"
            >
              View Features
            </motion.a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 text-center text-xs sm:text-sm font-medium text-gray-600">
            <div className="rounded-xl p-3 sm:p-4 bg-white/40 backdrop-blur-lg shadow-sm">
              AI Detection
            </div>
            <div className="rounded-xl p-3 sm:p-4 bg-white/40 backdrop-blur-lg shadow-sm">
              Exploit Paths
            </div>
            <div className="rounded-xl p-3 sm:p-4 bg-white/40 backdrop-blur-lg shadow-sm">
              Remediation
            </div>
          </div>
        </motion.div>

        {/* RIGHT — 3D Hero with caption INSIDE box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="rounded-3xl backdrop-blur-2xl bg-white/40 border border-white/20 shadow-glass w-[90%] sm:w-[420px] md:w-[460px] lg:w-[500px] aspect-square flex flex-col items-center justify-between p-4 sm:p-6">
            {/* 3D Globe Scene */}
            <div className="flex-1 flex items-center justify-center w-full">
              <Suspense
                fallback={
                  <div className="h-96 flex items-center justify-center text-gray-500">
                    Loading preview…
                  </div>
                }
              >
                <HeroScene />
              </Suspense>
            </div>

            {/* Caption area inside box */}
            <div className="pt-4 text-center">
              <p className="text-sm text-gray-700 font-semibold">
                🌐 CSAP Intelligence Grid
              </p>
              <p className="text-xs text-gray-500">
                Simulated global network of secured CCTV endpoints
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DISCOVER SECTION */}
      <div className="text-center py-10 sm:py-14 px-4">
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3"
        >
          Discover How CSAP Secures You
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          Scroll down to see how AI detection, blockchain audit, and PQC
          encryption combine to keep surveillance networks safe.
        </motion.p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="mt-4 flex justify-center text-2xl text-primary"
        >
          ↓
        </motion.div>
      </div>

      {/* FEATURE PREVIEW CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-0 pb-0">
        <FeatureCard
          title="AI Detection"
          description="ML-based classification with real-time vulnerability prediction for proactive defense."
          delay={0.1}
        />
        <FeatureCard
          title="Blockchain Integrity"
          description="Hyperledger-powered audit trails ensuring transparent and tamper-proof validation."
          delay={0.2}
        />
        <FeatureCard
          title="PQC Encryption"
          description="CRYSTALS-Kyber algorithms for post-quantum resilience and secure data exchange."
          delay={0.3}
        />
      </div>
    </section>
  );
}
