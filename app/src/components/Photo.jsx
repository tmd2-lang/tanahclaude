/** A photograph that fills its slot. Renders nothing until a src is supplied. */
export default function Photo({ image }) {
  if (!image?.src) return null;
  return <img className="photo" src={image.src} alt={image.alt ?? ""} loading="lazy" decoding="async" />;
}
