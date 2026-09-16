'use client';
import Link from 'next/link';
import Image from 'next/image';
import { pacificYear } from '@/lib/events';

export default function Footer() {
  return (
    <footer>
      <div>
        <Link className="footer-brand-logo" href="/">
          <Image src="/images/logo-mizmor.png" alt="Mizmor" width={36} height={36} />
          <span>MIZMOR MUSIC</span>
        </Link>
        <p className="footer-tagline">Music. Life. Miracles.</p>
        <p className="footer-desc">
          A <strong style={{ color: 'rgba(244,239,230,.45)' }}>Ministry Incorporated</strong> Initiative.
          Empowering children through music, faith, and community across Orange County, CA.
        </p>
        <div className="footer-socials">
          <a className="footer-soc" href="https://www.facebook.com/profile.php?id=61570804989572" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="footer-soc" href="https://www.instagram.com/mizmormusicoc/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="footer-soc" href="#" aria-label="YouTube (coming soon)" title="Coming soon">YouTube</a>
        </div>
      </div>

      <div>
        <p className="footer-col-head">Quick Links</p>
        <ul className="footer-links">
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/programs#sect-daap">★ DAAP Program</Link></li>
          <li><Link href="/neurodivergent-support">Neurodivergent Support</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/partner">Partner / Invest / Volunteer</Link></li>
          <li><Link href="/contact">📩 Book Free Session</Link></li>
        </ul>
      </div>

      <div>
        <p className="footer-col-head">Contact</p>
        <ul className="footer-links">
          <li><Link href="/contact">support@mizmormusic.com</Link></li>
          <li><Link href="/contact">Orange County, CA</Link></li>
          <li><Link href="/parent-stories">Parent Stories</Link></li>
        </ul>
        <br />
        <p className="footer-col-head">Ministry</p>
        <ul className="footer-links">
          <li><span>Ministry Incorporated</span></li>
          <li><span>Music. Life. Miracles.</span></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <span>© {pacificYear()} Mizmor Music — Ministry Incorporated. All rights reserved.</span>
        <span style={{ color: 'var(--gold)' }}>♪</span>
        <span>Inclusive Music Education for Every Child</span>
      </div>
    </footer>
  );
}
