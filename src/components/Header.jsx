import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-white/70 border-b border-white/30 shadow-sm"
          : "bg-gradient-to-b from-white/80 via-white/60 to-transparent backdrop-blur-lg border-b border-white/20"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 12 }}
            className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold shadow-sm"
          >
            CS
          </motion.div>
          <span className="text-xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#06B6D4,#8B5CF6)]">
            CSAP
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <Link
                to={item.path}
                className={`font-medium ${
                  pathname === item.path
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
              {pathname === item.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 rounded-full"
                />
              )}
            </li>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="ml-4 px-5 py-2.5 rounded-lg text-white font-semibold bg-[linear-gradient(90deg,#2563EB,#06B6D4,#8B5CF6)] shadow-md"
          >
            Sign In
          </motion.a>
        </ul>
      </nav>
    </header>
  );
}
