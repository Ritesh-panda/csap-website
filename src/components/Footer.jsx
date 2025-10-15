import React from "react";

export default function Footer() {
  return (
    <>
      {/* Optional soft fade transition above footer */}
      <div className="h-8 bg-gradient-to-t from-gray-900 to-transparent"></div>

      <footer className="bg-gray-900 text-gray-300 py-6 w-full mt-0 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} CyberShield — Built with ❤️ using AI,
            Blockchain, and PQC security.
          </p>
        </div>
      </footer>
    </>
  );
}
