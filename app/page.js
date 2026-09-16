import Link from 'next/link';

export const metadata = {
  title: "Mizmor \u2014 Inclusive Music School for Kids | Orange County CA",
  description: "Mizmor is Orange County's inclusive music school for children \u2014 piano, guitar, drums, bongo and vocal lessons for neurotypical and neurodivergent kids. First session free.",
};

export default function Page() {
  return (
    <div className="page on home">
<div className="hero">
          <div className="hero-bg"></div>
          <div className="hero-notes">
            <i className="hero-note">♩</i><i className="hero-note">♪</i><i className="hero-note">♫</i><i className="hero-note">♬</i><i className="hero-note">𝄞</i>
          </div>
          <div className="hero-l">
            <img src="/images/logo-mizmor-music.png" className="hero-logo" alt="Mizmor Music" style={{width: '100px', height: '100px', borderRadius: '8px'}} />
            <div className="eyebrow">Inclusive Music Education</div>
            <h1 className="hero-h1">Welcome to the World of<br /><em>Inclusive Music Education</em></h1>
            <p className="seo-description" style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap'}}>Mizmor is an inclusive music school in Orange County California offering music lessons for kids — piano, guitar, drums, bongo and voice for neurotypical and neurodivergent children in Tustin CA. We specialize in adaptive music for autism, ADHD, and Down Syndrome.</p>
            <p className="hero-sub">Inclusive music lessons for kids in Orange County, CA — serving neurotypical &amp; neurodivergent learners in Tustin. Piano, guitar, drums, bongo &amp; vocal training. First session free.</p>
            <div className="hero-tags">
              <span className="hero-tag">🎹 Keyboard</span>
              <span className="hero-tag">🥁 Bongo</span>
              <span className="hero-tag">🎤 Vocal</span>
              <span className="hero-tag">🧩 Adaptive</span>
              <span className="hero-tag">★ DAAP</span>
            </div>
            <div className="hero-btns">
              <Link href="/contact" className="btn-gold">🎯 Book a Free Demo Session</Link>
              <Link href="/programs" className="btn-outline">🎵 Explore Programs</Link>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                <div className="trust-av"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&fit=crop&crop=face" alt="" loading="lazy" onerror="this.style.display='none'" /></div>
                <div className="trust-av"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop&crop=face" alt="" loading="lazy" onerror="this.style.display='none'" /></div>
                <div className="trust-av"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&fit=crop&crop=face" alt="" loading="lazy" onerror="this.style.display='none'" /></div>
              </div>
              <div className="trust-text"><strong>Trusted by 500+ Families</strong>and counting</div>
            </div>
          </div>
          <div className="hero-r">
            <div className="mosaic">
              <div className="m-main">
                <img src="/images/child-piano.png" alt="Child at piano" loading="eager" onerror="" />
              </div>
              <div className="m-tr">
                <img src="/images/drummer.png" alt="Drummer" loading="lazy" />
              </div>
              <div className="m-br">
                <img src="/images/girl-stage.png" alt="Girl performing on stage" id="img-stage" loading="lazy" />
              </div>
              <div className="m-accent"></div>
              <div className="m-bot">
                <div><img src="/images/girl-bongos.png" alt="Little girl at bongos" id="img-bongo-solo" loading="lazy" /></div>
                <div><img src="/images/kids-drum-room.png" alt="Kids drum room" loading="lazy" /></div>
                <div><img src="/images/group-session.png" alt="Group music session" id="img-group-session" loading="lazy" /></div>
              </div>

            </div>
          </div>
        </div>


        <div className="stats">
          <div className="stat-item"><div className="stat-num">800+</div><div className="stat-label">Children Served</div></div>
          <div className="stat-item"><div className="stat-num">200,000+</div><div className="stat-label">Lesson Hours Delivered</div></div>
          <div className="stat-item"><div className="stat-num">★</div><div className="stat-label">Signature Proprietary Programs</div></div>
          <div className="stat-item"><div className="stat-num">🌍</div><div className="stat-label">International Presence</div></div>
        </div>


        <div className="section" style={{background: 'var(--royal2)'}}>
          <div className="section-center">
            <div className="eyebrow">What Makes Us Inclusive</div>
            <h2 className="display" style={{fontSize: 'clamp(1.7rem,3vw,2.6rem)', color: '#fff', marginBottom: '.9rem'}}>One School. <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Two Paths.</em> One Community.</h2>
            <p style={{fontSize: '.9rem', color: 'var(--dim)', marginBottom: '2rem'}}>Mizmor Music welcomes every child — regardless of how they learn. We've designed dedicated tracks for both neurotypical and neurodivergent students, and both come together in shared music sessions.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '860px', margin: '0 auto'}}>
            <Link href="/programs#sect-neurotypical" className="hover-lift" style={{background: 'rgba(201,168,76,.05)', border: '1px solid var(--border)', padding: '2rem', cursor: 'pointer', transition: 'var(--tr)'}}>
              <div style={{fontSize: '2rem', marginBottom: '.8rem'}}>🎵</div>
              <h3 className="display" style={{fontSize: '1.3rem', color: '#fff', marginBottom: '.5rem'}}>Neurotypical Students</h3>
              <p style={{fontSize: '.83rem', color: 'var(--dim)', lineHeight: '1.82', marginBottom: '1rem'}}>Full access to 5 instruments — Keyboard, Guitar, Bongo, Drums, and Voice — with individual and group learning pathways.</p>
              <span style={{fontSize: '.65rem', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)'}}>Neurotypical Program →</span>
            </Link>
            <Link href="/neurodivergent-support" className="hover-lift" style={{background: 'rgba(201,168,76,.05)', border: '1px solid var(--border)', padding: '2rem', cursor: 'pointer', transition: 'var(--tr)'}}>
              <div style={{fontSize: '2rem', marginBottom: '.8rem'}}>🧩</div>
              <h3 className="display" style={{fontSize: '1.3rem', color: '#fff', marginBottom: '.5rem'}}>Neurodivergent Students</h3>
              <p style={{fontSize: '.83rem', color: 'var(--dim)', lineHeight: '1.82', marginBottom: '1rem'}}>Adaptive teaching, calm sensory-friendly environments, and a focused instrument set — Keyboard, Bongo, and Voice.</p>
              <span style={{fontSize: '.65rem', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)'}}>Neurodivergent Program →</span>
            </Link>
          </div>
          <div style={{textAlign: 'center', marginTop: '2.5rem'}}>
            <Link href="/programs#sect-daap" className="btn-gold">★ Explore the DAAP Program — Our Signature Pathway</Link>
          </div>
        </div>



          <div className="brand-stripes divider" aria-hidden="true"><span className="bs-navy"></span><span className="bs-gold"></span><span className="bs-red"></span><span className="bs-cream"></span><span className="bs-navy"></span><span className="bs-gold"></span><span className="bs-red"></span><span className="bs-cream"></span></div>
          <div className="cta-band">
          <div className="cta-band-inner">
            <div className="cta-badge">🎉 First-Time Families</div>
            <h2 className="display">Your First Session is <em>Free</em></h2>
            <p>Start your child's musical journey with zero pressure. No commitment — just music, understanding, and discovery.</p>
            <div className="cta-band-btns">
              <Link href="/contact" className="btn-gold">Book Free Session</Link>
              <Link href="/about" className="btn-outline">Our Story</Link>
            </div>
          </div>
        </div>
    </div>
  );
}
