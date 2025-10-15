import React from "react";
import { motion } from "framer-motion";

// ✅ Import logos from src/assets/logos
import rust from "../assets/logos/rust.svg";
import go from "../assets/logos/go.svg";
import python from "../assets/logos/python.svg";
import docker from "../assets/logos/docker.svg";
import kubernetes from "../assets/logos/kubernetes.svg";
import hyperledger from "../assets/logos/hyperledger.svg";
import crystals from "../assets/logos/crystals.svg";
import mongodb from "../assets/logos/mongodb.svg";
import postgresql from "../assets/logos/postgres.svg";
import reactLogo from "../assets/logos/react.svg";
import threejs from "../assets/logos/threejs.svg";

export default function FeaturesPage() {
  const references = [
    {
      title: "SIH Report (Full PDF)",
      href: "/sih report.pdf",
    },
    {
      title: "Hyperledger Fabric (Official Site)",
      href: "https://www.hyperledger.org/use/fabric",
    },
    {
      title: "NIST PQC – CRYSTALS",
      href: "https://www.nist.gov/itl/ssd/cryptography/post-quantum-cryptography",
    },
    {
      title: "Federated Learning Overview (arXiv)",
      href: "https://arxiv.org/abs/1902.01046",
    },
    {
      title: "VAPT of IP Cameras (Research Paper)",
      href: "https://arxiv.org/",
    },
  ];

  const techLogos = [
    { name: "Rust", src: rust },
    { name: "Go", src: go },
    { name: "Python", src: python },
    { name: "Docker", src: docker },
    { name: "Kubernetes", src: kubernetes },
    { name: "Hyperledger", src: hyperledger },
    { name: "CRYSTALS", src: crystals },
    { name: "MongoDB", src: mongodb },
    { name: "PostgreSQL", src: postgresql },
    { name: "React", src: reactLogo },
    { name: "Three.js", src: threejs },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F9FAFB] via-[#F3F4F6] to-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6"
        >
          Features & Technical Overview
        </motion.h1>

        {/* Intro paragraph */}
        <p className="text-gray-600 mb-12 max-w-2xl text-base sm:text-lg">
          CyberShield’s architecture integrates AI, Blockchain, and Post-Quantum Cryptography
          to deliver a scalable, auditable, and future-ready CCTV vulnerability assessment
          platform. Below are the core pillars that define its innovation.
        </p>

        {/* Top 3 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {[
            {
              title: "Core Value",
              desc: "AI-driven CCTV vulnerability scanning powered by high-performance Rust engine and ML-based classification. Ensures accurate, real-time risk prediction.",
            },
            {
              title: "Immutable Audit",
              desc: "Blockchain-backed audit ledger using Hyperledger Fabric, ensuring all scan records and signatures are tamper-proof and fully verifiable.",
            },
            {
              title: "PQC Ready",
              desc: "Future-proof cryptographic assurance via NIST-standard PQC algorithms (CRYSTALS-Kyber/Dilithium) protecting all audit signatures against quantum threats.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/60 border border-white/20 backdrop-blur-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🧱 TECH WALL */}
        <section className="mt-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Core Technologies Powering{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              CSAP
            </span>
          </motion.h2>

          {/* Responsive Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 place-items-center backdrop-blur-md bg-white/40 p-6 sm:p-8 rounded-3xl border border-white/20 shadow-lg">
            {techLogos.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-3 transition-all duration-300 hover:scale-105 hover:bg-white/60 rounded-xl"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="h-10 sm:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <p className="text-xs sm:text-sm mt-2 text-gray-700 font-medium group-hover:text-gray-900 text-center">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 mt-6 text-center text-sm">
            Each technology represents a key pillar of CyberShield’s architecture.
          </p>
        </section>

        {/* EXECUTIVE SUMMARY + RESEARCH */}
        <section className=" -mt-65 -mb-15 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-2 sm:px-4 items-start ">
          {/* Executive Summary */}
          <div className="p-5 rounded-2xl bg-white/70 border border-white/20 backdrop-blur-lg shadow-md h-fit">
            <h4 className="text-base font-semibold mb-2 text-gray-900">
              Executive Summary
            </h4>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              CSAP automates CCTV vulnerability scanning using AI for classification,
              Blockchain for audit integrity, and PQC for cryptographic security. The platform
              integrates Rust-based scanning, Go microservices, and ML analytics under a
              Kubernetes-driven architecture.
            </p>
            <a
              href="/sih report.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-blue-600 hover:text-blue-800 underline text-sm font-medium"
            >
              Read full SIH report (PDF)
            </a>
          </div>

          {/* Research & References */}
          <div className="p-5 rounded-2xl bg-white/70 border border-white/20 backdrop-blur-lg shadow-md h-fit">
            <h4 className="text-base font-semibold mb-2 text-gray-900">
              Research & References
            </h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
              {references.map((r, index) => (
                <li key={index}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {r.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
