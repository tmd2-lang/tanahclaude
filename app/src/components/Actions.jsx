export default function Actions({ items }) {
  return (
    <>
      {items.map((item) => (
        <a key={item.label} className="action" href={item.href}>{item.label}</a>
      ))}
    </>
  );
}
