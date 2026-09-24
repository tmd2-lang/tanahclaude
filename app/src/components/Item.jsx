import Reveal from "./Reveal.jsx";
import SmartLink from "./SmartLink.jsx";
import Photo from "./Photo.jsx";

export default function Item({ item }) {
  return (
    <Reveal as="li" className="item">
      <div className="item__media"><div className="item__slot"><Photo image={item.image} /></div></div>
      <div className="item__rule" />
      <p className="label item__label">{item.label}</p>
      <h3><SmartLink href={item.href}>{item.title}</SmartLink></h3>
      <p className="item__note">{item.note}</p>
      <SmartLink className="item__action" href={item.action.href}>{item.action.label}</SmartLink>
    </Reveal>
  );
}
