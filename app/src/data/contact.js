const contact = {
  intro: {
    label: "Contact",
    title: "Reach somebody.",
    sub: "General questions go to the first address below and somebody answers within a few days. For anything specific, go straight to the officer who handles it.",
  },

  directory: {
    label: "Who handles what",
    heading: "Write to the right person.",
    rows: [
      { term: "Anything at all", value: "hello@hargrovefamily.example", href: "mailto:hello@hargrovefamily.example", note: "Read by the President and the Secretary" },
      { term: "Dues & money", value: "treasurer@hargrovefamily.example", href: "mailto:treasurer@hargrovefamily.example", note: "Rev. Clara Hargrove Boyd, Treasurer" },
      { term: "Meetings & minutes", value: "secretary@hargrovefamily.example", href: "mailto:secretary@hargrovefamily.example", note: "Dana Hargrove, Recording Secretary" },
      { term: "Reunion & shirts", value: "reunion@hargrovefamily.example", href: "mailto:reunion@hargrovefamily.example", note: "2027 planning committee" },
      { term: "History & photos", value: "historian@hargrovefamily.example", href: "mailto:historian@hargrovefamily.example", note: "Twyla Pratt, Historian — corrections to the family tree welcome" },
      { term: "A card or a call", value: "The Sunshine Committee", note: "Tell Aunt Clara Mae about a hospital stay, a loss or a graduation and she will handle it" },
    ],
  },

  form: {
    label: "Write to us",
    heading: "Send a message.",
    lines: ["Not sure", "Ruth", "Eli Jr.", "Naomi", "Corinne", "Samuel"],
    demoNotice: "Nothing was sent. This demo has no form service connected yet — use one of the addresses above in the meantime.",
    setupTitle: "Making this form actually send",
    setup: "A form on a static site has nowhere to deliver mail on its own. Point it at a form service, or remove it and rely on the addresses above, which most family members will use anyway.",
  },

  mail: {
    label: "By mail",
    heading: "Checks and paperwork.",
    address: ["The Hargrove Family Association", "P.O. Box 4412", "Baltimore, MD 21211"],
    note: "Make checks payable to The Hargrove Family Association, not to an officer by name, and write your line and what it’s for in the memo.",
    moved: {
      label: "Moved? Changed your number?",
      text: "Tell the Secretary. Half the work of a family association is keeping the roll current, and a returned envelope is how people quietly fall off it.",
    },
  },
};

export default contact;
