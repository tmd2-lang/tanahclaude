import SmartLink from "./SmartLink.jsx";

// "primary" is the one thing the section wants you to do, "secondary" the
// alternative, "light" a primary on a dark band. No variant: a text link.
const VARIANTS = {
  primary: "btn btn--primary",
  secondary: "btn btn--secondary",
  light: "btn btn--light",
};

export default function Actions({ items }) {
  return (
    <>
      {items.map((item) => (
        <SmartLink key={item.label} className={VARIANTS[item.variant] ?? "action"} href={item.href}>
          {item.label}
        </SmartLink>
      ))}
    </>
  );
}
