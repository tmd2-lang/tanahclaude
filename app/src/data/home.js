const home = {
  hero: {
    headline: "We have never missed a July.",
    sub: "Forty-eight summers. Eleven cities. Five lines of one family that decided, in a church basement, to stay one.",
    actions: [
      { label: "The 2027 Reunion", href: "/reunion", variant: "primary" },
      { label: "Pay Dues", href: "/dues", variant: "secondary" },
    ],
  },

  plateAlt: "Photograph slot: a wide image from a past reunion",

  reunion: {
    label: "The forty-ninth annual reunion",
    date: "July 16–18, 2027",
    place: "Baltimore, Maryland",
    action: { label: "Save the Date", href: "/reunion", variant: "light" },
  },

  trioHeading: "The Hargrove Family.",
  trio: [
    {
      label: "July 16–18, 2027 · Baltimore",
      title: "Three Days Together. Every July.",
      note: "Friday fish fry, Saturday banquet and business meeting, Sunday memorial service and the picnic in Druid Hill.",
      href: "/reunion",
      action: { label: "Reunion details", href: "/reunion" },
    },
    {
      label: "Sunday, Oct 11 · 7:00 PM ET",
      title: "Second Sunday. Wherever You Are.",
      note: "An hour on the call, once a month. Roll call by line, treasurer’s report, then whatever needs saying.",
      href: "/meetings",
      action: { label: "Join the meeting", href: null },
    },
    {
      label: "$25 · Order by June 18, 2027",
      title: "One Family. One Favorite Shirt.",
      note: "Plum with brass print, youth small through adult 4XL. Pick up Friday at the hospitality suite.",
      href: "/reunion#tshirts",
      action: { label: "Order shirts", href: "/reunion#tshirts" },
    },
  ],

  closing: {
    label: "Family news",
    headline: "Denise passed the bar. Josiah arrived. RaySharpe is gone.",
    sub: "Everything that happened to us since the last time we were all in a room together.",
    actions: [
      { label: "All Announcements", href: "/news", variant: "secondary" },
      { label: "Submit News", href: "/news" },
    ],
  },
};

export default home;
