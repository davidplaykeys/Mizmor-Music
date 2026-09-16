# Contact form — office notification and auto-response

The demo request form at **mizmormusic.com/contact** now sends two emails on
every submission, both through Zoho:

1. **To `support@mizmormusic.com`** — the enquiry, with reply-to set to the
   family, so pressing Reply reaches the parent directly
2. **To the family** — an immediate branded acknowledgement

The Google Sheet write is unchanged; it remains a second record.

---

## What changed in the code

| File | Change |
|---|---|
| `netlify/functions/contact.js` | New. Sends both emails through Zoho SMTP |
| `netlify.toml` | New. Tells Netlify where the function lives |
| `components/BookingForm.js` | Posts to `/api/contact` instead of EmailJS |
| `lib/config.js` | EmailJS removed |
| `package.json` | `nodemailer` added |

EmailJS is out of the chain entirely. The `535 Authentication Failed` errors
came from Zoho refusing the credentials EmailJS was holding.

---

## Setup — two steps

### 1. Generate a Zoho app password

1. Sign in at **accounts.zoho.in** as `support@mizmormusic.com`
   (`.in`, not `.com` — the mailbox is on Zoho's India data centre, which the
   domain's `mx.zoho.in` records confirm)
2. **Security → App Passwords → Generate New Password**
3. Name it "Website contact form"
4. Copy it. Zoho shows it once only

If **Security** is not in the sidebar, click your profile picture → **My
Account**.

Then check **Zoho Mail → Settings → Mail Accounts → IMAP/SMTP Access** is
enabled. It is off by default on some plans, and no password works while it is.

### 2. Add the credentials to Netlify

On the **website** project — not the portal:

**Site configuration → Environment variables**

```
ZOHO_USER          = support@mizmormusic.com
ZOHO_APP_PASSWORD  = the app password from step 1
```

No `NEXT_PUBLIC_` prefix on either. That prefix would bundle them into the
browser, where anyone could read them and send mail as the office.

Then **Deploys → Trigger deploy → Clear cache and deploy site**.

---

## Testing

Submit the form at `/contact` with your own email address.

- You should receive the acknowledgement within seconds
- `support@mizmormusic.com` should receive the enquiry
- Replying to it should address the family, not the office

If nothing arrives, **Netlify → Logs → Functions** shows the actual SMTP error
rather than a status code.

---

## Design notes

**The office email is sent first and the acknowledgement may fail on its own.**
Losing an enquiry is far worse than a parent not getting a receipt, so the two
are not tied together. The form only reports failure if the office email fails.

**The mailbox password never reaches the browser.** The site is a static
export, so there is no server in the normal sense — the function is the only
server-side code, and it exists for this reason.

**Every email has a plain-text alternative** for clients that do not render
HTML.

---

## Before going live

Notification emails were failing from at least 5 September. The Google Sheet
write still succeeded and families still saw a thank-you message, so anyone who
booked in that window is waiting for a reply nobody knows about. Go through
those rows first.
