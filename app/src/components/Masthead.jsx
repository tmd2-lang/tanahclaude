export default function Masthead({ name, nav }) {
  return (
    <header className="masthead">
      <div className="wrap masthead__inner">
        <a className="masthead__name" href="index.html">{name}</a>
        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <a key={item.label} href={item.href} aria-current={item.current ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
