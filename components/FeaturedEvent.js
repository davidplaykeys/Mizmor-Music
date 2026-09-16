'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { VISION_2020, isPast } from '@/lib/events';

export default function FeaturedEvent() {
  const [now, setNow] = useState(null);
  useEffect(() => { setNow(new Date()); }, []);

  const over = isPast(VISION_2020, now || new Date());
  if (over) return null;

  return (
    <div className="ev-hero">
      <div className="ev-hero-flagbar">⭐ Featured Event · Saturday, August 8</div>
      <div className="ev-hero-banner">
        <img
          src="/images/vision-2020-banner.webp"
          alt="Vision 2020: Back to School — presented by Mizmor Music at The MainPlace Christian Fellowship, in ministry partnership with Lestonnac Free Clinic"
          width="1600"
          height="800"
        />
      </div>
      <div className="ev-hero-body">
        <div>
          <p>
            Mizmor Music, in partnership with <strong style={{ color: 'var(--cream)' }}>Lestonnac Free Clinic</strong>,
            invites children and families to a <strong style={{ color: 'var(--gold)' }}>free community event</strong> designed
            to help children begin the new school year feeling prepared, encouraged and excited.
          </p>
          <p>
            Through our partnership with Lestonnac, children will have access to free eye examinations, with prescription
            glasses available for qualifying children on the spot. Clear vision can make an important difference in a
            child&rsquo;s classroom experience.
          </p>
          <p>
            The day is about more than getting ready for school. Children will also experience Mizmor Music through
            hands-on activities where they can explore instruments, rhythm, sound and creativity in a welcoming environment.
          </p>
          <p className="ev-allages">
            <span>👨‍👩‍👧‍👦</span>
            <span><strong>Open to all ages — from 8 to 80+.</strong> Everyone in the family is welcome, from school children
            to grandparents.</span>
          </p>
          <ul className="ev-perks">
            <li><span>👓</span><span>Free eye examinations</span></li>
            <li><span>👓</span><span>Prescription glasses for qualifying children, on the spot</span></li>
            <li><span>🎵</span><span>Free Mizmor music experience</span></li>
            <li><span>☀️</span><span>Free sunglasses for Instagram followers</span></li>
            <li><span>🍿</span><span>Snacks &amp; refreshments</span></li>
            <li><span>💙</span><span>A fun, welcoming day for the whole family</span></li>
          </ul>
          <p className="ig-line">
            <a className="ig-badge" href="https://www.instagram.com/mizmormusicoc/" target="_blank" rel="noopener noreferrer" aria-label="Mizmor Music on Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5.5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
              </svg>
              <span>@mizmormusicoc</span>
            </a>
            <span>Follow us on Instagram and show our team at the event to claim a free pair of sunglasses, while supplies last.</span>
          </p>
        </div>
        <div className="ev-hero-side">
          <div className="reg-fact"><span>📅</span><span>Saturday, August 8, 2026</span></div>
          <div className="reg-fact"><span>⏰</span><span>10:00 am – 3:00 pm Pacific Time</span></div>
          <div className="reg-fact"><span>📍</span><span>Mizmor Music Center<br />Orange, California</span></div>
          <div className="reg-fact"><span>🎟️</span><span>Free to attend</span></div>
          <div className="reg-fact"><span>👨‍👩‍👧‍👦</span><span>All ages welcome — 8 to 80+</span></div>
          <div className="ev-full-notice">🎟️ Registration Full — all places taken</div>
          <span className="ev-limited">Already registered? Just bring your confirmation on the day.</span>
          <p className="ev-partner">Hosted by Mizmor Music in partnership with Lestonnac Free Clinic.</p>
        </div>
      </div>
    </div>
  );
}
