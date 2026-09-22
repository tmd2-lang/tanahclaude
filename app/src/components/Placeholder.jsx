/**
 * Stands in for a third-party embed (calendar, payment, order form)
 * until the client's account exists, with setup notes for whoever wires
 * it up.
 */
export default function Placeholder({ label, text, setupTitle, setup, code, after }) {
  const paragraphs = Array.isArray(setup) ? setup : setup ? [setup] : [];
  return (
    <div className="placeholder">
      <div className="embed" role="note">
        <p className="label">{label}</p>
        <p>{text}</p>
      </div>
      {setupTitle && (
        <details className="setup">
          <summary>Setup note — {setupTitle}</summary>
          {paragraphs.map((p) => <p key={p}>{p}</p>)}
          {code && <pre><code>{code}</code></pre>}
          {after && <p>{after}</p>}
        </details>
      )}
    </div>
  );
}
