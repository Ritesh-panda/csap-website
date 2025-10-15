import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-gray-800"
      >
        Contact
      </motion.h2>

      <p className="text-gray-700 mb-8 text-lg">
        For inquiries, email us at{" "}
        <a href="mailto:security@cctvplatform.com" className="text-primary underline">
          security@cctvplatform.com
        </a>
      </p>

      <form className="bg-white/60 backdrop-blur-lg border border-white/20 shadow-md p-8 rounded-2xl space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
        />
        <textarea
          rows="4"
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 font-semibold text-white rounded-xl bg-[linear-gradient(90deg,#2563EB,#06B6D4,#8B5CF6)] shadow-md"
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
}
