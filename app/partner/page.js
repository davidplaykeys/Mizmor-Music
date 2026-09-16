import Link from 'next/link';

export const metadata = {
  title: "Partner, Invest or Volunteer | Mizmor Music | Orange County CA",
  description: "Support inclusive music education in Orange County \u2014 partner with us, invest, or volunteer.",
};

export default function Page() {
  return (
    <div className="page on">

        <div className="section" style={{background: 'var(--royal1)'}}>
          <div className="partner-hero">
            <div className="partner-hero-text">
              <div className="eyebrow">Partner · Invest · Volunteer</div>
              <h2>Build Something <em>That Lasts</em></h2>
              <p>Mizmor Music is more than a music school — it's a movement. We're building an inclusive community where every child thrives through music. We are looking for partners, investors, and volunteers who share our heart for children and community.</p>
              <p>Together, we can extend the reach of music's healing and transformative power across Orange County and beyond.</p>
              <Link href="/contact" className="btn-gold" style={{marginTop: '.8rem'}}>Get In Touch</Link>
            </div>
            <div className="partner-hero-img">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=680&q=85&fit=crop" alt="Partnership meeting" loading="lazy" />
            </div>
          </div>


          <div id="sect-investors">
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div className="eyebrow" style={{justifyContent: 'center'}}><span></span></div>
              <h2 className="display" style={{fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', color: '#fff'}}>Ways to <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Get Involved</em></h2>
            </div>
          </div>

          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', marginBottom: '3rem', overflow: 'hidden'}}>
            <div style={{flex: '1', minWidth: '160px', background: 'var(--royal2)', padding: '1.4rem', textAlign: 'center'}}>
              <div style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.8rem', color: 'var(--gold)'}}>800+</div>
              <div style={{fontSize: '.6rem', fontWeight: '700', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(244,239,230,.4)'}}>Children Served</div>
            </div>
            <div style={{flex: '1', minWidth: '160px', background: 'var(--royal2)', padding: '1.4rem', textAlign: 'center'}}>
              <div style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.8rem', color: 'var(--gold)'}}>OC</div>
              <div style={{fontSize: '.6rem', fontWeight: '700', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(244,239,230,.4)'}}>Orange County Reach</div>
            </div>
            <div style={{flex: '1', minWidth: '160px', background: 'var(--royal2)', padding: '1.4rem', textAlign: 'center'}}>
              <div style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.8rem', color: 'var(--gold)'}}>2</div>
              <div style={{fontSize: '.6rem', fontWeight: '700', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(244,239,230,.4)'}}>Learning Tracks</div>
            </div>
            <div style={{flex: '1', minWidth: '160px', background: 'var(--royal2)', padding: '1.4rem', textAlign: 'center'}}>
              <div style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.8rem', color: 'var(--gold)'}}>1</div>
              <div style={{fontSize: '.6rem', fontWeight: '700', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(244,239,230,.4)'}}>Proprietary Program</div>
            </div>
          </div>

          <div className="partner-cards" id="sect-investors">

            <div className="partner-card" id="sect-volunteers" style={{borderTop: '3px solid var(--gold)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '.9rem'}}>
                <div style={{width: '48px', height: '48px', background: 'rgba(201,168,76,0.12)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: '0'}}>🙌</div>
                <h4 style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.1rem', color: '#fff'}}>Volunteers</h4>
              </div>
              <p style={{fontSize: '.83rem', lineHeight: '1.82', color: 'var(--dim)', marginBottom: '1.1rem'}}>Musicians, educators, therapists, students, and parents — your time changes lives. Assist in sessions, support events, mentor children, or share your skills behind the scenes. Every hour you give helps a child find their voice through music.</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.1rem'}}>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Session Assistants</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Event Support</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Mentorship</span>
              </div>
              <Link href="/contact" className="btn-gold-outline" style={{width: '100%', justifyContent: 'center', fontSize: '.65rem'}}>Volunteer with Us</Link>
            </div>


            <div className="partner-card" style={{borderTop: '3px solid rgba(201,168,76,0.5)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '.9rem'}}>
                <div style={{width: '48px', height: '48px', background: 'rgba(201,168,76,0.12)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: '0'}}>🧠</div>
                <h4 style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.1rem', color: '#fff'}}>Therapy & Wellness Centers</h4>
              </div>
              <p style={{fontSize: '.83rem', lineHeight: '1.82', color: 'var(--dim)', marginBottom: '1.1rem'}}>ABA, occupational, speech, and behavioral therapy practices — music is a powerful complement to clinical care. Refer clients, co-develop programs, or collaborate on holistic neurodivergent support that bridges therapy goals with creative expression.</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.1rem'}}>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>ABA Therapy</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>OT & Speech</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Client Referrals</span>
              </div>
              <Link href="/contact" className="btn-gold-outline" style={{width: '100%', justifyContent: 'center', fontSize: '.65rem'}}>Partner as Therapy Center</Link>
            </div>


            <div className="partner-card" style={{borderTop: '3px solid rgba(201,168,76,0.5)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '.9rem'}}>
                <div style={{width: '48px', height: '48px', background: 'rgba(201,168,76,0.12)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: '0'}}>💼</div>
                <h4 style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.1rem', color: '#fff'}}>Impactful Investors</h4>
              </div>
              <p style={{fontSize: '.83rem', lineHeight: '1.82', color: 'var(--dim)', marginBottom: '1.1rem'}}>Invest in a scalable, mission-driven model built on the proprietary DAAP framework. Your investment directly expands access to inclusive music education for neurotypical and neurodivergent families across Orange County and beyond.</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.1rem'}}>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Impact Investment</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Scalable Model</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Community ROI</span>
              </div>
              <Link href="/contact" className="btn-gold-outline" style={{width: '100%', justifyContent: 'center', fontSize: '.65rem'}}>Investor Inquiry</Link>
            </div>


            <div className="partner-card" style={{borderTop: '3px solid rgba(201,168,76,0.5)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '.9rem'}}>
                <div style={{width: '48px', height: '48px', background: 'rgba(201,168,76,0.12)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: '0'}}>⛪</div>
                <h4 style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.1rem', color: '#fff'}}>Churches & Ministries</h4>
              </div>
              <p style={{fontSize: '.83rem', lineHeight: '1.82', color: 'var(--dim)', marginBottom: '1.1rem'}}>Bring Mizmor Music into your congregation. Our faith-rooted, inclusive programs align naturally with church missions to serve families and children. Co-host sessions, refer families, or build a music ministry together.</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.1rem'}}>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Co-Hosted Programs</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Family Referrals</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Faith-Aligned</span>
              </div>
              <Link href="/contact" className="btn-gold-outline" style={{width: '100%', justifyContent: 'center', fontSize: '.65rem'}}>Partner as a Church</Link>
            </div>


            <div className="partner-card" style={{borderTop: '3px solid rgba(201,168,76,0.5)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '.9rem'}}>
                <div style={{width: '48px', height: '48px', background: 'rgba(201,168,76,0.12)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: '0'}}>🏢</div>
                <h4 style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.1rem', color: '#fff'}}>Businesses & Corporations</h4>
              </div>
              <p style={{fontSize: '.83rem', lineHeight: '1.82', color: 'var(--dim)', marginBottom: '1.1rem'}}>Align your brand with purpose. Through CSR partnerships, employee engagement programs, and corporate sponsorships, your company can sponsor scholarships, fund inclusive music programs, or host team-volunteering days that change children's lives.</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.1rem'}}>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>CSR Partnerships</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Sponsorships</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Team Volunteering</span>
              </div>
              <Link href="/contact" className="btn-gold-outline" style={{width: '100%', justifyContent: 'center', fontSize: '.65rem'}}>Corporate Partnership</Link>
            </div>


            <div className="partner-card" style={{borderTop: '3px solid rgba(201,168,76,0.5)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '.9rem'}}>
                <div style={{width: '48px', height: '48px', background: 'rgba(201,168,76,0.12)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: '0'}}>💝</div>
                <h4 style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.1rem', color: '#fff'}}>Contributions & Donations</h4>
              </div>
              <p style={{fontSize: '.83rem', lineHeight: '1.82', color: 'var(--dim)', marginBottom: '1.1rem'}}>Every contribution makes inclusive music education possible. One-time gifts, recurring donations, scholarships, or in-kind giving of instruments and equipment — your generosity directly funds sessions, materials, and access for families who need it most.</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.1rem'}}>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>One-Time Gifts</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Recurring Giving</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Scholarships</span>
              </div>
              <Link href="/contact" className="btn-gold-outline" style={{width: '100%', justifyContent: 'center', fontSize: '.65rem'}}>Donate Now</Link>
            </div>


            <div className="partner-card" style={{borderTop: '3px solid rgba(201,168,76,0.5)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '.9rem'}}>
                <div style={{width: '48px', height: '48px', background: 'rgba(201,168,76,0.12)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: '0'}}>🌿</div>
                <h4 style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.1rem', color: '#fff'}}>Senior Living Facilities</h4>
              </div>
              <p style={{fontSize: '.83rem', lineHeight: '1.82', color: 'var(--dim)', marginBottom: '1.1rem'}}>Music bridges generations. Partner with us to bring intergenerational performances, sing-alongs, and student-led programs into assisted living, memory care, and retirement communities — enriching seniors and giving children a meaningful stage.</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.1rem'}}>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Intergenerational</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Memory Care</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Live Performances</span>
              </div>
              <Link href="/contact" className="btn-gold-outline" style={{width: '100%', justifyContent: 'center', fontSize: '.65rem'}}>Partner as Senior Facility</Link>
            </div>


            <div className="partner-card" style={{borderTop: '3px solid rgba(201,168,76,0.5)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '.9rem'}}>
                <div style={{width: '48px', height: '48px', background: 'rgba(201,168,76,0.12)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: '0'}}>🩺</div>
                <h4 style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.1rem', color: '#fff'}}>Doctors & Pediatricians</h4>
              </div>
              <p style={{fontSize: '.83rem', lineHeight: '1.82', color: 'var(--dim)', marginBottom: '1.1rem'}}>Pediatricians, developmental specialists, and family physicians — recommend Mizmor as a complementary resource for child development, sensory regulation, and emotional well-being. We partner with healthcare providers to support every child's whole-person growth.</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.1rem'}}>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Patient Referrals</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Developmental Support</span>
                <span style={{background: 'var(--gold3)', border: '1px solid var(--border)', color: 'var(--gold)', fontSize: '.58rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', padding: '.28rem .65rem'}}>Whole-Child Care</span>
              </div>
              <Link href="/contact" className="btn-gold-outline" style={{width: '100%', justifyContent: 'center', fontSize: '.65rem'}}>Refer a Patient</Link>
            </div>
          </div>


          <div id="sect-faith">
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div className="eyebrow" style={{justifyContent: 'center'}}><span></span></div>
              <h2 className="display" style={{fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', color: '#fff'}}>Our Faith <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>&amp; Values</em></h2>
              <p style={{fontSize: '.88rem', color: 'var(--dim)', maxWidth: '520px', margin: '.8rem auto 0'}}>Mizmor Music is rooted in faith — and our faith drives our commitment to every child, every family, and every community we serve.</p>
            </div>
            <div className="faith-box">
              <span className="faith-qmark">"</span>
              <p className="faith-quote">Music is more than sound — it is a tool for healing, restoration, and identity. At Mizmor Music, we serve and minister through music, impacting lives, building connection, and bringing hope and encouragement to every child and family we touch.</p>
              <p className="faith-source">— Mizmor Music · A Ministry Incorporated Initiative</p>
              <div className="faith-tags">
                <span className="faith-tag">Love</span>
                <span className="faith-tag">Patience</span>
                <span className="faith-tag">Encouragement</span>
                <span className="faith-tag">Faith</span>
                <span className="faith-tag">Service</span>
                <span className="faith-tag">Hope</span>
              </div>
            </div>
          </div>


          <div className="brand-stripes divider" aria-hidden="true"><span className="bs-navy"></span><span className="bs-gold"></span><span className="bs-red"></span><span className="bs-cream"></span><span className="bs-navy"></span><span className="bs-gold"></span><span className="bs-red"></span><span className="bs-cream"></span></div>
          <div className="cta-band" style={{marginTop: '3rem'}}>
            <div className="cta-band-inner">
              <div className="cta-badge">Let's Build Together</div>
              <h2 className="display">Ready to Make a <em>Difference?</em></h2>
              <p>Whether you invest, partner, or volunteer — your involvement creates lasting change for children and families.</p>
              <div className="cta-band-btns">
                <Link href="/contact" className="btn-gold">Get In Touch Today</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
