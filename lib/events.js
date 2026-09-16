// ─────────────────────────────────────────────────────────────
// Single source of truth for every event on the site.
//
// The site runs on US Pacific time. Events are written as plain Pacific
// wall-clock times ('2026-08-08 15:00') and `pacific()` resolves the correct
// UTC instant, picking PDT or PST automatically — so a winter event does not
// need a different offset written by hand.
//
// Because the result is an absolute instant, every visitor sees the same
// open/closed state no matter where they are. Someone in Bengaluru at 1am on
// August 9 still sees Vision 2020 as open, because it is 12:30pm on August 8
// in California and the event is under way.
//
// Status is computed in the browser (see components/EventsList.js), so the
// page is correct every day without needing a rebuild.
// ─────────────────────────────────────────────────────────────

export const SITE_TZ = 'America/Los_Angeles';

/**
 * Turn a Pacific wall-clock time into an absolute Date.
 * @param {string} local e.g. '2026-08-08 15:00'
 */
export function pacific(local) {
  const [datePart, timePart = '00:00'] = local.trim().split(/[ T]/);
  const [y, m, d] = datePart.split('-').map(Number);
  const [hh, mm] = timePart.split(':').map(Number);

  // Start from the naive UTC reading, then measure how far Pacific is from
  // UTC at that moment and correct. Two passes settle the DST boundary.
  let ts = Date.UTC(y, m - 1, d, hh, mm);
  for (let i = 0; i < 2; i++) {
    const offset = pacificOffsetMs(new Date(ts));
    ts = Date.UTC(y, m - 1, d, hh, mm) + offset;
  }
  return new Date(ts);
}

/** How far behind UTC Pacific time is, in ms, at a given instant. */
function pacificOffsetMs(at) {
  const asPacific = new Date(at.toLocaleString('en-US', { timeZone: SITE_TZ }));
  const asUtc = new Date(at.toLocaleString('en-US', { timeZone: 'UTC' }));
  return asUtc.getTime() - asPacific.getTime();
}

export const EVENTS = [
  {
    id: 'mental-performance-camp',
    title: 'Mental Performance Camp — Music &amp; Wellness',
    start: pacific('2026-07-31 17:30'),
    end: pacific('2026-07-31 18:30'),
    when: 'Thursday, July 31, 2026 · 5:30 – 6:30 pm PT',
    location: '505 E Central Ave, Santa Ana, CA 92707',
    description:
      'Examine the profound influence of music on an individual&rsquo;s overall well-being, culminating in a captivating bongo and vocal experience.',
    tags: [{ label: 'Camp' }],
    cta: { kind: 'external', href: 'https://lightningyouthacademy.org/mentalperformancecamp', label: 'Know More ↗' },
    art: 'wave',
  },
  {
    id: 'presentation-demo',
    title: 'Mizmor Presentation &amp; Demo',
    start: pacific('2026-08-01 10:30'),
    end: pacific('2026-08-01 11:00'),
    when: 'Saturday, August 1, 2026 · 10:30 – 11:00 am PT',
    location: '505 E Central Ave, Santa Ana, CA 92707',
    description:
      'Presenting the Mizmor music programme to parents and children of varied age groups.',
    tags: [{ label: 'Presentation' }],
    cta: { kind: 'external', href: 'https://lightningyouthacademy.org/conference', label: 'Know More ↗' },
    art: 'screen',
  },
  {
    id: 'running-camp',
    title: 'Lightning High Altitude Running Camp',
    start: pacific('2026-08-06 10:00'),
    end: pacific('2026-08-06 15:00'),
    when: 'Thursday, August 6, 2026 · 10:00 – 11:00 am &amp; 2:00 – 3:00 pm PT',
    location: '42727 State Hwy 38, Angelus Oaks, CA 92305',
    description:
      'A music workshop tailored for children and their parents, focusing on promoting wellness and self-esteem through musical engagement.',
    tags: [{ label: 'Workshop' }],
    cta: { kind: 'external', href: 'https://lightningyouthacademy.org/runningcamp', label: 'Know More ↗' },
    art: 'mountains',
  },
  {
    id: 'vision-2020',
    title: 'Vision 2020: Back to School',
    start: pacific('2026-08-08 10:00'),
    end: pacific('2026-08-08 15:00'),
    when: 'Saturday, August 8, 2026 · 10:00 am – 3:00 pm PT',
    location: 'Mizmor Music Center, Orange, California',
    description:
      'Free eye examinations with Lestonnac Free Clinic, prescription glasses for qualifying children, a hands-on Mizmor music experience, free sunglasses for Instagram followers, and refreshments. Open to all ages, from 8 to 80+. Advance registration is required for eye examinations.',
    tags: [{ label: 'Featured' }, { label: 'Free', kind: 'free' }, { label: 'All Ages' }],
    cta: { kind: 'full', href: '/events/vision-2020-registration', label: 'Registration Full' },
    art: 'banner',
    featured: true,
    // Manual override: capacity reached. Set back to false to reopen
    // registration before the event's own end time.
    registrationFull: true,
  },
  {
    id: 'bongo-circle',
    title: 'Bongo Circle',
    start: pacific('2026-08-15 10:00'),
    end: pacific('2026-08-15 10:45'),
    when: 'Saturday, August 15, 2026 · 10:00 – 10:45 am PT',
    location: '1310 E Lincoln Ave, Orange, CA 92865',
    description:
      'A fun, interactive music experience where children and families connect through rhythm. Participants explore beats, patterns and musical games while playing together in a supportive group &mdash; encouraging coordination, listening, focus, self-expression and social connection. No musical experience needed; just come, play, connect and enjoy the rhythm together.',
    tags: [{ label: 'Community' }],
    cta: { kind: 'internal', href: '/contact', label: 'Ask About This Event' },
    art: 'bongo',
  },
];

/** An event is finished only once its end time has passed. */
export function isPast(event, now = new Date()) {
  return event.end.getTime() < now.getTime();
}

/** Upcoming soonest-first; past most-recent-first. */
export function splitEvents(now = new Date()) {
  const upcoming = [];
  const past = [];
  for (const e of EVENTS) (isPast(e, now) ? past : upcoming).push(e);
  upcoming.sort((a, b) => a.start - b.start);
  past.sort((a, b) => b.start - a.start);
  return { upcoming, past };
}

export const VISION_2020 = EVENTS.find((e) => e.id === 'vision-2020');

/** Closed either because seats are gone, or because the event has finished. */
export function registrationClosed(event, now = new Date()) {
  return Boolean(event.registrationFull) || isPast(event, now);
}

export function monthLabel(date) {
  return date.toLocaleDateString('en-US', { month: 'short', timeZone: SITE_TZ }).toUpperCase();
}

export function dayLabel(date) {
  return date.toLocaleDateString('en-US', { day: '2-digit', timeZone: SITE_TZ });
}

/** Current date/time in Pacific, for anything that must not use local time. */
export function nowPacific() {
  return new Date();
}

/** The year in California — so the footer does not tick over early abroad. */
export function pacificYear(now = new Date()) {
  return Number(now.toLocaleDateString('en-US', { year: 'numeric', timeZone: SITE_TZ }));
}
