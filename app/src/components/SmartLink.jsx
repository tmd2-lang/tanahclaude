import { Link } from "react-router-dom";

export const PLACEHOLDER_EVENT = "placeholder-link";

function announcePlaceholder(label) {
  window.dispatchEvent(
    new CustomEvent(PLACEHOLDER_EVENT, {
      detail: `“${label}” isn’t connected yet. It goes live once the association’s account is set up.`,
    })
  );
}

/**
 * One link component for three kinds of destination:
 *   "/about"         a page in this app, via the router
 *   "mailto:…" etc.  a plain anchor
 *   null             a link the client hasn't supplied yet
 *
 * Unsupplied links can't point at "#": under a hash router that is a real
 * route, and clicking it would jump to the home page. They stay on the
 * page and raise a notice instead, so the demo still answers when pressed.
 */
export default function SmartLink({ href, children, ...rest }) {
  if (href == null) {
    const label = typeof children === "string" ? children : "This link";
    return (
      <a
        role="link"
        aria-disabled="true"
        tabIndex={0}
        onClick={(event) => {
          event.preventDefault();
          announcePlaceholder(label);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") announcePlaceholder(label);
        }}
        {...rest}
      >
        {children}
      </a>
    );
  }
  if (href.startsWith("/")) {
    return <Link to={href} {...rest}>{children}</Link>;
  }
  return <a href={href} {...rest}>{children}</a>;
}
