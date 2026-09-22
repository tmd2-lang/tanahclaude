import SmartLink from "./SmartLink.jsx";

export default function Actions({ items }) {
  return (
    <>
      {items.map((item) => (
        <SmartLink key={item.label} className="action" href={item.href}>{item.label}</SmartLink>
      ))}
    </>
  );
}
