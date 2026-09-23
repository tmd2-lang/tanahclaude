import { useEffect, useState } from "react";
import { PLACEHOLDER_EVENT } from "./SmartLink.jsx";

export default function Toast() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let timer;
    const show = (event) => {
      setMessage(event.detail);
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(null), 3600);
    };
    window.addEventListener(PLACEHOLDER_EVENT, show);
    return () => {
      window.removeEventListener(PLACEHOLDER_EVENT, show);
      clearTimeout(timer);
    };
  }, []);

  // The live region stays mounted so screen readers announce each change.
  return (
    <div className="toast" role="status" aria-live="polite" data-open={message ? "" : undefined}>
      {message}
    </div>
  );
}
