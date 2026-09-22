import SmartLink from "./SmartLink.jsx";

export default function Listing({ items }) {
  return (
    <ul className="listing">
      {items.map((item) => (
        <li key={item.when}>
          <span className="listing__when">{item.when}</span>
          <span className="listing__what">{item.what}</span>
          <span className="listing__meta">
            {item.link ? <SmartLink href={item.link.href}>{item.link.label}</SmartLink> : item.meta}
          </span>
        </li>
      ))}
    </ul>
  );
}
