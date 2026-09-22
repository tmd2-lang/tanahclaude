import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/redesign.css";

// Set before first paint so reveal targets can hide without flashing.
if (typeof IntersectionObserver !== "undefined") {
  document.documentElement.classList.add("js");
}

// Hash routing ("/#/about") works on any static host with no server
// rewrite rules, including a subdirectory. For clean URLs on a host that
// can rewrite everything to index.html, swap in BrowserRouter.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
