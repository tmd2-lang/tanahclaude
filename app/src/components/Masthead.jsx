import { Link, NavLink } from "react-router-dom";

export default function Masthead({ name, nav }) {
  return (
    <header className="masthead">
      <div className="wrap masthead__inner">
        <Link className="masthead__name" to="/">{name}</Link>
        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            // NavLink sets aria-current="page" on the active route, which the CSS keys off.
            <NavLink key={item.label} to={item.href} end={item.href === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
