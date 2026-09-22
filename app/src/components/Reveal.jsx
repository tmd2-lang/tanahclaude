import { useRef } from "react";
import useReveal from "../hooks/useReveal.js";

export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <Tag ref={ref} className={["reveal", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </Tag>
  );
}
