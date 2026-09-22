import Reveal from "./Reveal.jsx";

export default function Plate({ alt }) {
  return (
    <div className="wrap">
      <Reveal className="plate" role="img" aria-label={alt} />
    </div>
  );
}
