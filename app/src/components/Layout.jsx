import { Outlet } from "react-router-dom";
import site from "../data/site.js";
import Masthead from "./Masthead.jsx";
import Footer from "./Footer.jsx";
import ScrollManager from "./ScrollManager.jsx";
import Toast from "./Toast.jsx";

function skipToContent(event) {
  // A bare href="#main" would be read by the hash router as a route.
  event.preventDefault();
  document.getElementById("main")?.focus();
}

export default function Layout() {
  return (
    <>
      <a className="skip" href="#main" onClick={skipToContent}>Skip to content</a>
      <Masthead name={site.name} nav={site.nav} cta={site.cta} />
      <ScrollManager />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer footer={site.footer} />
      <Toast />
    </>
  );
}
