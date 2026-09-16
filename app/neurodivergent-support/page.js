import Link from 'next/link';

export const metadata = {
  title: "Neurodivergent Support | Mizmor \u2014 Adaptive Music Lessons | Orange County CA",
  description: "Adaptive, sensory-aware music lessons for neurodivergent children in Orange County, CA.",
};

export default function Page() {
  return (
    <div className="page on">

        <div className="section" style={{background: 'var(--royal1)'}}>


          <div className="neuro-hero">
            <div className="neuro-text">
              <div className="eyebrow">Neurodivergent Support</div>
              <h2>A Safe, <em>Dedicated Space</em> for Every Learner</h2>
              <p>We specialize in working with children who benefit from sensory-aware environments, adaptive teaching methods, and extra patience. Here, neurodivergent students are not accommodated — they are <strong style={{color: '#fff'}}>celebrated</strong>.</p>
              <p>Our Neurodivergent Program is purpose-built, not an afterthought. Every element — from room setup to teaching pace to instrument selection — has been thoughtfully designed to help neurodivergent children thrive. Whether your child has Autism Spectrum Disorder, ADHD, Down Syndrome, or any other developmental difference, they are welcome here.</p>
              <p>Music plays a powerful, evidence-based role in neurodivergent development. Research shows that music therapy and adaptive music education help improve motor skills, attention span, memory, emotional regulation, communication, and self-confidence — through the universal language of music.</p>
              <div style={{display: 'flex', gap: '.8rem', flexWrap: 'wrap', marginTop: '1.5rem'}}>
                <Link href="/contact" className="btn-gold">Book a Free Session</Link>
                <Link href="/programs#sect-daap" className="btn-outline">★ DAAP Program</Link>
              </div>
            </div>
            <div className="neuro-imgs-mosaic">
              <div className="ni-full" style={{height: '220px'}}>
                <img src="/images/teen-bongos.png" alt="Teen with Down syndrome joyfully playing bongos" loading="lazy" />
              </div>
              <div style={{height: '180px', overflow: 'hidden'}}>
                <img src="/images/teen-mic.png" alt="Teen girl with Down syndrome singing into microphone" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div style={{height: '180px', overflow: 'hidden'}}>
                <img src="/images/kids-backstage.png" alt="Kids with Down syndrome celebrating backstage" id="img-backstage" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
            </div>
          </div>


          <div style={{marginTop: '4rem', padding: '2.5rem', background: 'linear-gradient(135deg,rgba(201,168,76,.05),rgba(22,32,56,.5))', border: '1px solid var(--border)'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div className="eyebrow" style={{justifyContent: 'center'}}><span></span></div>
              <h2 className="display" style={{fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', color: '#fff', marginBottom: '.6rem'}}>Who We <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Work With</em></h2>
              <p style={{fontSize: '.88rem', color: 'var(--dim)', maxWidth: '540px', margin: '0 auto'}}>Our program welcomes children across a wide range of diagnoses and developmental differences. Every child deserves to experience the joy of music.</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '.8rem'}}>
              <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Autism Spectrum Disorder (ASD)</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>ADHD / Attention Differences</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Down Syndrome</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Cerebral Palsy</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Intellectual Disabilities (mild–profound)</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Fragile X Syndrome</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Fetal Alcohol Spectrum Disorders</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Global Developmental Delay</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Sensory Processing Differences</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Speech & Language Delays</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Social Interaction Challenges</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Rett Syndrome</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Williams Syndrome</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Angelman Syndrome</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Prader-Willi Syndrome</div> <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '.75rem 1rem', fontSize: '.75rem', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: '.5rem'}}><span style={{color: 'var(--gold)'}}>✦</span>Other Neurodevelopmental Conditions</div>
            </div>
            <p style={{fontSize: '.75rem', color: 'rgba(244,239,230,.3)', textAlign: 'center', marginTop: '1.2rem', fontStyle: 'italic'}}>Not sure if your child qualifies? <Link href="/contact" style={{background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', fontFamily: '\'Outfit\',sans-serif', fontSize: '.75rem', fontWeight: '600'}}>Contact us</Link> — we always start with a conversation.</p>
          </div>


          <div style={{marginTop: '4rem'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div className="eyebrow" style={{justifyContent: 'center'}}><span>Neurodivergent Support</span></div>
              <h2 className="display" style={{fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', color: '#fff', marginBottom: '.6rem'}}>How We Support <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Neurodivergent Learners</em></h2>
              <p style={{fontSize: '.87rem', color: 'var(--dim)', maxWidth: '560px', margin: '0 auto'}}>Every element of our program is designed with neurodivergent learners in mind — from environment to teaching approach to instrument selection.</p>
            </div>
            <div className="neuro-features">
              <div className="neuro-feat"><span className="neuro-feat-icon">👩‍🏫</span><h4>Trained &amp; Compassionate Educators</h4><p>Our teachers are not only musicians — they are trained to work with neurodivergent children, bringing patience, understanding, and intentional care into every session.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">🧩</span><h4>Individualized Learning Plans</h4><p>Every child begins with a personalized assessment. We design a clear, adaptable learning pathway based on their strengths, needs, and pace — ensuring meaningful and measurable progress.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">🗣️</span><h4>Speech &amp; Communication Support</h4><p>Through vocal training, rhythm-based activities, and guided expression, we help children strengthen speech, listening, and confident communication.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">🧠</span><h4>In-House Psychologist Assistance</h4><p>An on-staff psychologist supports our team and families — guiding strategy, observing progress, and ensuring every child receives thoughtful, informed care.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">🌱</span><h4>Life Skills Through Music</h4><p>Beyond music, we nurture independence, routine-building, focus, and social interaction — skills that positively impact everyday life.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">🤝</span><h4>Inclusive Community Experience</h4><p>Children learn alongside others in a space that celebrates differences — fostering empathy, social connection, and a sense of belonging.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">🛡️</span><h4>Safe &amp; Judgment-Free Space</h4><p>A calm, accepting environment where children are free to explore, express, and grow — without pressure or comparison.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">🎤</span><h4>Performance &amp; Confidence Building</h4><p>Opportunities to perform (when ready) help children build confidence, overcome fear, and experience the joy of being seen and celebrated.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">⏳</span><h4>Flexible Pacing</h4><p>No pressure. No rigid timelines. Your child learns at a pace that feels safe, comfortable, and sustainable.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">📈</span><h4>Progress Tracking &amp; Feedback</h4><p>Parents receive regular updates, insights, and simple strategies to continue progress at home — so growth doesn't stop when the session ends.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">🎶</span><h4>Multi-Sensory Music Engagement</h4><p>We combine sound, movement, visuals, and touch to create a fully immersive learning experience — helping children engage in ways that feel natural and enjoyable.</p></div>
              <div className="neuro-feat"><span className="neuro-feat-icon">⭐</span><h4>Strength-Based Approach</h4><p>We focus on what your child can do, not what they struggle with. Every session builds on their strengths, boosting confidence and self-worth.</p></div>
            </div>
          </div>


          <div style={{marginTop: '4rem'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div className="eyebrow" style={{justifyContent: 'center'}}><span></span></div>
              <h3 className="display" style={{fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: '#fff', marginBottom: '.6rem'}}>Programs for <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Neurodivergent Students</em></h3>
              <p style={{fontSize: '.87rem', color: 'var(--dim)', maxWidth: '520px', margin: '0 auto'}}>Each instrument and format was chosen for its sensory, developmental, and therapeutic benefits.</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '1.3rem', marginBottom: '2rem'}}>
              <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '1.7rem', position: 'relative', overflow: 'hidden'}}>
                <div style={{height: '160px', margin: '-1.7rem -1.7rem 1.2rem', overflow: 'hidden'}}>
                  <img src="/images/boy-yamaha.png" alt="Boy with Down syndrome at Yamaha keyboard" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div style={{fontSize: '2rem', marginBottom: '.7rem'}}>🎹</div>
                <h4 className="display" style={{fontSize: '1rem', color: '#fff', marginBottom: '.4rem'}}>Keyboard</h4>
                <p style={{fontSize: '.82rem', lineHeight: '1.82', color: 'var(--dim)'}}>A gentle, structured introduction to melody and music theory. Multi-sensory support and adaptive techniques build fine motor skills, focus, and a deep sense of accomplishment with every new note learned.</p>
              </div>
              <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '1.7rem', position: 'relative', overflow: 'hidden'}}>
                <div style={{height: '160px', margin: '-1.7rem -1.7rem 1.2rem', overflow: 'hidden'}}>
                  <img src="/images/teen-girl-bongos.png" alt="Teen girl with Down syndrome joyfully playing bongos" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top'}} />
                </div>
                <div style={{fontSize: '2rem', marginBottom: '.7rem'}}>🥁</div>
                <h4 className="display" style={{fontSize: '1rem', color: '#fff', marginBottom: '.4rem'}}>Bongo &amp; Percussion</h4>
                <p style={{fontSize: '.82rem', lineHeight: '1.82', color: 'var(--dim)'}}>Tactile, hands-on percussion is one of the most effective tools for sensory integration and rhythm awareness. The physical engagement is deeply calming and inherently rewarding for neurodivergent learners.</p>
              </div>
              <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '1.7rem', position: 'relative', overflow: 'hidden'}}>
                <div style={{height: '160px', margin: '-1.7rem -1.7rem 1.2rem', overflow: 'hidden'}}>
                  <img src="/images/teen-girl-mic.png" alt="Teen girl with Down syndrome singing with microphone" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top'}} />
                </div>
                <div style={{fontSize: '2rem', marginBottom: '.7rem'}}>🎤</div>
                <h4 className="display" style={{fontSize: '1rem', color: '#fff', marginBottom: '.4rem'}}>Vocal Training</h4>
                <p style={{fontSize: '.82rem', lineHeight: '1.82', color: 'var(--dim)'}}>Vocal expression in a nurturing, low-pressure atmosphere. Supports speech and language development, emotional communication, and builds the kind of confidence that extends far beyond music class.</p>
              </div>
            </div>

          </div>


          <div style={{marginTop: '4rem', background: 'linear-gradient(135deg,var(--navy2),var(--navy3))', border: '1px solid var(--border)', padding: '2.5rem'}}>
            <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
              <div className="eyebrow" style={{justifyContent: 'center'}}><span></span></div>
              <h2 className="display" style={{fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', color: '#fff', marginBottom: '.6rem'}}>Shared Group Sessions — <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Where All Students Come Together</em></h2>
              <p style={{fontSize: '.88rem', color: 'var(--dim)', maxWidth: '560px', margin: '0 auto'}}>One of the most powerful parts of Mizmor Music is that neurodivergent and neurotypical students learn together. Shared sessions are designed to be inclusive, accessible, and joyful for every ability level.</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', marginBottom: '2.5rem'}}>
              <div>
                <img src="/images/kids-park-bongos.png" alt="Diverse group of kids including child with Down syndrome playing bongos together in a park" id="img-bongo-group" style={{width: '100%', height: '240px', objectFit: 'cover', border: '1px solid var(--border)'}} />
              </div>
              <div>
                <img src="/images/kids-roland.png" alt="Group of children including kids with Down syndrome singing and playing at Roland keyboard" style={{width: '100%', height: '240px', objectFit: 'cover', border: '1px solid var(--border)'}} />
              </div>
            </div>
            <div className="sessions-grid">
              <div className="session-card">
                <span className="session-icon">🥁</span>
                <h4>Rhythm &amp; Play</h4>
                <p>Movement meets music. Beat-based interactive games and activities that build coordination and rhythmic awareness through creative expression. Every ability level participates fully.</p>
                <ul className="session-features">
                  <li>Beat-based interactive learning</li>
                  <li>Builds coordination &amp; rhythmic awareness</li>
                  <li>Accessible for all ability levels</li>
                </ul>
              </div>
              <div className="session-card">
                <span className="session-icon">🎤</span>
                <h4>Vocal Circle</h4>
                <p>Every voice belongs here. Group singing in a safe, inclusive setting — exploring harmony, melody, and dynamics while building confidence and community. No prior experience required.</p>
                <ul className="session-features">
                  <li>Group singing in safe environment</li>
                  <li>Builds confidence &amp; community bonds</li>
                  <li>Supports language &amp; communication</li>
                </ul>
              </div>
              <div className="session-card">
                <span className="session-icon">🪘</span>
                <h4>Bongo Circles</h4>
                <p>Feel the beat together. Ensemble percussion in a circle format — tactile, calming, and sensory-positive for all students. Develops listening, turn-taking, and group synchrony.</p>
                <ul className="session-features">
                  <li>Ensemble percussion circle format</li>
                  <li>Calming &amp; sensory-positive for all</li>
                  <li>Builds listening &amp; social connection</li>
                </ul>
              </div>
            </div>
            <div style={{background: 'rgba(201,168,76,.06)', border: '1px solid var(--bordersoft)', padding: '1.2rem 1.5rem', marginTop: '2rem', textAlign: 'center'}}>
              <p style={{fontSize: '.85rem', color: 'var(--cream)', fontStyle: 'italic'}}>"Shared sessions are where the real magic happens — when a child with Down syndrome and a neurotypical child discover they're making music together and it sounds beautiful."</p>
              <p style={{fontSize: '.72rem', color: 'var(--gold)', marginTop: '.4rem', fontWeight: '600'}}>— Mizmor Music Teaching Team</p>
            </div>
          </div>


          <div style={{marginTop: '4rem'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div className="eyebrow" style={{justifyContent: 'center'}}><span></span></div>
              <h2 className="display" style={{fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: '#fff', marginBottom: '.4rem'}}>Frequently Asked <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Questions</em></h2>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', maxWidth: '900px', margin: '0 auto'}}>
              <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '1.5rem'}}>
                <h4 style={{fontSize: '.88rem', color: '#fff', marginBottom: '.5rem'}}>Do I need a referral to start?</h4>
                <p style={{fontSize: '.82rem', color: 'var(--dim)', lineHeight: '1.78'}}>No referral is needed. Parents can contact us directly. We also collaborate with pediatricians, speech therapists, and other providers when helpful.</p>
              </div>
              <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '1.5rem'}}>
                <h4 style={{fontSize: '.88rem', color: '#fff', marginBottom: '.5rem'}}>How is this different from a regular music class?</h4>
                <p style={{fontSize: '.82rem', color: 'var(--dim)', lineHeight: '1.78'}}>Unlike a traditional music class, our neurodivergent program is built around developmental goals — communication, behavior, attention, and emotional regulation — not just musical skill.</p>
              </div>
              <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '1.5rem'}}>
                <h4 style={{fontSize: '.88rem', color: '#fff', marginBottom: '.5rem'}}>What if my child has never had music lessons?</h4>
                <p style={{fontSize: '.82rem', color: 'var(--dim)', lineHeight: '1.78'}}>Perfect — you're in exactly the right place. We start from zero, building foundational skills at your child's own pace in a completely pressure-free environment.</p>
              </div>
              <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '1.5rem'}}>
                <h4 style={{fontSize: '.88rem', color: '#fff', marginBottom: '.5rem'}}>Can neurodivergent students join regular group sessions?</h4>
                <p style={{fontSize: '.82rem', color: 'var(--dim)', lineHeight: '1.78'}}>Yes! Shared sessions — Rhythm &amp; Play, Vocal Circle, and Bongo Circles — are specifically designed to include both neurodivergent and neurotypical students together.</p>
              </div>
              <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '1.5rem'}}>
                <h4 style={{fontSize: '.88rem', color: '#fff', marginBottom: '.5rem'}}>What is the first step?</h4>
                <p style={{fontSize: '.82rem', color: 'var(--dim)', lineHeight: '1.78'}}>Reach out via our contact page or call us. We'll schedule a free first session — no commitment, no pressure — so your child can experience music with us before deciding anything.</p>
              </div>
              <div style={{background: 'rgba(201,168,76,.04)', border: '1px solid var(--bordersoft)', padding: '1.5rem'}}>
                <h4 style={{fontSize: '.88rem', color: '#fff', marginBottom: '.5rem'}}>Is the DAAP Program related to this?</h4>
                <p style={{fontSize: '.82rem', color: 'var(--dim)', lineHeight: '1.78'}}>Yes! DAAP is Mizmor's signature proprietary pathway specifically designed for neurodivergent learners — providing the most structured and personalized support we offer.</p>
              </div>
            </div>
          </div>



          <div className="brand-stripes divider" aria-hidden="true"><span className="bs-navy"></span><span className="bs-gold"></span><span className="bs-red"></span><span className="bs-cream"></span><span className="bs-navy"></span><span className="bs-gold"></span><span className="bs-red"></span><span className="bs-cream"></span></div>
          <div className="cta-band" style={{marginTop: '3rem'}}>
            <div className="cta-band-inner">
              <div className="cta-badge">Every Child Belongs Here</div>
              <h2 className="display">Ready for the <em>First Step?</em></h2>
              <p>Our first session is always free. Let us show you what music can do for your child. You don't have to figure this out alone — we walk this journey with you.</p>
              <div className="cta-band-btns">
                <Link href="/contact" className="btn-gold">Book Free Session</Link>
                <Link href="/programs#sect-daap" className="btn-outline">Explore the DAAP Program</Link>
              </div>
            </div>
          </div>

        </div>
    </div>
  );
}
