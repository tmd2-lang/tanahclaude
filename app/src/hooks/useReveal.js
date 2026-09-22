import { useLayoutEffect } from "react";

/**
 * Hides the element and rises it in when it scrolls into view.
 *
 * Anything already on screen at mount is left alone, so the first
 * screenful renders at full opacity and the page is correct before any
 * of this runs. Registration happens in a layout effect, before paint,
 * so nothing flashes visible and then hides.
 */
export default function useReveal(ref) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return undefined;

    el.classList.add("pending");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}
