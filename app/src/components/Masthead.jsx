import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Actions from "./Actions.jsx";

export default function Masthead({ name, nav, cta }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the narrow-screen menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="masthead" data-open={open ? "" : undefined}>
      <div className="wrap masthead__inner">
        <Link className="masthead__name" to="/">{name}</Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className="nav" id="site-nav" aria-label="Main">
          {nav.map((item) => (
            // NavLink sets aria-current="page" on the active route, which the CSS keys off.
            <NavLink key={item.label} to={item.href} end={item.href === "/"}>
              {item.label}
            </NavLink>
          ))}
          <Actions items={[{ ...cta, variant: "primary" }]} />
        </nav>
      </div>
    </header>
  );
}
