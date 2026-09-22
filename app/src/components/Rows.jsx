import SmartLink from "./SmartLink.jsx";

export default function Rows({ rows }) {
  return (
    <dl className="rows">
      {rows.map((row) => (
        <div className="rows__row" key={row.term}>
          <dt className="label">{row.term}</dt>
          <dd>
            {row.href ? <SmartLink href={row.href}>{row.value}</SmartLink> : row.value}
            {row.note && <small>{row.note}</small>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
