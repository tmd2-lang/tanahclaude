import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/redesign.css";

// Set before first paint so reveal targets can hide without flashing.
if (typeof IntersectionObserver !== "undefined") {
  document.documentElement.classList.add("js");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
