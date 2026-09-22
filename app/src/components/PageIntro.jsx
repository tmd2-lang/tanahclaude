import Reveal from "./Reveal.jsx";
import Actions from "./Actions.jsx";

export default function PageIntro({ intro }) {
  return (
    <section className="page-intro">
      <div className="wrap">
        <Reveal as="p" className="label">{intro.label}</Reveal>
        <Reveal as="h1">{intro.title}</Reveal>
        {intro.sub && <Reveal as="p" className="page-intro__sub">{intro.sub}</Reveal>}
        {intro.actions && <Reveal className="actions"><Actions items={intro.actions} /></Reveal>}
        {intro.note && <Reveal as="p" className="page-intro__note">{intro.note}</Reveal>}
      </div>
    </section>
  );
}
