'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { EVENTS, splitEvents, monthLabel, dayLabel } from '@/lib/events';
import EventArt from './EventArt';

function EventCard({ event, past }) {
  const { cta } = event;

  const button = past ? (
    <span className="btn-closed" aria-disabled="true">Event Ended</span>
  ) : cta.kind === 'full' ? (
    <span className="btn-closed" aria-disabled="true">Registration Full</span>
  ) : cta.kind === 'external' ? (
    <a className="btn-outline btn-link" href={cta.href} target="_blank" rel="noopener noreferrer">
      {cta.label}
    </a>
  ) : (
    <Link className={event.featured ? 'btn-gold' : 'btn-outline btn-link'} href={cta.href}>
      {cta.label}
    </Link>
  );

  return (
    <article className={'ev-card' + (past ? ' ev-card-past' : '')}>
      <div className="ev-thumb">
        <EventArt kind={event.art} />
        <div className="ev-datechip">
          <span className="ev-mon">{monthLabel(event.start)}</span>
          <span className="ev-day">{dayLabel(event.start)}</span>
        </div>
        {past && <span className="ev-closed-flag">Closed</span>}
      </div>
      <div className="ev-body">
        {past ? (
          <span className="ev-tag ev-tag-closed">Event Ended</span>
        ) : (
          event.tags.map((t) => (
            <span key={t.label} className={'ev-tag' + (t.kind === 'free' ? ' ev-tag-free' : '')}>
              {t.label}
            </span>
          ))
        )}
        <h3 className="ev-title" dangerouslySetInnerHTML={{ __html: event.title }} />
        <p className="ev-meta" dangerouslySetInnerHTML={{ __html: '🕒 ' + event.when }} />
        <p className="ev-loc">📍 {event.location}</p>
        <p className="ev-desc" dangerouslySetInnerHTML={{ __html: event.description }} />
      </div>
      <div className="ev-cta">{button}</div>
    </article>
  );
}

export default function EventsList() {
  // Rendered on the server with the build-time date, then corrected in the
  // browser on mount so the list is right every day without a rebuild.
  const [now, setNow] = useState(null);
  useEffect(() => { setNow(new Date()); }, []);

  const { upcoming, past } = splitEvents(now || new Date());

  return (
    <>
      <div className="section-center" style={{ marginBottom: '1.8rem' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Calendar</div>
        <h3 className="display" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: '#fff' }}>
          Upcoming <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Events</em>
        </h3>
      </div>

      {upcoming.length > 0 ? (
        <div className="ev-list">
          {upcoming.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      ) : (
        <div className="ev-empty">
          <p>No events are scheduled just now — new dates are added regularly.</p>
          <Link className="btn-gold" href="/contact">Ask What&rsquo;s Coming Up</Link>
        </div>
      )}

      {past.length > 0 && (
        <>
          <div className="section-center" style={{ margin: '4rem auto 1.6rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Looking Back</div>
            <h3 className="display" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: '#fff' }}>
              Past <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Events</em>
            </h3>
          </div>
          <div className="ev-list ev-list-past">
            {past.map((e) => <EventCard key={e.id} event={e} past />)}
          </div>
        </>
      )}
    </>
  );
}
