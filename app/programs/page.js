import Link from 'next/link';

export const metadata = {
  title: "Programs | Mizmor Music | Piano, Guitar, Drums, Bongo & Vocals",
  description: "Neurotypical and neurodivergent programs, shared sessions, the DAAP pathway and short courses at Mizmor Music.",
};

export default function Page() {
  return (
    <div className="page on">

        <div className="section">
          <div className="tracks-intro">
            <div className="eyebrow" style={{justifyContent: 'center'}}><span></span></div>
            <h2>Inclusive Music School — Music Lessons for Kids, Orange County CA</h2>
            <p>Mizmor Music is built for <strong style={{color: '#fff'}}>neurotypical</strong> and <strong style={{color: '#fff'}}>neurodivergent</strong> students — both welcomed equally, both celebrated. Two dedicated tracks lead to the same place: shared music-making and community.</p>
          </div>


          <div className="tracks-grid" id="sect-neurotypical">

            <div className="track-card">
              <div className="track-img">
                <img src="/images/group-class.png" alt="Group music class" id="img-group-class" loading="lazy" />
                <div className="track-img-label">
                  <h3>Structured Music Lessons</h3>
                
                </div>
              </div>
              <div className="track-body">
                <div className="track-badge">🎵 Full Instrument Access · 5 Instruments</div>
                <p>Full access to our complete instrument lineup, with individual and group learning pathways. Structured progression from beginner to advanced, with performance opportunities and praise-based coaching.</p>
                <div className="instruments-label">Instruments Available</div>
                <div className="instruments-list">
                  <span className="instrument-tag">🎹 Keyboard</span>
                  <span className="instrument-tag">🎸 Guitar</span>
                  <span className="instrument-tag">🥁 Bongo</span>
                  <span className="instrument-tag">🪘 Drums</span>
                  <span className="instrument-tag">🎤 Voice</span>
                </div>
                <Link href="/contact" className="btn-gold-outline">Enroll in Structured Music Lessons</Link>
              </div>
            </div>


            <div className="track-card" id="sect-neurodivergent">
              <div className="track-img">
                <img src="/images/nd-keyboard.png" alt="Neurodivergent student at keyboard" loading="lazy" onerror="" />
                <div className="track-img-label">
                  <h3>Adaptive Music Lessons</h3>
                
                </div>
              </div>
              <div className="track-body">
                <div className="track-badge">🧩 Adaptive & Sensory-Aware · 3 Instruments</div>
                <p>Adaptive teaching methods, calm sensory-aware environments, and a focused instrument set designed for learners of all ability. Multi-sensory support and patient, personalized instruction at every step.</p>
                <div className="instruments-label">Instruments Available</div>
                <div className="instruments-list">
                  <span className="instrument-tag">🎹 Keyboard</span>
                  <span className="instrument-tag">🥁 Bongo</span>
                  <span className="instrument-tag">🎤 Voice</span>
                </div>
                <div className="track-commitment">
                  <p>"Our sensory-friendly program uses adaptive teaching methods and calm environments so every student thrives and finds joy in music."</p>
                </div>
                <Link href="/neurodivergent-support" className="btn-gold-outline" style={{marginTop: '1rem'}}>Learn More About Support</Link>
              </div>
            </div>
          </div>


          <div className="shared-sessions" id="sect-shared">
            <div className="shared-sessions-header">
              <div className="eyebrow" style={{justifyContent: 'center'}}><span></span></div>
              <h2>Shared Group Sessions — <em>Where All Students Come Together</em></h2>
              <p>Both tracks attend shared sessions together. This is where neurotypical and neurodivergent students connect, create, and grow side by side.</p>
            </div>
            <div className="sessions-grid">
              <div className="session-card">
                <span className="session-icon">🥁</span>
                <h4>Rhythm & Play</h4>
                <p>Movement meets music. Beat-based interactive games and activities that build coordination and rhythmic awareness through creative expression.</p>
                <ul className="session-features">
                  <li>Beat-based interactive learning</li>
                  <li>Builds coordination & rhythmic awareness</li>
                  <li>Suitable for all ability levels</li>
                </ul>
              </div>
              <div className="session-card">
                <span className="session-icon">🎤</span>
                <h4>Vocal Circle</h4>
                <p>Every voice belongs here. Group singing in a safe, inclusive setting — exploring harmony, melody, and dynamics while building confidence and community.</p>
                <ul className="session-features">
                  <li>Group singing in safe environment</li>
                  <li>Builds confidence & community</li>
                  <li>No prior experience required</li>
                </ul>
              </div>
              <div className="session-card">
                <span className="session-icon">🪘</span>
                <h4>Bongo Circles</h4>
                <p>Feel the beat together. Ensemble percussion in a circle format — tactile, calming, and sensory-positive for all students, developing listening and group synchrony.</p>
                <ul className="session-features">
                  <li>Ensemble percussion in circle format</li>
                  <li>Calming & sensory-positive for all</li>
                  <li>Develops listening & group synchrony</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="daap-section" id="sect-daap">
            <div className="daap-inner">
              <div className="daap-proprietary">Proprietary Program — Exclusive to Mizmor Music</div>
              <h2 className="daap-headline display">Introducing the <em>DAAP Program</em></h2>
              <p className="daap-tagline">Our signature proprietary program — something no other music school offers. Come find out why families call it a turning point.</p>
              <div className="daap-grid">
                <div>
                  <p style={{fontSize: '.9rem', lineHeight: '1.95', color: 'var(--dim)', marginBottom: '2rem'}}>The DAAP Program exists because we believe that most music education starts in the wrong place. We built something different. Something that families call a turning point — not just for their child’s music, but for their child. We are not going to tell you exactly what it is. We are going to invite you to find out.</p>
                  <div className="daap-steps">
                    <div className="daap-step" style={{borderColor: 'rgba(201,168,76,0.25)'}}>
                      <div className="daap-step-num" style={{color: 'rgba(201,168,76,0.35)'}}>?</div>
                      <div>
                        <div className="daap-step-title">What happens in a DAAP session?</div>
                        <div className="daap-step-body">Parents who have attended say it was unlike any music experience they have ever seen for their child. We cannot fully explain it in words — it has to be experienced.</div>
                      </div>
                    </div>
                    <div className="daap-step" style={{borderColor: 'rgba(201,168,76,0.25)'}}>
                      <div className="daap-step-num" style={{color: 'rgba(201,168,76,0.35)'}}>?</div>
                      <div>
                        <div className="daap-step-title">Why don’t we show the full process here?</div>
                        <div className="daap-step-body">Because every child’s DAAP journey is different. What we do is proprietary, deeply personal, and only truly understood when you are in the room with us.</div>
                      </div>
                    </div>
                    <div className="daap-step" style={{borderColor: 'rgba(201,168,76,0.25)'}}>
                      <div className="daap-step-num" style={{color: 'rgba(201,168,76,0.35)'}}>?</div>
                      <div>
                        <div className="daap-step-title">Who is DAAP for?</div>
                        <div className="daap-step-body">Every child. Neurotypical. Neurodivergent. Whether your child has tried music before or never touched an instrument — DAAP finds the way in.</div>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '.82rem', color: 'rgba(244,239,230,.38)', fontStyle: 'italic', marginTop: '1.2rem', lineHeight: '1.7'}}>The most valuable things cannot be described — only experienced. The families who have been through DAAP don’t talk about what happened. They talk about who their child became.</p>
                </div>
                <div className="daap-cta-box">
                  <h3 className="display">Why DAAP <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Changes Everything</em></h3>
                  <p>Most music schools assign an instrument and begin lessons. We believe that's backwards. The DAAP Program ensures your child starts their musical journey on the right path — built around who they are.</p>
                  <ul className="daap-cta-highlights">
                    <li>Exclusive to Mizmor Music — found nowhere else</li>
                    <li>Works for neurotypical and neurodivergent children</li>
                    <li>First session completely free — no strings attached</li>
                    <li>What happens inside? Come and see for yourself.</li>
                    <li>Families who’ve been through DAAP keep coming back</li>
                  </ul>
                  <Link href="/contact" className="btn-gold" style={{width: '100%', justifyContent: 'center'}}>🌟 Start the DAAP Journey — Free</Link>
                  <p style={{fontSize: '.72rem', color: 'rgba(244,239,230,.35)', textAlign: 'center', marginTop: '.7rem'}}>First DAAP session is completely free for new families</p>
                </div>
              </div>
           </div>
          </div>


          <div className="daap-section" id="sect-shortcourses" style={{background: 'linear-gradient(135deg,#070d1a 0%,#0c1426 50%,#0a1220 100%)'}}>
            <div className="daap-inner">
              <div className="daap-proprietary">New • Short Term Courses</div>
              <h2 className="daap-headline display">Short Term <em>Courses</em></h2>
              <p className="daap-tagline">Focused, hands-on programs for teens and adults who want to create — fast.</p>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: '1.6rem', marginTop: '2.5rem'}}>


                <div style={{position: 'relative', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.3)', background: 'linear-gradient(155deg,rgba(201,168,76,0.08),rgba(22,32,56,0.6))', padding: '2rem 1.8rem', transition: 'var(--tr)'}}>
                  <div style={{position: 'absolute', top: '-30px', right: '-30px', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,168,76,0.18) 0%,transparent 70%)'}}></div>
                  <div style={{position: 'relative', display: 'flex', alignItems: 'center', gap: '.8rem', marginBottom: '1.2rem'}}>
                    <div style={{width: '54px', height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#c9a84c,#8b6f2a)', borderRadius: '14px', fontSize: '1.7rem', boxShadow: '0 6px 18px rgba(201,168,76,0.35)'}}>🤖</div>
                    <div style={{fontSize: '.65rem', letterSpacing: '.22em', color: 'var(--gold)', fontWeight: '700', textTransform: 'uppercase'}}>Course 01</div>
                  </div>
                  <h3 style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.5rem', color: '#fff', marginBottom: '.6rem', lineHeight: '1.2'}}>Music Production using <em style={{color: 'var(--gold)'}}>AI</em></h3>
                  <p style={{fontSize: '.86rem', lineHeight: '1.8', color: 'var(--dim)', marginBottom: '1.2rem'}}>Learn to compose, arrange, and produce full tracks using cutting-edge AI tools. From prompt-driven beat-making to vocal synthesis and intelligent mixing — discover how today's producers blend creativity with machine intelligence to release studio-quality music from a laptop.</p>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.2rem'}}>
                    <span style={{fontSize: '.7rem', padding: '.3rem .7rem', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)'}}>AI DAW Tools</span>
                    <span style={{fontSize: '.7rem', padding: '.3rem .7rem', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)'}}>Beat Generation</span>
                    <span style={{fontSize: '.7rem', padding: '.3rem .7rem', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)'}}>Mixing & Mastering</span>
                  </div>
                  <Link href="/contact" className="btn-gold" style={{width: '100%', justifyContent: 'center'}}>Enroll Now</Link>
                </div>


                <div style={{position: 'relative', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.3)', background: 'linear-gradient(155deg,rgba(201,168,76,0.08),rgba(22,32,56,0.6))', padding: '2rem 1.8rem', transition: 'var(--tr)'}}>
                  <div style={{position: 'absolute', top: '-30px', right: '-30px', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,168,76,0.18) 0%,transparent 70%)'}}></div>
                  <div style={{position: 'relative', display: 'flex', alignItems: 'center', gap: '.8rem', marginBottom: '1.2rem'}}>
                    <div style={{width: '54px', height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#c9a84c,#8b6f2a)', borderRadius: '14px', fontSize: '1.7rem', boxShadow: '0 6px 18px rgba(201,168,76,0.35)'}}>✍️</div>
                    <div style={{fontSize: '.65rem', letterSpacing: '.22em', color: 'var(--gold)', fontWeight: '700', textTransform: 'uppercase'}}>Course 02</div>
                  </div>
                  <h3 style={{fontFamily: '\'DM Serif Display\',serif', fontSize: '1.5rem', color: '#fff', marginBottom: '.6rem', lineHeight: '1.2'}}>Songwriting <em style={{color: 'var(--gold)'}}>& Composing</em></h3>
                  <p style={{fontSize: '.86rem', lineHeight: '1.8', color: 'var(--dim)', marginBottom: '1.2rem'}}>Turn ideas, emotions, and stories into songs. This course walks you through lyric writing, melody crafting, chord progressions, song structure, and arrangement — so you finish the program with original compositions you can perform, record, or release.</p>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.2rem'}}>
                    <span style={{fontSize: '.7rem', padding: '.3rem .7rem', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)'}}>Lyric Writing</span>
                    <span style={{fontSize: '.7rem', padding: '.3rem .7rem', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)'}}>Melody & Harmony</span>
                    <span style={{fontSize: '.7rem', padding: '.3rem .7rem', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)'}}>Song Structure</span>
                  </div>
                  <Link href="/contact" className="btn-gold" style={{width: '100%', justifyContent: 'center'}}>Enroll Now</Link>
                </div>

              </div>
              <p style={{fontSize: '.78rem', color: 'rgba(244,239,230,.45)', fontStyle: 'italic', marginTop: '1.8rem', textAlign: 'center'}}>Short, intensive formats • Small batches • Beginner to intermediate friendly</p>
            </div>
          </div>



          <div className="brand-stripes divider" aria-hidden="true"><span className="bs-navy"></span><span className="bs-gold"></span><span className="bs-red"></span><span className="bs-cream"></span><span className="bs-navy"></span><span className="bs-gold"></span><span className="bs-red"></span><span className="bs-cream"></span></div>
          <div className="cta-band">
            <div className="cta-band-inner">
              <div className="cta-badge">Every Child Belongs Here</div>
              <h2 className="display">Ready to Find Your Child's <em>Sound?</em></h2>
              <p>Book your free first session today. No pressure, no commitment — just music and understanding.</p>
              <div className="cta-band-btns">
                <Link href="/contact" className="btn-gold">Book Free Session</Link>
                <Link href="/about" className="btn-outline">Read Our Story</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
