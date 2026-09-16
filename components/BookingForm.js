'use client';
import { useState } from 'react';
import CountryCode from './CountryCode';
import { GOOGLE_SHEET_URL, CONTACT } from '@/lib/config';

const REQ = <span style={{ color: '#e07b7b' }}>*</span>;

export default function BookingForm() {
  const [msg, setMsg] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      setMsg({ tone: 'error', text: "⚠️ Please fill in all required fields (Parent Name, Child's Name, Phone, Email)." });
      return;
    }

    const data = {
      parentName: form.parentName.value.trim(),
      childName: form.childName.value.trim(),
      age: form.age.value || 'Not specified',
      learningProfile: form.learningProfile.value || 'Not specified',
      phone: (form.countryCode.value.replace('-CA', '') + ' ' + form.phoneNumber.value.trim()).trim(),
      email: form.email.value.trim(),
      programInterest: form.programInterest.value || 'Not specified',
      notes: form.notes.value.trim() || 'None',
      submittedAt: new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) + ' PT',
    };

    setMsg({ tone: 'pending', text: '⏳ Sending your request...' });

    // Two independent records: the Google Sheet, and email. The sheet write
    // uses no-cors, so the browser cannot see whether it landed — the email
    // response is the one that actually tells us anything.
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.warn('Google Sheets error:', err);
    }

    // Mail goes through a serverless function so the mailbox password never
    // reaches the browser. It notifies the office and sends the family an
    // acknowledgement in the same call.
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.error || 'Send failed');

      setMsg({
        tone: 'ok',
        text:
          "🎵 Thank you! We've sent a confirmation to your email, and we will reach out " +
          "within 24 hours to schedule your child's free demo session.",
      });
      form.reset();
    } catch (err) {
      console.warn('Contact error:', err);
      setMsg({
        tone: 'error',
        text: `⚠️ We could not send your request. Please email us at ${CONTACT.email} or call ${CONTACT.phone}.`,
      });
    }
  }

  const colour = msg?.tone === 'error' ? '#e07b7b' : msg?.tone === 'pending' ? 'var(--gold)' : undefined;

  return (
    <form id="bookForm" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Parent Name {REQ}</label>
          <input className="form-input" type="text" name="parentName" placeholder="Your full name" required maxLength={100} />
        </div>
        <div className="form-group">
          <label className="form-label">Child&rsquo;s Name {REQ}</label>
          <input className="form-input" type="text" name="childName" placeholder="Child's name" required maxLength={100} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Child&rsquo;s Age</label>
          <input className="form-input" type="number" name="age" placeholder="Age" min={2} max={18} />
        </div>
        <div className="form-group">
          <label className="form-label">Learning Profile</label>
          <select className="form-select" name="learningProfile" defaultValue="">
            <option value="">Select...</option>
            <option>Neurotypical</option>
            <option>Neurodivergent</option>
            <option>Not sure — DAAP can help</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Phone {REQ}</label>
          <div style={{ display: 'flex', gap: 8 }}>
            <CountryCode />
            <input className="form-input" type="tel" name="phoneNumber" placeholder="XXX XXX XXXX" required maxLength={20} style={{ flex: 1 }} />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Email {REQ}</label>
          <input className="form-input" type="email" name="email" placeholder="your@email.com" required maxLength={255} />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Program Interest</label>
        <select className="form-select" name="programInterest" defaultValue="">
          <option value="">Select...</option>
          <option>Neurotypical Program (Neurotypical)</option>
          <option>Neurodivergent Program (Neurodivergent)</option>
          <option>DAAP — Let us find the right path</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">About Your Child (Optional)</label>
        <textarea className="form-textarea" name="notes" placeholder="Share anything that would help us understand your child — sensory needs, interests, learning style..." />
      </div>

      <button type="submit" className="btn-gold form-submit">🎯 Book Your Free Demo Session — Click to Submit</button>

      <div className="form-msg" id="form-msg" style={{ display: msg ? 'block' : 'none', color: colour }}>
        {msg?.text}
      </div>
    </form>
  );
}
