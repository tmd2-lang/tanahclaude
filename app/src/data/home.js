const home = {
  hero: {
    headline: "Welcome to the Hargrove Family",
    sub: "Keeping the descendants of Eli and Mattie Hargrove connected since 1978, through monthly meetings, family news and a reunion every summer.",
    actions: [
      { label: "2027 Reunion Details", href: "/reunion", variant: "primary" },
      { label: "Pay Dues", href: "/dues", variant: "secondary" },
    ],
  },

  // Drop files into app/public/images/ and set src to "images/<file>".
  plate: { src: null, alt: "The family gathered at a past reunion" },

  reunion: {
    label: "49th Annual Family Reunion",
    date: "July 16–18, 2027",
    place: "Baltimore, Maryland",
    action: { label: "Save the Date", href: "/reunion", variant: "light" },
  },

  trioHeading: "What’s Coming Up",
  trio: [
    {
      label: "July 16–18, 2027 · Baltimore",
      title: "Family Reunion 2027",
      image: { src: null, alt: "A long table set for the reunion picnic" },
      note: "Three days in Baltimore. See the schedule, registration and hotel information.",
      href: "/reunion",
      action: { label: "Reunion details", href: "/reunion" },
    },
    {
      label: "Sunday, Oct 11 · 7:00 PM ET",
      title: "Monthly Family Meetings",
      image: { src: null, alt: "Family members on the monthly video call" },
      note: "Second Sunday of every month on Zoom. All family members are welcome.",
      href: "/meetings",
      action: { label: "Join the meeting", href: null },
    },
    {
      label: "$25 · Order by June 18, 2027",
      title: "Reunion T-Shirts",
      image: { src: null, alt: "The 2027 reunion t-shirt" },
      note: "Youth and adult sizes. Order by June 18 to guarantee your size.",
      href: "/reunion#tshirts",
      action: { label: "Order shirts", href: "/reunion#tshirts" },
    },
  ],

  closing: {
    headline: "Family News",
    sub: "Birthdays, graduations, new babies and remembrances, shared by family members.",
    actions: [
      { label: "Read Announcements", href: "/news", variant: "secondary" },
      { label: "Share Your News", href: "/news" },
    ],
  },
};

export default home;
