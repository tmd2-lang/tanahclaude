export default function Prose({ paragraphs }) {
  return (
    <div className="prose">
      {paragraphs.map((text) => <p key={text}>{text}</p>)}
    </div>
  );
}
