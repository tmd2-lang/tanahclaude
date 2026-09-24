import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";

/** The wide image under the home page opening. */
export default function Plate({ image }) {
  const hasPhoto = Boolean(image?.src);
  return (
    <div className="wrap">
      <Reveal className="plate" {...(hasPhoto ? {} : { role: "img", "aria-label": image?.alt })}>
        <Photo image={image} />
      </Reveal>
    </div>
  );
}
