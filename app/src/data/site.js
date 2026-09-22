// All copy for the home page lives here, so wording changes never mean
// hunting through JSX. Dates that appear in more than one place are
// defined once and referenced.

export const REUNION_START = "2027-07-16T09:00:00-04:00";

const site = {
  name: "The Hargrove Family Association",
  established: "Est. 1978 · Baltimore, Maryland",

  nav: [
    { label: "Home", href: "index.html", current: true },
    { label: "About", href: "about.html" },
    { label: "Meetings", href: "meetings.html" },
    { label: "Dues", href: "dues.html" },
    { label: "Reunion", href: "reunion.html" },
    { label: "News", href: "announcements.html" },
    { label: "Contact", href: "contact.html" },
  ],

  hero: {
    headline: "We have never missed a July.",
    sub: "Forty-eight summers. Eleven cities. Five lines of one family that decided, in a church basement, to stay one.",
    actions: [
      { label: "The 2027 Reunion", href: "reunion.html" },
      { label: "Pay Dues", href: "dues.html" },
    ],
  },

  plateAlt: "Photograph slot: a wide image from a past reunion",

  reunion: {
    label: "The forty-ninth annual reunion",
    date: "July 16–18, 2027",
    place: "Baltimore, Maryland",
    action: { label: "Save the Date", href: "reunion.html" },
  },

  trioHeading: "The Hargrove Family.",

  trio: [
    {
      label: "July 16–18, 2027 · Baltimore",
      title: "Three Days Together. Every July.",
      note: "Friday fish fry, Saturday banquet and business meeting, Sunday memorial service and the picnic in Druid Hill.",
      href: "reunion.html",
      action: { label: "Reunion details", href: "reunion.html" },
    },
    {
      label: "Sunday, Oct 11 · 7:00 PM ET",
      title: "Second Sunday. Wherever You Are.",
      note: "An hour on the call, once a month. Roll call by line, treasurer’s report, then whatever needs saying.",
      href: "meetings.html",
      action: { label: "Join the meeting", href: "#" },
    },
    {
      label: "$25 · Order by June 18, 2027",
      title: "One Family. One Favorite Shirt.",
      note: "Plum with brass print, youth small through adult 4XL. Pick up Friday at the hospitality suite.",
      href: "reunion.html#tshirts",
      action: { label: "Order shirts", href: "reunion.html#tshirts" },
    },
  ],

  closing: {
    label: "Family news",
    headline: "Denise passed the bar. Josiah turned one. RaySharpe is gone.",
    sub: "Everything that happened to us since the last time we were all in a room together.",
    actions: [
      { label: "All Announcements", href: "announcements.html" },
      { label: "Submit News", href: "announcements.html" },
    ],
  },

  footer: {
    address: ["The Hargrove Family Association", "P.O. Box 4412, Baltimore, MD 21211"],
    email: "hello@hargrovefamily.example",
    columns: [
      [
        { label: "Pay dues", href: "dues.html" },
        { label: "Meeting calendar", href: "meetings.html" },
        { label: "Officers & bylaws", href: "about.html" },
      ],
      [
        { label: "2027 reunion", href: "reunion.html" },
        { label: "Reunion shirts", href: "reunion.html#tshirts" },
        { label: "Submit news", href: "announcements.html" },
      ],
      [
        { label: "Private Facebook group", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "Contact an officer", href: "contact.html" },
      ],
    ],
    note: "© 2026 The Hargrove Family Association. Demo build — every name, date and link is a placeholder, and the grey blocks are photograph slots.",
  },
};

export default site;
