import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll on navigation, or jumps to #anchor when the route has one
 * ("/reunion#tshirts").
 *
 * Runs as a layout effect and renders before the page content, so it
 * settles the scroll position before each page's reveal effects measure
 * what is on screen. Measured against the old scroll position instead,
 * they'd decide the wrong things were below the fold.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
