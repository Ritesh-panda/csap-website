import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#F9FAFB] via-[#F3F4F6] to-[#E5E7EB]">
          {/* Header */}
          <Header />

          {/* Main content area */}
          <main className="flex-grow pb-0 mb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}
