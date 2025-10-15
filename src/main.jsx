// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// NOTE: removed @fontsource import because the package version installed doesn't provide variable.css
// If you want the Inter font, either install a specific @fontsource version that includes variable.css
// or add a Google Fonts <link> in index.html.

createRoot(document.getElementById("root")).render(<App />);
