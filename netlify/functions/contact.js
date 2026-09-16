/**
 * Contact / demo-request handler for mizmormusic.com
 *
 * Sends through Zoho SMTP, the same mailbox the office already uses, so the
 * from-address is genuinely support@mizmormusic.com and no DNS changes are
 * needed — the domain's SPF record already authorises Zoho.
 *
 * Two emails per submission:
 *   1. The enquiry, to the office, with reply-to set to the family
 *   2. An immediate acknowledgement, to the family
 *
 * Runs server-side on Netlify. The mailbox password never reaches the browser.
 */

import nodemailer from 'nodemailer';

const OFFICE = 'support@mizmormusic.com';
const PHONE = '(657) 844-5748';

// The mailbox sits on Zoho's India data centre (the domain's MX records point
// at mx.zoho.in), so the SMTP host must be .in — smtp.zoho.com will refuse the
// credentials with a 535 no matter how correct the password is.
const SMTP_HOST = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.in';
const SMTP_PORT = Number(process.env.ZOHO_SMTP_PORT || 465);

function esc(v) {
  return String(v ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function row(label, value) {
  if (!value) return '';
  return `<p style="margin:0 0 6px;font-size:14px;">
            <span style="color:#777;">${label}:</span>
            <strong style="color:#0f1829;">${esc(value)}</strong>
          </p>`;
}

/** Sent to the family, immediately. */
function acknowledgement(d) {
  const child = d.childName ? esc(d.childName) : 'your child';
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;
              max-width:560px;margin:0 auto;color:#1a1a1a;line-height:1.6;">
    <div style="height:5px;background:#0f1829;"></div>
    <div style="height:3px;background:#c9a84c;"></div>
    <div style="padding:32px 28px;">
      <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;
                color:#a8863a;margin:0 0 6px;font-weight:700;">Mizmor Music</p>
      <h1 style="font-size:22px;margin:0 0 18px;color:#0f1829;font-weight:600;">
        Thank you — we have your request
      </h1>
      <p style="margin:0 0 16px;">Dear ${esc(d.parentName || 'Parent')},</p>
      <p style="margin:0 0 16px;">
        Thank you for getting in touch about music lessons for ${child}. We have received
        your request, and a member of our team will contact you within one working day to
        arrange a free demo session.
      </p>
      <div style="background:#f7f4ed;border-left:3px solid #c9a84c;padding:16px 18px;margin:22px 0;">
        <p style="font-size:11px;letter-spacing:1.6px;text-transform:uppercase;
                  color:#a8863a;margin:0 0 10px;font-weight:700;">What you told us</p>
        ${row('Student', d.childName)}
        ${row('Age', d.age)}
        ${row('Programme', d.programInterest)}
        ${row('Phone', d.phone)}
      </div>
      <p style="margin:0 0 16px;">
        The first session is free and there is no obligation. It is simply a chance for your
        child to try an instrument, and for us to understand how they learn best.
      </p>
      <p style="margin:0 0 22px;">
        If anything changes, or you would rather speak to us sooner, call
        <a href="tel:+16578445748" style="color:#a8863a;">${PHONE}</a> or reply to this email.
      </p>
      <p style="margin:0 0 4px;">Warm regards,</p>
      <p style="margin:0 0 2px;font-weight:600;color:#0f1829;">The Mizmor Music Team</p>
      <p style="margin:0;font-size:13px;color:#666;font-style:italic;">Music. Life. Miracles.</p>
    </div>
    <div style="border-top:1px solid #e4dfd4;padding:16px 28px;font-size:11px;color:#8a8a8a;">
      Mizmor Music &middot; An Inclusive Music School &middot; A Ministry Incorporated Initiative<br/>
      Orange County, California &middot;
      <a href="https://mizmormusic.com" style="color:#a8863a;">mizmormusic.com</a>
    </div>
  </div>`;
}

/** Sent to the office. */
function notification(d) {
  const fields = [
    ['Parent / guardian', d.parentName],
    ['Child', d.childName],
    ['Age', d.age],
    ['Learning profile', d.learningProfile],
    ['Phone', d.phone],
    ['Email', d.email],
    ['Programme interest', d.programInterest],
    ['Notes', d.notes],
    ['Submitted', d.submittedAt],
  ];
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;
              max-width:560px;color:#1a1a1a;line-height:1.6;">
    <h2 style="color:#0f1829;font-size:18px;margin:0 0 4px;">New demo session request</h2>
    <p style="color:#777;font-size:13px;margin:0 0 18px;">via mizmormusic.com/contact</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${fields.map(([k, v]) => `
        <tr>
          <td style="padding:7px 12px 7px 0;color:#777;width:150px;vertical-align:top;
                     border-bottom:1px solid #eee;">${k}</td>
          <td style="padding:7px 0;border-bottom:1px solid #eee;">
            ${v ? esc(v) : '<span style="color:#bbb;">—</span>'}
          </td>
        </tr>`).join('')}
    </table>
    <p style="margin:20px 0 0;font-size:13px;color:#666;">
      Reply directly to this email to reach the family. An acknowledgement has already
      been sent to them.
    </p>
  </div>`;
}

/** Plain-text fallback, for clients that do not render HTML. */
function plain(d) {
  return [
    'New demo session request — mizmormusic.com',
    '',
    `Parent / guardian: ${d.parentName || '-'}`,
    `Child: ${d.childName || '-'}`,
    `Age: ${d.age || '-'}`,
    `Learning profile: ${d.learningProfile || '-'}`,
    `Phone: ${d.phone || '-'}`,
    `Email: ${d.email || '-'}`,
    `Programme interest: ${d.programInterest || '-'}`,
    `Notes: ${d.notes || '-'}`,
    `Submitted: ${d.submittedAt || '-'}`,
  ].join('\n');
}

export default async (request) => {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const user = process.env.ZOHO_USER;
  const pass = process.env.ZOHO_APP_PASSWORD;
  if (!user || !pass) {
    console.error('ZOHO_USER or ZOHO_APP_PASSWORD is not set');
    return Response.json({ error: 'Email is not configured.' }, { status: 500 });
  }

  let d;
  try {
    d = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const email = String(d.email || '').trim();
  if (!email.includes('@') || !String(d.parentName || '').trim()) {
    return Response.json({ error: 'Please provide a name and email address.' }, { status: 400 });
  }

  d.submittedAt = d.submittedAt ||
    new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) + ' PT';

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user, pass },
  });

  // The office notification is the one that must not be lost, so it goes
  // first and the acknowledgement is allowed to fail on its own.
  let officeSent = false;
  try {
    await transporter.sendMail({
      from: `"Mizmor Music" <${user}>`,
      to: OFFICE,
      replyTo: `"${d.parentName}" <${email}>`,
      subject: `Demo request — ${d.childName || d.parentName}`,
      text: plain(d),
      html: notification(d),
    });
    officeSent = true;
  } catch (err) {
    console.error('Office notification failed:', err.message);
  }

  try {
    await transporter.sendMail({
      from: `"Mizmor Music" <${user}>`,
      to: email,
      replyTo: OFFICE,
      subject: 'We have your request — Mizmor Music',
      text:
        `Dear ${d.parentName},\n\n` +
        `Thank you for getting in touch about music lessons. We have received your ` +
        `request and will contact you within one working day to arrange a free demo ` +
        `session.\n\nIf you would rather speak to us sooner, call ${PHONE}.\n\n` +
        `Warm regards,\nThe Mizmor Music Team\nMusic. Life. Miracles.`,
      html: acknowledgement(d),
    });
  } catch (err) {
    console.error('Acknowledgement failed:', err.message);
  }

  if (!officeSent) {
    return Response.json({
      error: `We could not send your request. Please call ${PHONE} or email ${OFFICE}.`,
    }, { status: 502 });
  }

  return Response.json({ ok: true });
};

export const config = { path: '/api/contact' };
