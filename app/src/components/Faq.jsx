export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <div className="faq__body"><p>{item.a}</p></div>
        </details>
      ))}
    </div>
  );
}
