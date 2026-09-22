import Reveal from "./Reveal.jsx";

/** A full-width band: a hairline, an optional heading, then content. */
export function Block({ label, heading, sub, id, children }) {
  return (
    <section className="block" id={id}>
      <div className="wrap">
        <div className="block__inner">
          {(label || heading) && (
            <Reveal className="block__head">
              {label && <p className="label">{label}</p>}
              {heading && <h2>{heading}</h2>}
              {sub && <p className="block__sub">{sub}</p>}
            </Reveal>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

/** A hairline, then a narrow heading column beside a wide content column. */
export function Split({ label, heading, aside, id, children }) {
  return (
    <section className="block" id={id}>
      <div className="wrap">
        <div className="block__inner split">
          <Reveal className="split__aside">
            {label && <p className="label">{label}</p>}
            {aside ?? (heading && <h2>{heading}</h2>)}
          </Reveal>
          <Reveal className="split__main">{children}</Reveal>
        </div>
      </div>
    </section>
  );
}
