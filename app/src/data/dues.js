const dues = {
  intro: {
    label: "Dues",
    title: "Dues keep the association running.",
    sub: "$40 a year per adult member, or $5 a month if that is easier. The year runs January to December, and members 17 and under are covered by a parent’s membership.",
    actions: [
      { label: "Pay dues on Cheddar Up", href: null },
      { label: "Mail a check instead", href: "/contact" },
    ],
  },

  funds: {
    label: "Where it goes",
    heading: "What forty dollars does.",
    rows: [
      { term: "Reunion", value: "Venue deposit and the Saturday banquet subsidy", note: "About half of every dollar" },
      { term: "Scholarship", value: "Two awards a year to graduating seniors", note: "$6,100 in the fund" },
      { term: "Sunshine", value: "Flowers, cards and grocery money in hard weeks" },
      { term: "Operating", value: "Zoom, this website, the P.O. box, printing" },
    ],
  },

  payment: {
    label: "Payment form",
    text: "The Cheddar Up dues collection goes here, with the annual and monthly options as separate items. Card, bank transfer or Apple Pay; no account needed.",
    setupTitle: "Embedding versus linking",
    setup: [
      "Cheddar Up gives both an embed snippet and a plain link for each collection. Test the embed before relying on it: payment pages are often blocked from loading inside another site, and when that happens the box renders empty with no error.",
      "If it is blocked, delete this box and keep the “Pay dues on Cheddar Up” link. That is the more reliable pattern anyway, and it keeps card details off this site entirely.",
    ],
  },

  faq: {
    label: "Before you ask",
    heading: "Dues questions.",
    items: [
      {
        q: "Can I pay monthly instead of all at once?",
        a: "Yes. Choose the $5 monthly item on the payment page and it runs on the same day each month until you cancel. Twelve monthly payments and one annual payment both come to $40 — there is no surcharge for spreading it out.",
      },
      {
        q: "Is my payment tax-deductible?",
        a: "No. The association is a social club, not a 501(c)(3), so dues are not deductible and we cannot issue a tax receipt. Gifts to the scholarship fund are not deductible either. If that ever changes, it will be said here first.",
      },
      {
        q: "What if $40 is not possible this year?",
        a: "Then pay nothing and come anyway. Write to the Treasurer at treasurer@hargrovefamily.example and she will quietly mark you paid for the year. No form, no explanation, and it stays between you and her. Nobody in this family is priced out of the family.",
      },
      {
        q: "Am I paid up? I honestly can’t remember.",
        a: "Email the Treasurer and she will check the roll. Paying twice is harmless — she rolls the extra into next year.",
      },
    ],
  },

  receipt: {
    label: "After you pay",
    headline: "Your emailed receipt is your confirmation.",
    sub: "It arrives the moment the payment goes through. There is nothing else to send, and you don’t need to tell anyone you paid.",
  },
};

export default dues;
