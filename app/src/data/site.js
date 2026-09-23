// Shared across every page: identity, navigation and footer.
//
// Links: a path starting with "/" is a page in this app, "mailto:" and
// "https:" go where they say, and null marks a link the client still has
// to supply (Cheddar Up, Zoom, the calendar). Null links render inert
// rather than pointing at "#", which a hash router would treat as home.

export const REUNION_START = "2027-07-16T09:00:00-04:00";

const site = {
  name: "The Hargrove Family Association",
  shortName: "Hargrove Family Association",
  established: "Est. 1978 · Baltimore, Maryland",

  cta: { label: "Pay Dues", href: "/dues" },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Meetings", href: "/meetings" },
    { label: "Dues", href: "/dues" },
    { label: "Reunion", href: "/reunion" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],

  footer: {
    address: ["The Hargrove Family Association", "P.O. Box 4412, Baltimore, MD 21211"],
    email: "hello@hargrovefamily.example",
    columns: [
      [
        { label: "Pay dues", href: "/dues" },
        { label: "Meeting calendar", href: "/meetings" },
        { label: "Officers & bylaws", href: "/about" },
      ],
      [
        { label: "2027 reunion", href: "/reunion" },
        { label: "Reunion shirts", href: "/reunion#tshirts" },
        { label: "Submit news", href: "/news" },
      ],
      [
        { label: "Private Facebook group", href: null },
        { label: "Instagram", href: null },
        { label: "Contact an officer", href: "/contact" },
      ],
    ],
    note: "© 2026 The Hargrove Family Association. Demo build — every name, date and link is a placeholder, and the grey blocks are photograph slots.",
  },
};

export default site;
