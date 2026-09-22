import Reveal from "./Reveal.jsx";
import Actions from "./Actions.jsx";

export default function Hero({ established, hero }) {
  return (
    <section className="hero">
      <div className="wrap">
        <Reveal as="p" className="label">{established}</Reveal>
        <Reveal as="h1">{hero.headline}</Reveal>
        <Reveal as="p" className="hero__sub">{hero.sub}</Reveal>
        <Reveal className="actions"><Actions items={hero.actions} /></Reveal>
      </div>
    </section>
  );
}
