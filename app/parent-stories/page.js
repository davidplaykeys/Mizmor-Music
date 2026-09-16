import Link from 'next/link';

export const metadata = {
  title: "Parent Stories | Mizmor \u2014 Inclusive Music School | Orange County CA",
  description: "What families say about learning music at Mizmor.",
};

export default function Page() {
  return (
    <div className="page on">

        <div className="section" style={{background: 'var(--royal2)'}}>
          <div className="section-center">
            <div className="eyebrow">Parent Stories</div>
            <h2 className="display" style={{fontSize: 'clamp(1.7rem,3vw,2.6rem)', color: '#fff', marginBottom: '.9rem'}}>What Families <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Say</em></h2>
            <p style={{fontSize: '.9rem', color: 'var(--dim)'}}>Real words from families whose children have been transformed by music at Mizmor.</p>
          </div>


          <div className="test-grid" style={{marginBottom: '3.5rem'}}>
            <div className="test-card">
              <span className="test-quote-mark">"</span>
              <p className="test-text">We saw a transformation in our child's confidence within weeks. Music gave them a voice they never had before. Mizmor completely changed our lives.</p>
              <div className="test-person"><div className="test-avatar"><img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80&fit=crop&crop=face" alt="" loading="lazy" onerror="this.style.display='none'" /></div><div><div className="test-name">Sarah M.</div></div></div>
            </div>
            <div className="test-card">
              <span className="test-quote-mark">"</span>
              <p className="test-text">Music became a way for our child to express what words couldn't. Mizmor gave us hope and a community we didn't know we needed so badly.</p>
              <div className="test-person"><div className="test-avatar"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80&fit=crop&crop=face" alt="" loading="lazy" onerror="this.style.display='none'" /></div><div><div className="test-name">James & Lisa K.</div></div></div>
            </div>
            <div className="test-card">
              <span className="test-quote-mark">"</span>
              <p className="test-text">The instructors are incredibly patient and understanding. Our child actually looks forward to every session — that says everything about Mizmor.</p>
              <div className="test-person"><div className="test-avatar"><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80&fit=crop&crop=face" alt="" loading="lazy" onerror="this.style.display='none'" /></div><div><div className="test-name">Maria R.</div></div></div>
            </div>
          </div>


          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <div className="eyebrow" style={{justifyContent: 'center'}}>Get In Touch</div>
            <h3 className="display" style={{fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: '#fff', marginBottom: '.6rem'}}>We'd Love to <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Hear From You</em></h3>
            <p style={{fontSize: '.88rem', color: 'var(--dim)'}}>Whether you have a question, want to enroll, or just want to learn more — reach out. We respond within 24 hours.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '860px', margin: '0 auto 3rem'}}>
            <div style={{background: 'rgba(201,168,76,0.05)', border: '1px solid var(--border)', padding: '2rem'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '.8rem'}}>📍</div>
              <div className="eyebrow" style={{marginBottom: '.4rem'}}>Location</div>
              <p style={{fontSize: '.9rem', color: 'var(--cream)', fontWeight: '600', marginBottom: '.3rem'}}>Mizmor Music</p>
              <p style={{fontSize: '.85rem', color: 'var(--dim)'}}>1310 E Lincoln Ave, Orange, CA 92865</p>
              <p style={{fontSize: '.75rem', color: 'rgba(244,239,230,.35)', marginTop: '.5rem', fontStyle: 'italic'}}>A Ministry Incorporated Initiative</p>
            </div>
            <div style={{background: 'rgba(201,168,76,0.05)', border: '1px solid var(--border)', padding: '2rem'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '.8rem'}}>✉️</div>
              <div className="eyebrow" style={{marginBottom: '.4rem'}}>Email Us</div>
              <p style={{fontSize: '.95rem', marginBottom: '.5rem'}}><a href="mailto:support@mizmormusic.com" style={{color: 'var(--gold)', textDecoration: 'none', fontWeight: '600'}}>support@mizmormusic.com</a></p>
              <p style={{fontSize: '.82rem', color: 'var(--dim)'}}>We respond within 24 hours to all inquiries and session bookings.</p>
            </div>
            <div style={{background: 'rgba(201,168,76,0.05)', border: '1px solid var(--border)', padding: '2rem'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '.8rem'}}>📞</div>
              <div className="eyebrow" style={{marginBottom: '.4rem'}}>Call or Text</div>
              <p style={{fontSize: '.95rem', marginBottom: '.5rem'}}><a href="tel:+16578445748" style={{color: 'var(--gold)', textDecoration: 'none', fontWeight: '600'}}>+1 (657) 844-5748</a></p>
              <p style={{fontSize: '.82rem', color: 'var(--dim)'}}>Available Mon–Sat, 9am–7pm. Sunday by appointment.</p>
            </div>
            <div style={{background: 'rgba(201,168,76,0.05)', border: '1px solid var(--border)', padding: '2rem'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '.8rem'}}>🕐</div>
              <div className="eyebrow" style={{marginBottom: '.4rem'}}>Hours</div>
              <p style={{fontSize: '.88rem', color: 'var(--cream)', marginBottom: '.3rem'}}>Monday – Saturday: <strong style={{color: 'var(--gold)'}}>9am – 7pm</strong></p>
              <p style={{fontSize: '.88rem', color: 'var(--dim)'}}>Sunday: By Appointment</p>
              <p style={{fontSize: '.75rem', color: 'rgba(244,239,230,.35)', marginTop: '.5rem'}}>Serving: Orange County · Tustin · Orange · Santa Ana</p>
            </div>
          </div>

          <div className="brand-stripes divider" aria-hidden="true"><span className="bs-navy"></span><span className="bs-gold"></span><span className="bs-red"></span><span className="bs-cream"></span><span className="bs-navy"></span><span className="bs-gold"></span><span className="bs-red"></span><span className="bs-cream"></span></div>
          <div className="cta-band">
            <div className="cta-band-inner">
              <div className="cta-badge">Your Child Belongs Here</div>
              <h2 className="display">Ready to Begin the <em>Journey?</em></h2>
              <p>First session is always free. Book now — we'll reach out within 24 hours.</p>
              <div className="cta-band-btns">
                <Link href="/contact" className="btn-gold">📩 Book Free Session</Link>
                <Link href="/programs#sect-daap" className="btn-outline">★ Explore DAAP</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
