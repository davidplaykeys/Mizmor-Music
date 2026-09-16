import Link from 'next/link';
import VisionRegistrationForm from '@/components/VisionRegistrationForm';

export const metadata = {
  title: "Register \u2014 Vision 2020: Back to School | Mizmor Music | Orange CA",
  description: "Register for free eye examinations and a hands-on music experience at Vision 2020: Back to School, August 8, 2026, with Lestonnac Free Clinic.",
};

export default function Page() {
  return (
    <div className="page on">

        <div className="section" style={{background: 'var(--royal2)'}}>
          <div className="section-center">
            <div className="eyebrow" style={{justifyContent: 'center'}}>Free Registration</div>
            <h2 className="display" style={{fontSize: 'clamp(1.7rem,3vw,2.6rem)', color: '#fff', marginBottom: '.9rem'}}>Vision 2020: <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Back to School</em></h2>
            <p style={{fontSize: '.9rem', color: 'var(--dim)'}}>Open to all ages, from 8 to 80+. Advance registration is required for the free eye examinations. One form per attendee, please.</p>
          </div>

          <div className="reg-wrap">
            <div className="reg-form-box">
              <VisionRegistrationForm />

              <div className="ig-perk">
                <div className="ig-perk-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" /></svg></div>
                <div>
                  <p className="ig-perk-head">☀️ Free Sunglasses on the Day</p>
                  <p className="ig-perk-body">
                    Follow <a href="https://www.instagram.com/mizmormusicoc/" target="_blank" rel="noopener noreferrer">@mizmormusicoc</a> on
                    Instagram, show our team at the event, and collect a free pair of sunglasses — while supplies last.
                    Following is also the quickest way to hear about schedule changes on the day, and about future camps,
                    recitals and bongo circles.
                  </p>
                  <a className="ig-badge" href="https://www.instagram.com/mizmormusicoc/" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" /></svg><span>Follow @mizmormusicoc</span>
                  </a>
                </div>
              </div>
            </div>

            <aside className="reg-aside">
              <div className="reg-seats">⚠️ Space is Limited</div>
              <h4>Vision 2020: <em>Back to School</em></h4>
              <div className="reg-fact"><span>📅</span><span>Saturday, August 8, 2026</span></div>
              <div className="reg-fact"><span>⏰</span><span>10:00 am – 3:00 pm Pacific Time</span></div>
              <div className="reg-fact"><span>📍</span><span>Mizmor Music Center<br />Orange, California</span></div>
              <div className="reg-fact"><span>🎟️</span><span>Free — registration required for eye exams</span></div>
              <div className="reg-fact"><span>👓</span><span>Prescription glasses for qualifying children</span></div>
              <div className="reg-fact"><span>🎵</span><span>Hands-on Mizmor music experience</span></div>
              <div className="reg-fact"><span>☀️</span><span>Free sunglasses for Instagram followers</span></div>
              <div className="reg-fact"><span>👨‍👩‍👧‍👦</span><span>All ages welcome — 8 to 80+</span></div>
              <p className="reg-note">Hosted by Mizmor Music in partnership with <strong style={{color: 'var(--cream)'}}>Lestonnac Free Clinic</strong>. Questions? Email <a href="mailto:support@mizmormusic.com" style={{color: 'var(--gold)', textDecoration: 'none'}}>support@mizmormusic.com</a> or call <a href="tel:+16578445748" style={{color: 'var(--gold)', textDecoration: 'none'}}>(657) 844-5748</a>.</p>
            </aside>
          </div>

          <div style={{textAlign: 'center', marginTop: '2.5rem'}}>
            <Link href="/events" className="btn-outline">← Back to All Events</Link>
          </div>
        </div>
    </div>
  );
}
