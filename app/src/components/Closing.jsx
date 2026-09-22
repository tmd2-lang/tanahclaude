import Reveal from "./Reveal.jsx";
import Actions from "./Actions.jsx";

export default function Closing({ closing }) {
  return (
    <section className="closing">
      <div className="wrap">
        <Reveal as="p" className="label">{closing.label}</Reveal>
        <Reveal as="h2" className="closing__headline">{closing.headline}</Reveal>
        <Reveal as="p" className="closing__sub">{closing.sub}</Reveal>
        <Reveal className="actions"><Actions items={closing.actions} /></Reveal>
      </div>
    </section>
  );
}
