import SmartLink from "./SmartLink.jsx";

export default function Footer({ footer }) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__col">
          <p>{footer.address[0]}<br />{footer.address[1]}</p>
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
        </div>
        {footer.columns.map((column, i) => (
          <div className="footer__col" key={i}>
            {column.map((link) => (
              <SmartLink key={link.label} href={link.href}>{link.label}</SmartLink>
            ))}
          </div>
        ))}
        <p className="footer__note">{footer.note}</p>
      </div>
    </footer>
  );
}
