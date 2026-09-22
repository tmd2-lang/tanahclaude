import Reveal from "./Reveal.jsx";
import SmartLink from "./SmartLink.jsx";

export default function Item({ item }) {
  return (
    <Reveal as="li" className="item">
      <div className="item__slot" />
      <div className="item__rule" />
      <p className="label item__label">{item.label}</p>
      <h3><SmartLink href={item.href}>{item.title}</SmartLink></h3>
      <p className="item__note">{item.note}</p>
      <SmartLink className="item__action" href={item.action.href}>{item.action.label}</SmartLink>
    </Reveal>
  );
}
