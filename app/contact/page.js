import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: "Contact & Book a Free Demo | Mizmor Music | Orange County CA",
  description: "Book a free demo session or get in touch with Mizmor Music in Orange County, California.",
};

export default function Page() {
  return (
    <div className="page on">

        <div className="section" style={{background: 'var(--royal1)'}}>
          <div className="contact-wrap">
            <div className="contact-form-area">
              <div className="eyebrow">Get Started Today</div>
              <h2 className="display">Book Your <em>Free Session</em></h2>
              <p className="contact-intro">We'll reach out within 24 hours to schedule your child's free demo session. No commitment, no pressure — just music and understanding.</p>
              <BookingForm />
            </div>

            <div className="contact-info">
              <h3 className="display">We'd Love to <em>Hear From You</em></h3>
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div>
                  <div className="contact-detail-label">Location</div>
                  <div className="contact-detail-val">Mizmor Music<br />1310 E Lincoln Ave, Orange, CA 92865</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">✉️</div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-val"><a href="mailto:support@mizmormusic.com">support@mizmormusic.com</a></div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">🕐</div>
                <div>
                  <div className="contact-detail-label">Hours</div>
                  <div className="contact-detail-val">Mon–Sat: 9am – 7pm<br />Sun: By appointment</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div>
                  <div className="contact-detail-label">Serving</div>
                  <div className="contact-detail-val">Orange County · Tustin · Orange · Santa Ana</div>
                </div>
              </div>
              <div style={{background: 'rgba(201,168,76,.07)', border: '1px solid var(--bordersoft)', padding: '1.5rem', marginTop: '1.5rem'}}>
                <div className="contact-detail-label" style={{marginBottom: '.5rem'}}>★ The DAAP Advantage</div>
                <p style={{fontSize: '.8rem', color: 'var(--dim)', lineHeight: '1.78'}}>Not sure which track is right for your child? Our free DAAP session helps us discover the perfect musical pathway — personalized just for them.</p>
                <a href="#form-msg" className="btn-gold"   style={{marginTop: '1rem', fontSize: '.65rem', padding: '.65rem 1rem'}}>Start with DAAP — It's Free</a>
              </div>
              <div className="contact-qr-hint">
                <div className="contact-qr-hint-label">📲 Share Mizmor</div>
                <p>Share our contact page via QR code on flyers, brochures, or church slides. Email us to request print-ready materials.</p>
              </div>
              <div style={{background: 'rgba(201,168,76,.05)', border: '1px solid rgba(201,168,76,.1)', padding: '1.2rem', marginTop: '1rem'}}>
                <div className="contact-detail-label" style={{marginBottom: '.5rem'}}>⛪ Part of Ministry Incorporated</div>
                <p style={{fontSize: '.78rem', color: 'rgba(244,239,230,.4)', lineHeight: '1.7'}}>A <a href="https://ministryincorporated.com/" target="_blank" style={{color: 'var(--gold)', textDecoration: 'none'}}>Ministry Incorporated</a> Initiative · 1310 E Lincoln Ave, Orange, CA 92865</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
