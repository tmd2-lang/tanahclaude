import Reveal from "./Reveal.jsx";
import Actions from "./Actions.jsx";

/** A closing statement: small label, one large line, a sentence, links. */
export default function Band({ band }) {
  return (
    <section className="closing">
      <div className="wrap">
        <Reveal as="p" className="label">{band.label}</Reveal>
        <Reveal as="h2" className="closing__headline">{band.headline}</Reveal>
        {band.sub && <Reveal as="p" className="closing__sub">{band.sub}</Reveal>}
        {band.actions && <Reveal className="actions"><Actions items={band.actions} /></Reveal>}
      </div>
    </section>
  );
}
