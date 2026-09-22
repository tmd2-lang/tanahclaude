# Family Association Website

A seven-page website built from Tanah's brief, as a Vite and React app. The
build output is plain static files, so it runs on any static host.

## The site lives in `app/`

`app/` is the React version of all seven pages and is where work happens.
The `.html` files at the repository root are the original static build.
They are no longer maintained and can be deleted.

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
- A link whose `href` is `null` in the data renders as an inert,
  disabled link. That marks everything the client still has to supply:
  Cheddar Up, Zoom, the calendar, the PDFs.

## Legacy static files (repository root)

| File | Page |
| --- | --- |
| `index.html` | Home — welcome, four quick links, reunion countdown, recent news |
| `about.html` | History, mission, officers, governing documents, the five family lines |
| `meetings.html` | Monthly meeting info, upcoming dates, calendar embed slot, past minutes |
| `dues.html` | Dues amounts, what they fund, payment slot, FAQ |
| `reunion.html` | Reunion details, weekend schedule, t-shirt order block, lodging |
| `announcements.html` | Family news feed with submission link |
| `contact.html` | Officer contacts, message form, mailing address |
| `styles.css` | All styling, shared by every page |

The navigation and footer are repeated in each file rather than shared by a template.
That is deliberate: it keeps the site to plain files anyone can edit. If you change a
nav link, change it in all seven.

## Placeholder content

**Every name, date, address, email and link in this site is invented.** The association,
its officers and its members are fictional, the `@hargrovefamily.example` addresses are
not real addresses, and each `href="#"` is a link waiting for a destination. Replace the
lot before this goes anywhere near the public.

## What still needs wiring up

Four integration points are marked in the pages with dashed boxes and a "Setup note".

1. **Google Calendar** (`meetings.html`) — make the association calendar public and paste
   its embed iframe in place of the box. The "Join the next meeting" button is a plain
   link; point it at a standing Zoom room so it never needs updating.
2. **Dues payment** (`dues.html`) — Cheddar Up gives both an embed snippet and a plain
   link. Test the embed first; payment pages are often blocked from loading inside another
   site, and it fails silently. Linking out is the safer pattern.
3. **T-shirt orders** (`reunion.html`) — same Cheddar Up choice, plus the inventory cap so
   ordering stops at the print run.
4. **Contact form** (`contact.html`) — a static site cannot deliver mail on its own. Point
   the form's `action` at a form service, or delete the form and rely on the listed
   email addresses.

The announcements feed is hand-edited HTML. If nobody on the association's side is willing
to edit a file each month, move that page to something they can update themselves before
launch — otherwise it goes stale by the third month.

## A note on privacy

Birthdays are listed by name and day only, never the year, and no member addresses appear
anywhere. A full birthdate on a public page is the kind of detail that gets used against
people. Consider whether the announcements page and the officer contact list should sit
behind a password at all.

## Hosting

Static files, so anything will serve them: GitHub Pages, Netlify, Cloudflare Pages — all
free at this size. The only recurring cost is a domain name.
