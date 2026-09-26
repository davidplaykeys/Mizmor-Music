# Mizmor Music — Next.js

The Mizmor Music site, rebuilt from the original single-file HTML as a
Next.js 14 App Router project. It builds to fully static HTML, so it can be
deployed to GitHub Pages, Vercel, Netlify, Cloudflare Pages or any static
host.

---

## Updating an existing checkout

If you already have this project in a folder connected to GitHub, copy the
contents of this zip **over** that folder — do not create a second one, and do
not run `git init` again. The `.git` folder is what remembers your GitHub
connection; keep it and every future update is three commands:

```
git add .
git commit -m "Update"
git push
```

If a push is ever rejected with "fetch first", it means the folder's history
and GitHub's have diverged (usually from a second `git init`). Resolve with
`git push --force origin main` once you're sure the local copy is the newer one.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

---

## Deploying

The site is hosted on **Netlify**, deployed automatically from `main`.
Settings live in `netlify.toml` (build command `npm run build`, publish
directory `out`, functions in `netlify/functions`).

The contact/booking form sends mail through the Netlify Function
`netlify/functions/contact.js`, so the site must run on Netlify — a plain
static host (e.g. GitHub Pages) would serve the pages but the form would
not work. Required environment variables are listed in
`SETUP-CONTACT-FORM.md`; they are set in Netlify, never in the code.

Custom domain (mizmormusic.com): Netlify → Domain management.

---

## Structure

```
app/
  layout.js                             shell: metadata, fonts, nav, ticker, footer, JSON-LD
  globals.css                           the entire stylesheet
  page.js                               /
  about/, programs/, neurodivergent-support/,
  parent-stories/, partner/, contact/
  events/page.js                        /events
  events/vision-2020-registration/      the registration form
components/
  Nav.js                                nav, dropdowns, mobile menu   (client)
  Ticker.js  Footer.js  MinistryBanner.js  BrandStripes.js
  MusicNotes.js                         floating notes                (client)
  BookingForm.js                        free demo booking             (client)
  VisionRegistrationForm.js             Vision 2020 registration      (client)
  CountryCode.js
lib/config.js                           form endpoints and keys
public/images/                          20 photos, extracted from the original file
```

Routes replaced the old `#hash` navigation, so every page now has a real,
crawlable URL:

| Page | URL |
|---|---|
| Home | `/` |
| About | `/about` |
| Programs | `/programs` |
| Neurodivergent Support | `/neurodivergent-support` |
| Parent Stories | `/parent-stories` |
| Partner | `/partner` |
| Events | `/events` |
| Vision 2020 registration | `/events/vision-2020-registration` |
| Contact | `/contact` |

---

## Forms

### Free demo booking (`/contact`)

Unchanged from the original: posts to the Google Apps Script endpoint and
sends notification + acknowledgement email through EmailJS. The EmailJS
browser SDK is gone — it now calls the REST API directly, so there is no
third-party script tag.

### Vision 2020 registration (`/events/vision-2020-registration`)

Posts to **FormSubmit**, delivered to `support@mizmormusic.com`. Captures
child's name, child's age, parent name, address, phone and email.

> **⚠️ FormSubmit needs one-time activation.** The first submission sends a
> confirmation link to `support@mizmormusic.com`. Until someone clicks it,
> **no registrations are delivered.** Submit a test entry as soon as the site
> is live, click the link, then test again.

All endpoints and keys live in `lib/config.js` and can be overridden with
environment variables (`NEXT_PUBLIC_*`) in a `.env.local` file or in your
host's dashboard.

---

## Editing events

All five events are in `app/events/page.js`. Each is an
`<article className="ev-card">` block containing its date chip, artwork,
title, time, location, description and button. The August 8 event also has
a featured banner above the list and an announcement bar on the homepage
(`app/page.js`).

Event artwork is inline SVG — one original piece per event, no stock
photography and no image files to manage.

Event structured data (schema.org) lives in `app/layout.js`. Keep it in step
with the page when dates change; incorrect dates in schema are worse than
none.

---

## Notes

- `output: 'export'` means Next's image optimizer is off (`unoptimized: true`).
  Photos are served as-is from `public/images`.
- The site is styled by one stylesheet, `app/globals.css`, carried over from
  the original build with its custom properties intact.
