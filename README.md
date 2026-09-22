# Family Association Website

A seven-page website built from Tanah's brief, as a Vite and React app. The
build output is plain static files, so it runs on any static host.

## Running it

```sh
cd app
npm install
npm run dev      # http://localhost:5173
npm run build    # writes app/dist
```

- `src/data/` holds every word on the site: `site.js` for the name, nav
  and footer, and one file per page. Wording changes never touch JSX.
- `src/pages/` has one component per route; `src/components/` holds the
  shared pieces they're assembled from.
- Routing is hash-based (`/#/about`), so the build runs on any static
  host, including from a subdirectory, with no server configuration.
  For clean URLs on a host that can rewrite every path to `index.html`,
  swap `HashRouter` for `BrowserRouter` in `src/main.jsx`.

## Placeholder content

**Every name, date, address, email and link in this site is invented.** The association,
its officers and its members are fictional, and the `@hargrovefamily.example` addresses are
not real. Replace all of it before this goes anywhere near the public.

A link whose `href` is `null` in the data files renders as an inert, disabled link. Those
mark everything the client still has to supply: Cheddar Up, Zoom, the calendar, the PDFs,
and the social accounts. Search `src/data/` for `href: null` to find them all.

The grey blocks are photograph slots.

## What still needs wiring up

Four integration points are marked on the pages with placeholder boxes and a "Setup note".

1. **Google Calendar** (Meetings) — make the association calendar public and paste its
   embed iframe in place of the placeholder. Point "Join the next meeting" at a standing
   Zoom room so it never needs updating.
2. **Dues payment** (Dues) — Cheddar Up gives both an embed snippet and a plain link. Test
   the embed first; payment pages are often blocked from loading inside another site, and
   it fails silently. Linking out is the safer pattern.
3. **T-shirt orders** (Reunion) — same Cheddar Up choice, plus the inventory cap so
   ordering stops at the print run.
4. **Contact form** (Contact) — a static site cannot deliver mail on its own. Wire the
   form to a form service, or remove it and rely on the listed addresses. Until then,
   submitting shows a notice that nothing was sent.

Announcements live in `src/data/news.js` and need a rebuild to publish. If nobody on the
association's side is willing to do that each month, move the feed to something they can
update themselves before launch — otherwise it goes stale by the third month.

## A note on privacy

Birthdays are listed by name and day only, never the year, and no member addresses appear
anywhere. A full birthdate on a public page is the kind of detail that gets used against
people. Consider whether the announcements page and the officer contact list should sit
behind a password at all.

## Hosting

Run `npm run build` in `app/` and deploy the contents of `app/dist`. Any static host will
serve it — GitHub Pages, Netlify, Cloudflare Pages — free at this size. The only recurring
cost is a domain name.
