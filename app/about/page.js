import Link from 'next/link';

export const metadata = {
  title: "About Mizmor | Inclusive Music School | Orange County CA",
  description: "Our story, vision and mission \u2014 an inclusive music school for every child in Orange County, California.",
};

export default function Page() {
  return (
    <div className="page on">

        <div className="section" style={{background: 'var(--royal2)'}}>
          <div className="about-grid">
            <div className="about-img">
              <img src="/images/boy-guitar.png" alt="Boy learning guitar" loading="lazy" />
            </div>
            <div className="about-text">
              <div className="eyebrow">About Us</div>
              <h2><em>Inclusive Music Lessons</em> in Orange County, CA</h2>
              <p>Mizmor Music is a Ministry Incorporated Initiative. We believe music is more than just learning — it is a powerful tool for connection, joy, comfort, and transformation.</p>
              <p>Our vision is to create a space where every child and individual, regardless of age or ability, can experience music in a way that feels natural and meaningful. We are committed to providing a safe and welcoming environment where individuals can explore, express, and grow.</p>
              <p>Through group sessions, one-on-one learning, and interactive experiences, our approach is centered on each individual's pace and unique way of engaging with music. We go beyond teaching music — growth becomes a natural outcome of engaging with it.</p>
              <p>Music plays a vital role in shaping the brain and supporting growth. As individuals engage in music, they begin to build confidence, improve focus, develop coordination, and express themselves more freely — skills that naturally carry into everyday life.</p>
              <div className="about-values">
                <span className="about-val">Connection</span>
                <span className="about-val">Joy</span>
                <span className="about-val">Transformation</span>
                <span className="about-val">Inclusivity</span>
                <span className="about-val">Growth</span>
              </div>
            </div>
          </div>


          <div id="sect-vm">
            <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
              <div className="eyebrow" style={{justifyContent: 'center'}}><span></span></div>
              <h2 className="display" style={{fontSize: 'clamp(1.7rem,3vw,2.6rem)', color: '#fff'}}>Our Vision <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>&</em> Mission</h2>
            </div>
            <div className="vm-grid">
              <div className="vm-card">
                <div className="vm-card-label">Vision</div>
                <h3>Why We Exist</h3>
                <p>Mizmor Music was built on a simple belief: music belongs to every child. By bringing children with and without learning differences together under one roof, we're creating something rare — a school that families trust, children love, and the world needs more of.</p>
              </div>
              <div className="vm-card">
                <div className="vm-card-label">Mission</div>
                <h3>What We Do</h3>
                <p>Our mission is to serve and minister through music — impacting lives, building connection, and bringing hope and encouragement. At Mizmor Music, we are dedicated to creating meaningful experiences where learning is joyful, growth is intentional, and every individual is empowered to thrive.</p>
              </div>
            </div>
          </div>



          <div className="mi-section" style={{margin: '0 -5%', padding: '3.5rem 5%'}}>
            <div className="mi-grid">
              <div className="mi-text">
                <div className="eyebrow">Our Parent Organization</div>
                <h2>Rooted in <em>Ministry Incorporated</em></h2>
                <p>Mizmor Music is an initiative of <strong style={{color: 'var(--cream)'}}>Ministry Incorporated</strong>, established in the heart of Orange County — a dynamic faith-centered organization devoted to cultivating growth, purpose, and transformation within the community. Through initiatives spanning food outreach, career development, counseling, and holistic community programs and much more, it exists to serve with intention and lasting impact.</p>
                <p>This foundation is what elevates Mizmor Music beyond a traditional music school. We embody the same mission — meeting individuals where they are, inspiring meaningful transformation through music, and fostering a community where every child and every family is seen, valued, and empowered to belong.</p>
                <a href="https://ministryincorporated.com/" target="_blank" rel="noopener" className="mi-link">Visit ministryincorporated.com ↗</a>
              </div>
              <div className="mi-details">
                <div className="mi-detail-card">
                  <div className="mi-detail-icon">📍</div>
                  <div>
                    <div className="mi-detail-label">Mizmor Music</div>
                    <div className="mi-detail-val">1310 E Lincoln Ave<br />Orange, CA 92865</div>
                  </div>
                </div>
                <div className="mi-detail-card">
                  <div className="mi-detail-icon">📞</div>
                  <div>
                    <div className="mi-detail-label">Contact</div>
                    <div className="mi-detail-val"><a href="tel:6578445748">657.844.5748</a></div>
                  </div>
                </div>
                <div className="mi-detail-card">
                  <div className="mi-detail-icon">✉️</div>
                  <div>
                    <div className="mi-detail-label">Email</div>
                    <div className="mi-detail-val"><a href="mailto:support@mizmormusic.com">support@mizmormusic.com</a></div>
                  </div>
                </div>
                <div className="mi-detail-card">
                  <div className="mi-detail-icon">🌐</div>
                  <div>
                    <div className="mi-detail-label">Ministry Incorporated</div>
                    <div className="mi-detail-val"><a href="https://ministryincorporated.com/" target="_blank" rel="noopener">ministryincorporated.com</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          <div style={{textAlign: 'center'}}>
            <Link href="/contact" className="btn-gold" style={{marginRight: '.8rem'}}>Book a Free Session</Link>
            <Link href="/programs" className="btn-outline">Explore Programs</Link>
          </div>
        </div>
    </div>
  );
}
