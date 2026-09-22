const meetings = {
  intro: {
    label: "Meetings",
    title: "Second Sunday, every month.",
    sub: "7:00 PM Eastern, on Zoom. About an hour: roll call by line, treasurer’s report, reunion planning, then open floor. Everyone is welcome, dues-paid or not.",
    actions: [
      { label: "Join the next meeting", href: null },
      { label: "Add the calendar to your phone", href: null },
    ],
  },

  upcoming: {
    label: "Next three",
    heading: "Upcoming meetings.",
    items: [
      { when: "Sunday, Oct 11", what: "Reunion site visit report · t-shirt design vote", meta: "7:00–8:00 PM ET" },
      { when: "Sunday, Nov 8", what: "Budget for 2027 · scholarship committee", meta: "7:00–8:00 PM ET" },
      { when: "Sunday, Dec 13", what: "Christmas call — no business, just visiting", meta: "7:00–8:30 PM ET" },
    ],
  },

  calendar: {
    label: "Meeting calendar",
    text: "The association’s Google Calendar goes here. The recurring meeting is already on it, and each entry carries that month’s Zoom link.",
    setupTitle: "How to connect the calendar",
    setup: [
      "Make the association calendar public, then paste its embed code in place of this box:",
    ],
    code: '<iframe src="https://calendar.google.com/calendar/embed?src=CALENDAR_ID&ctz=America/New_York"\n  style="border:0;width:100%;height:600px" title="Meeting calendar"></iframe>',
    after: "Point “Join the next meeting” at the standing Zoom room so it never needs updating. A button that reads the next event out of the calendar automatically needs the Calendar API, which is more machinery than this site needs.",
  },

  minutes: {
    label: "For the record",
    heading: "Past minutes.",
    items: [
      { when: "September 2026", what: "Monthly meeting", link: { label: "Minutes (PDF)", href: null } },
      { when: "August 2026", what: "Monthly meeting", link: { label: "Minutes (PDF)", href: null } },
      { when: "July 2026", what: "Reunion business meeting", link: { label: "Minutes (PDF)", href: null } },
      { when: "June 2026", what: "Monthly meeting", link: { label: "Minutes (PDF)", href: null } },
    ],
  },

  questions: {
    label: "Questions about meetings",
    headline: "Dana keeps the minutes and the calendar.",
    sub: "Write to her for the link, the agenda, or last month’s recording. Meetings are recorded and the link stays up for two weeks, so missing 7:00 PM doesn’t mean missing the meeting.",
    actions: [{ label: "Email the secretary", href: "mailto:secretary@hargrovefamily.example" }],
  },
};

export default meetings;
