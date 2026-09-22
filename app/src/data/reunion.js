const reunion = {
  intro: {
    label: "The 49th annual reunion",
    title: "Baltimore, July 16–18, 2027.",
    sub: "Hosted by the Eli Jr. line, back where it started. A Friday meet-and-greet, the Saturday banquet, and Sunday service followed by the picnic in Druid Hill Park.",
    actions: [
      { label: "Register and pay", href: null },
      { label: "Order a t-shirt", href: "/reunion#tshirts" },
    ],
  },

  details: {
    label: "The details",
    rows: [
      { term: "Dates", value: "Friday, July 16 through Sunday, July 18, 2027" },
      { term: "Host hotel", value: "Room block under “Hargrove Family Reunion”", note: "Hotel and rate to be confirmed at the November meeting" },
      { term: "Banquet", value: "Saturday, 6:00 PM · Forest Park Banquet Hall", note: "4801 Liberty Heights Ave, Baltimore, MD 21207" },
      { term: "Registration", value: "$65 adults · $30 ages 6–17 · under 6 free", note: "Covers the banquet, the picnic and the souvenir booklet" },
      { term: "Host line", value: "The Eli Jr. line, chaired by Dana Hargrove" },
    ],
  },

  weekend: {
    label: "Weekend schedule",
    heading: "What happens when.",
    days: [
      {
        date: "Friday, July 16",
        title: "Meet and greet",
        events: [
          { time: "4:00 PM", what: "Hospitality suite opens — registration, name tags, shirt pickup" },
          { time: "7:00 PM", what: "Fish fry and card tables in the hotel atrium" },
          { time: "9:00 PM", what: "Photograph table — bring anything the Historian may not have" },
        ],
      },
      {
        date: "Saturday, July 17",
        title: "Business, ballgame, banquet",
        events: [
          { time: "9:30 AM", what: "Annual business meeting, breakfast provided" },
          { time: "1:00 PM", what: "Line-versus-line softball at Druid Hill; Ruth line defending" },
          { time: "6:00 PM", what: "Banquet, scholarship presentation and roll call by line" },
          { time: "9:00 PM", what: "Dance — the good DJ is booked" },
        ],
      },
      {
        date: "Sunday, July 18",
        title: "Service and farewell",
        events: [
          { time: "10:00 AM", what: "Memorial service — reading of the names we lost since 2024" },
          { time: "12:30 PM", what: "Picnic at pavilion 4; bring a cooler, stay as long as you like" },
          { time: "3:00 PM", what: "Announcement of the 2029 host line and city" },
        ],
      },
    ],
  },

  shirts: {
    label: "Reunion merch",
    heading: "The 2027 shirt.",
    slotAlt: "Photograph slot: the 2027 reunion t-shirt",
    caption: "Final art goes here once the design vote closes in October.",
    rows: [
      { term: "Price", value: "$25 · $28 for 2XL and up" },
      { term: "Sizes", value: "Youth S–XL, Adult S–4XL", note: "Unisex and women’s cuts both available" },
      { term: "Color", value: "Plum with brass print" },
      { term: "Pickup", value: "Friday at the hospitality suite", note: "Shipping is $6 if you can’t make it" },
    ],
    deadline: "Orders close Friday, June 18, 2027.",
    deadlineNote: "The printer needs four weeks and orders exactly what was paid for, so after that date your size isn’t guaranteed.",
    action: { label: "Order shirts on Cheddar Up", href: null },
  },

  order: {
    label: "Order form",
    text: "The Cheddar Up shirt order form goes here: one line item per size, a quantity field, and a note for the cut. Turn on its inventory cap so it stops taking orders at the print run.",
  },

  stay: {
    label: "Getting there",
    heading: "Where to stay.",
    paragraphs: [
      "The host hotel block is being negotiated now and will be posted here with the group code as soon as it is signed. Two backup options near the banquet hall are being held.",
      "Flying in: BWI is twenty minutes out and much easier than Dulles, and the light rail runs from BWI to downtown for $2.",
    ],
    headcount: {
      label: "Headcount",
      title: "Tell us you’re coming.",
      text: "Registration is the real RSVP, but if you’re not ready to pay yet, a headcount helps the host line plan the food. It takes thirty seconds.",
      action: { label: "Add your headcount", href: null },
    },
  },
};

export default reunion;
