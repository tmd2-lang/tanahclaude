import { useState } from "react";
import contact from "../data/contact.js";
import usePageTitle from "../hooks/usePageTitle.js";
import PageIntro from "../components/PageIntro.jsx";
import { Split } from "../components/Block.jsx";
import Rows from "../components/Rows.jsx";

function ContactForm({ form }) {
  const [attempted, setAttempted] = useState(false);

  return (
    <>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          setAttempted(true);
        }}
      >
        <div className="field">
          <label htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field field--select">
          <label htmlFor="c-line">Which line are you from?</label>
          <select id="c-line" name="line" defaultValue={form.lines[0]}>
            {form.lines.map((line) => <option key={line}>{line}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="c-message">Message</label>
          <textarea id="c-message" name="message" required />
        </div>
        <button className="action" type="submit">Send message</button>
        {attempted && <p className="form__notice" role="status">{form.demoNotice}</p>}
      </form>
      <details className="setup">
        <summary>Setup note — {form.setupTitle}</summary>
        <p>{form.setup}</p>
      </details>
    </>
  );
}

export default function Contact() {
  usePageTitle("Contact");
  const { intro, directory, form, mail } = contact;
  return (
    <>
      <PageIntro intro={intro} />

      <Split label={directory.label} heading={directory.heading}>
        <Rows rows={directory.rows} />
      </Split>

      <Split label={form.label} heading={form.heading}>
        <ContactForm form={form} />
      </Split>

      <Split label={mail.label} heading={mail.heading}>
        <address className="address">
          {mail.address.map((line, i) => (
            <span key={line}>{line}{i < mail.address.length - 1 && <br />}</span>
          ))}
        </address>
        <p className="address__note">{mail.note}</p>
        <div className="aside-note">
          <p className="label">{mail.moved.label}</p>
          <p>{mail.moved.text}</p>
        </div>
      </Split>
    </>
  );
}
