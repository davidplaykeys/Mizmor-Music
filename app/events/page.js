import Link from 'next/link';
import FeaturedEvent from '@/components/FeaturedEvent';
import EventsList from '@/components/EventsList';

export const metadata = {
  title: "Events | Mizmor \u2014 Inclusive Music School | Orange County CA",
  description: "Camps, demos, workshops and community events at Mizmor Music, including Vision 2020: Back to School on August 8 \u2014 open to all ages, 8 to 80+.",
};

export default function Page() {
  return (
    <div className="page on">
      <div className="section" style={{ background: 'var(--royal2)' }}>
        <div className="section-center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>What&apos;s On</div>
          <h2 className="display" style={{ fontSize: 'clamp(1.7rem,3vw,2.6rem)', color: '#fff', marginBottom: '.9rem' }}>
            Events at <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Mizmor</em>
          </h2>
          <p style={{ fontSize: '.9rem', color: 'var(--dim)' }}>
            Camps, demos, workshops and community mornings — built so that neurotypical and neurodivergent children can
            take part side by side.
          </p>
        </div>

        <FeaturedEvent />
        <EventsList />
      </div>

      <div className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-badge">🎉 All Families Welcome</div>
          <h2 className="display">Come to <em>One Thing</em></h2>
          <p>
            You don&apos;t have to enroll to attend. Turn up to a camp, a demo or a bongo circle and see whether this
            feels right for your child.
          </p>
          <div className="cta-band-btns">
            <Link className="btn-gold" href="/contact">Get in Touch</Link>
            <Link className="btn-outline" href="/programs">See Our Programs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
