import Reveal from "./Reveal.jsx";

export default function Item({ item }) {
  return (
    <Reveal as="li" className="item">
      <div className="item__slot" />
      <div className="item__rule" />
      <p className="label item__label">{item.label}</p>
      <h3><a href={item.href}>{item.title}</a></h3>
      <p className="item__note">{item.note}</p>
      <a className="item__action" href={item.action.href}>{item.action.label}</a>
    </Reveal>
  );
}
