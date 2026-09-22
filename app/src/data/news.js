const news = {
  intro: {
    label: "Family news",
    title: "Announcements.",
    sub: "Birthdays, graduations, new babies, and the losses we carry together. Anybody in the family can post here — you don’t have to go through an officer.",
    actions: [{ label: "Submit an announcement", href: null }],
    note: "Goes to a short form: your name, the occasion, the date, and anything you want said. The Secretary posts new entries within a day or two.",
  },

  // Newest first. Birthdays give the day only, never the year.
  posts: [
    {
      kind: "Milestone",
      date: "September 14, 2026",
      title: "Denise Hargrove-Bell passed the Maryland bar",
      body: "Sworn in at the Court of Appeals in Annapolis, with nine cousins in the gallery. She is the third lawyer out of the Ruth line, and the first to say she is staying in Baltimore.",
    },
    {
      kind: "Celebration",
      date: "September 6, 2026",
      title: "September birthdays",
      list: [
        "Aunt Clara Mae — the 3rd",
        "Marcus Hargrove Jr. — the 12th",
        "Little Amari Coleman — the 19th, turning four",
        "Twyla Pratt — the 22nd",
      ],
    },
    {
      kind: "In memoriam",
      date: "August 31, 2026",
      title: "Uncle RaySharpe Hargrove, 1941–2026",
      body: "Samuel line. He drove up from Houston for thirty-one straight reunions and never once let anybody else pay for the Saturday fish. Services were held September 5 in Houston; the family asks that gifts go to the scholarship fund in his name. His name will be read at the 2027 memorial service.",
      memoriam: true,
    },
    {
      kind: "News",
      date: "August 30, 2026",
      title: "Scholarship fund cleared $6,000",
      body: "Two awards go out next spring to graduating seniors in the family. Applications open in February — the Historian is collecting them, and no, you don’t need a 4.0.",
    },
    {
      kind: "Celebration",
      date: "August 12, 2026",
      title: "Welcome, Josiah Elijah Pratt",
      body: "Born August 8 to Kendra and Michael Pratt, 7 lb 2 oz, in Atlanta. That is the sixth generation, and the first Elijah since 1955.",
    },
    {
      kind: "News",
      date: "July 20, 2026",
      title: "2027 goes to Baltimore, and the Eli Jr. line is hosting",
      body: "Voted in at the Saturday business meeting, 31 to 9 over Detroit. Dana Hargrove is chairing the planning committee; each line should name a delegate before October.",
    },
  ],

  archive: { label: "Past announcements", href: null },

  privacy: {
    label: "A word on what we post",
    headline: "Name and day. Never the year, never an address.",
    sub: "A full birthdate on a public page is the kind of detail that gets used against people. If you’d rather not appear here at all, tell the Secretary and you’ll be left off, no questions asked.",
  },
};

export default news;
