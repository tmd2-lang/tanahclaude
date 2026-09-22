import { Link } from "react-router-dom";

/**
 * One link component for three kinds of destination:
 *   "/about"         a page in this app, via the router
 *   "mailto:…" etc.  a plain anchor
 *   null             a link the client hasn't supplied yet
 *
 * Unsupplied links render inert. They can't point at "#": under a hash
 * router that is a real route, and clicking it would jump to the home page.
 */
export default function SmartLink({ href, children, ...rest }) {
  if (href == null) {
    return (
      <a role="link" aria-disabled="true" tabIndex={0} title="Link to be connected" {...rest}>
        {children}
      </a>
    );
  }
  if (href.startsWith("/")) {
    return <Link to={href} {...rest}>{children}</Link>;
  }
  return <a href={href} {...rest}>{children}</a>;
}
