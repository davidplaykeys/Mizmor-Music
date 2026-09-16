'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const DROPDOWNS = {
  about: [
    ['/about', 'About Us'],
    ['/about#sect-vm', 'Vision & Mission'],
    ['/parent-stories', 'Parent Stories'],
  ],
  prog: [
    ['/programs', 'All Programs'],
    ['/programs#sect-structured', 'Structured Music Lessons'],
    ['/programs#sect-adaptive', 'Adaptive Music Lessons'],
    ['/programs#sect-shared', 'Shared Sessions'],
    ['/programs#sect-daap', 'DAAP Program ★'],
    ['/programs#sect-shortcourses', 'Short Term Courses'],
  ],
  partner: [
    ['/partner', 'Partner With Us'],
    ['/partner#sect-investors', 'Investors'],
    ['/partner#sect-volunteers', 'Volunteers'],
    ['/partner#sect-faith', 'Faith & Values'],
  ],
};

export default function Nav() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // On the events pages the page's own "Register" call to action is the one
  // that matters, so the booking CTA is hidden to avoid competing buttons.
  const onEventsPage = pathname.startsWith('/events');

  useEffect(() => { setMobile(false); setOpen(null); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = (e) => { if (!e.target.closest('.nav-item')) setOpen(null); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  const dd = (key, label) => (
    <li className={'nav-item' + (open === key ? ' open' : '')}>
      <button
        className="nav-btn"
        aria-expanded={open === key}
        onClick={(e) => { e.stopPropagation(); setOpen(open === key ? null : key); }}
      >
        {label} <span className="nav-arrow">▾</span>
      </button>
      <div className="nav-dd">
        {DROPDOWNS[key].map(([href, text]) => (
          <Link key={href} className="nav-dd-btn" href={href}>{text}</Link>
        ))}
      </div>
    </li>
  );

  return (
    <>
      <nav id="main-nav" style={{ borderBottomColor: scrolled ? 'rgba(201,168,76,0.22)' : 'rgba(201,168,76,0.08)' }}>
        <Link className="nav-logo" href="/">
          <Image src="/images/logo-mizmor.png" alt="Mizmor" width={40} height={40} />
          <div className="nav-logo-name">
            <span className="nav-logo-name-main">Mizmor</span>
            <span className="nav-logo-name-sub">An Inclusive Music School</span>
          </div>
        </Link>

        <ul className="nav-ul">
          {dd('about', 'About')}
          {dd('prog', 'Programs')}
          <li className="nav-item">
            <Link className="nav-btn" href="/neurodivergent-support">Neurodivergent Support</Link>
          </li>
          {dd('partner', 'Partner')}
          <li className="nav-item">
            <Link className="nav-btn" href="/events">Events</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-btn" href="/contact">Contact</Link>
          </li>
        </ul>

        {!onEventsPage && (
          <Link className="nav-cta" href="/contact">Book Free Session</Link>
        )}

        <button className="ham" id="ham-btn" aria-label="Menu" aria-expanded={mobile} onClick={() => setMobile(!mobile)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={'nav-mobile' + (mobile ? ' open' : '')} id="mobile-nav">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/neurodivergent-support">Neurodivergent Support</Link>
        <Link href="/partner">Partner / Invest</Link>
        <Link href="/events">🎵 Events</Link>
        <Link href="/contact">📩 Contact Us</Link>
        {!onEventsPage && <Link href="/contact">📩 Book Free Session</Link>}
      </div>
    </>
  );
}
