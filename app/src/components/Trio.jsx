import Reveal from "./Reveal.jsx";
import Item from "./Item.jsx";

export default function Trio({ heading, items }) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section__head"><h2>{heading}</h2></Reveal>
        <ul className="trio">
          {items.map((item) => <Item key={item.title} item={item} />)}
        </ul>
      </div>
    </section>
  );
}
