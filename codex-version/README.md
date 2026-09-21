# Codex version · Bennett Family Association concept

This folder is the **Codex-built version** of the family association website. It is intentionally separate from the Claude version in the repository root. The existing Claude project remains untouched.

A responsive seven-page concept built with static HTML, CSS, and JavaScript. No dependencies or build step are required. All names, association history, dates, amounts, and announcements are fictional sample content.

## Preview

From this folder, run `python3 -m http.server 4173 --bind 127.0.0.1`, then open `http://127.0.0.1:4173/`.

## Files

- `app.js`: shared navigation, page content, sample calendar, form previews, and shirt options.
- `styles.css`: shared visual system, home page, and responsive styles.
- `pages.css`: styles for the other six pages.
- `index.html` and each route's `index.html`: direct entrypoints; update shared head tags across them when changing fonts, stylesheet references, or metadata.
- `assets/`: generated concept photographs, saved with the site.

## Demo behavior

Payment, RSVP, contact, announcement, and merchandise forms show local previews only. They make no network submissions, persist no form data, and cannot charge money. Calendar navigation shows sample monthly meetings; its download is clearly labeled as a demo event. Meeting links and bylaws are sample dialogs. No authentication or admin editing system is implemented.

## Before a real client launch

Replace the fictional family identity, photos, history, dates, officers, dues, and event details. Agree on which family content should be public. Connect the client's payment/order provider, shared calendar, approved meeting link, and form delivery/review workflow. Choose a sustainable content-editing setup for the incoming officers; this prototype itself is edited in code.

## Asset provenance

Created using the built-in image generation tool, one request per asset, with no variants or retries:

- `dist/assets/family-reunion.png`: photorealistic 3:2 candid multigenerational mixed family picnic at a long outdoor table, leafy trees, golden light, white linen, burgundy accents, no text or real identities. Used as the home hero and family story imagery.
- `dist/assets/reunion-shirt.png`: portrait 4:5 natural cotton shirt on a wooden hanger, warm neutral background, burgundy heritage lettering reading “Bennett”, “FAMILY REUNION”, and “CHARLESTON · 2027”. Natural shirt is pictured even when the sample Burgundy option is selected, as labeled in the interface.

The site uses Google Fonts (Cormorant Garamond and DM Sans), with system fallbacks. All other assets are local.

## Verification

JavaScript syntax checked. All seven direct routes checked. Browser checks covered desktop and 375–390px layouts, mobile navigation, monthly dues, calendar navigation, shirt configuration and totals, RSVP, contact, and announcement previews. The optional WebMCP shirt configuration tool was checked with both valid and invalid quantities.
