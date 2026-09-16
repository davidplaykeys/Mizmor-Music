// Form delivery configuration.
//
// The demo booking form posts to /api/contact, a Netlify Function that sends
// through Zoho — the mailbox password lives in Netlify's environment
// variables and never reaches the browser. See netlify/functions/contact.js.
//
// The values below are public browser-side identifiers only.

export const GOOGLE_SHEET_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
  'https://script.google.com/macros/s/AKfycbxyGfy-LOAgESZQaCa28leG1Odxbh05HC95s-SPPNZ8_OVZTVvTlc6fV0feM0IrltWe/exec';

// Vision 2020 registrations are delivered by FormSubmit.
// After activating, you can swap the address for the random string
// FormSubmit gives you, so the inbox is not exposed in the page source.
export const FORMSUBMIT_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT ||
  'https://formsubmit.co/ajax/support@mizmormusic.com';

export const CONTACT = {
  email: 'support@mizmormusic.com',
  phone: '(657) 844-5748',
  phoneHref: '+16578445748',
};
