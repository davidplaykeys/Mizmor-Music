'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { FORMSUBMIT_ENDPOINT, CONTACT } from '@/lib/config';
import { VISION_2020, isPast } from '@/lib/events';

const REQ = <span style={{ color: '#e07b7b' }}>*</span>;

export default function VisionRegistrationForm() {
  const [msg, setMsg] = useState(null);

  // Registration closes once the event has actually finished (3pm on the
  // day), not at midnight on the morning of it.
  const [now, setNow] = useState(null);
  useEffect(() => { setNow(new Date()); }, []);
  const over = isPast(VISION_2020, now || new Date());
  const full = Boolean(VISION_2020.registrationFull);

  if (full && !over) {
    return (
      <div className="reg-closed">
        <div className="reg-closed-icon">🎟️</div>
        <h3>Registration Is Now Full</h3>
        <p>
          All available places for Vision 2020: Back to School have been taken. Thank you
          to everyone who registered — we are looking forward to seeing you on Saturday.
        </p>
        <p>
          If you have already registered, no further action is needed; just bring your
          confirmation with you on the day.
        </p>
        <p>
          Couldn&rsquo;t get a place this time? Get in touch and we&rsquo;ll let you know as
          soon as the next community event is announced.
        </p>
        <div className="reg-closed-btns">
          <Link className="btn-gold" href="/events">See Other Events</Link>
          <Link className="btn-outline" href="/contact">Contact Us</Link>
        </div>
      </div>
    );
  }

  if (over) {
    return (
      <div className="reg-closed">
        <div className="reg-closed-icon">👓</div>
        <h3>Registration Is Closed</h3>
        <p>
          Vision 2020: Back to School took place on Saturday, August 8, 2026. Thank you to everyone
          who came, and to Lestonnac Free Clinic for making the free eye examinations possible.
        </p>
        <p>
          We run community events throughout the year — have a look at what&rsquo;s coming up next,
          or get in touch and we&rsquo;ll let you know when the next one is announced.
        </p>
        <div className="reg-closed-btns">
          <Link className="btn-gold" href="/events">See Upcoming Events</Link>
          <Link className="btn-outline" href="/contact">Contact Us</Link>
        </div>
      </div>
    );
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      setMsg({ tone: 'error', text: '⚠️ Please fill in all required fields.' });
      return;
    }

    const payload = {
      _subject: 'Vision 2020 Registration — ' + form.childName.value.trim(),
      _template: 'table',
      _captcha: 'false',
      Event: 'Vision 2020: Back to School — August 8, 2026',
      'Attendee Name': form.childName.value.trim(),
      'Attendee Age': form.childAge.value,
      'Parent / Guardian': form.parentName.value.trim(),
      Address: form.address.value.trim(),
      Phone: form.phone.value.trim(),
      Email: form.email.value.trim(),
      'Submitted At': new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) + ' PT',
    };

    setMsg({ tone: 'pending', text: '⏳ Sending your registration...' });

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || String(data.success) !== 'true') {
        throw new Error(data.message || 'FormSubmit rejected the submission');
      }
      setMsg({ tone: 'ok', text: "👓 You're registered! We'll email a confirmation shortly. See you on August 8th." });
      form.reset();
    } catch (err) {
      console.warn('Registration error:', err);
      setMsg({ tone: 'error', text: `⚠️ We could not submit your registration. Please email ${CONTACT.email} or call ${CONTACT.phone} and we will register you directly.` });
    }
  }

  const colour = msg?.tone === 'error' ? '#e07b7b' : msg?.tone === 'pending' ? 'var(--gold)' : undefined;

  return (
    <form id="visionForm" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Attendee&rsquo;s Name {REQ}</label>
          <input className="form-input" type="text" name="childName" placeholder="Full name of the person attending" required maxLength={100} />
        </div>
        <div className="form-group">
          <label className="form-label">Attendee&rsquo;s Age {REQ}</label>
          <input className="form-input" type="number" name="childAge" placeholder="Age" min={1} max={120} required />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Parent / Guardian Name {REQ}</label>
        <input className="form-input" type="text" name="parentName" placeholder="Your full name" required maxLength={100} />
      </div>

      <div className="form-group">
        <label className="form-label">Address {REQ}</label>
        <textarea className="form-textarea" name="address" placeholder="Street, City, State, ZIP" required style={{ minHeight: 90 }} />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Phone Number {REQ}</label>
          <input className="form-input" type="tel" name="phone" placeholder="(657) 844-5748" required maxLength={25} />
        </div>
        <div className="form-group">
          <label className="form-label">Email ID {REQ}</label>
          <input className="form-input" type="email" name="email" placeholder="your@email.com" required maxLength={255} />
        </div>
      </div>

      <button type="submit" className="btn-gold form-submit" style={{ marginTop: '1.2rem' }}>
        👓 Confirm My Free Registration
      </button>

      <div className="form-msg" id="vision-msg" style={{ display: msg ? 'block' : 'none', color: colour }}>
        {msg?.text}
      </div>
    </form>
  );
}
