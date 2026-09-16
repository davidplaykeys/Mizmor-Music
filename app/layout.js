import './globals.css';
import BrandStripes from '@/components/BrandStripes';
import MinistryBanner from '@/components/MinistryBanner';
import MusicNotes from '@/components/MusicNotes';
import Nav from '@/components/Nav';
import Ticker from '@/components/Ticker';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://mizmormusic.com'),
  title: {
    default: 'Mizmor \u2014 Inclusive Music School for Kids | Orange County CA',
    template: '%s',
  },
  description:
    "Mizmor is Orange County's inclusive music school for children \u2014 offering piano, guitar, drums, bongo and vocal lessons for neurotypical and neurodivergent kids in Tustin, CA. Book a free session today.",
  keywords: ["music lessons Orange County", "music school Tustin CA", "neurodivergent music program Tustin", "adaptive music lessons kids", "piano lessons for kids near me", "music therapy autism Orange County", "inclusive music school", "DAAP music program", "music lessons for kids with ADHD", "music lessons Down Syndrome Orange County"],
  authors: [{ name: 'Mizmor Music' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mizmor \u2014 Inclusive Music School for Kids | Orange County CA',
    description:
      'Inclusive music lessons for neurotypical and neurodivergent children in Orange County, CA. Piano, guitar, drums, bongo and vocals. First session free.',
    type: 'website',
    url: 'https://mizmormusic.com/',
    siteName: 'Mizmor Music',
    locale: 'en_US',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Mizmor — An Inclusive Music School, Orange County CA. Music. Life. Miracles.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mizmor \u2014 Inclusive Music School | Orange County CA',
    description:
      'Inclusive music lessons for kids in Tustin & Orange County. Serving neurotypical and neurodivergent learners. Book a free demo session.',
    images: ['/og-image.jpg'],
  },
};

const SCHOOL_LD = {
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  "name": "Mizmor — An Inclusive Music School",
  "description": "Inclusive music school offering lessons for neurotypical and neurodivergent children in Orange County, CA.",
  "url": "https://mizmormusic.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1310 E Lincoln Ave",
    "addressLocality": "Orange",
    "addressRegion": "CA",
    "postalCode": "92865",
    "addressCountry": "US"
  },
  "telephone": "+16578445748",
  "email": "support@mizmormusic.com",
  "openingHours": "Mo-Sa 09:00-19:00",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.7455,
    "longitude": -117.8311
  },
  "priceRange": "$",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61570804989572",
    "https://www.instagram.com/mizmormusicoc/"
  ],
  "parentOrganization": {
    "@type": "Organization",
    "name": "Ministry Incorporated"
  }
};
const EVENTS_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Event",
        "name": "Mental Performance Camp — Music and Wellness",
        "startDate": "2026-07-31T17:30-07:00",
        "endDate": "2026-07-31T18:30-07:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "description": "Exploring the influence of music on well-being, with a bongo and vocal experience.",
        "location": {
          "@type": "Place",
          "name": "Santa Ana",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "505 E Central Ave",
            "addressLocality": "Santa Ana",
            "addressRegion": "CA",
            "postalCode": "92707",
            "addressCountry": "US"
          }
        },
        "url": "https://lightningyouthacademy.org/mentalperformancecamp",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-07-01T00:00-07:00",
          "url": "https://mizmormusic.com/#events"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Mizmor Music",
          "url": "https://mizmormusic.com"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Event",
        "name": "Mizmor Presentation and Demo",
        "startDate": "2026-08-01T10:30-07:00",
        "endDate": "2026-08-01T11:00-07:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "description": "Presenting the Mizmor music programme to parents and children of varied age groups.",
        "location": {
          "@type": "Place",
          "name": "Santa Ana",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "505 E Central Ave",
            "addressLocality": "Santa Ana",
            "addressRegion": "CA",
            "postalCode": "92707",
            "addressCountry": "US"
          }
        },
        "url": "https://lightningyouthacademy.org/conference",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-07-01T00:00-07:00",
          "url": "https://mizmormusic.com/#events"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Mizmor Music",
          "url": "https://mizmormusic.com"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Event",
        "name": "Lightning High Altitude Running Camp",
        "startDate": "2026-08-06T10:00-07:00",
        "endDate": "2026-08-06T15:00-07:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "description": "A music workshop for children and parents promoting wellness and self-esteem.",
        "location": {
          "@type": "Place",
          "name": "Angelus Oaks",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "42727 State Hwy 38",
            "addressLocality": "Angelus Oaks",
            "addressRegion": "CA",
            "postalCode": "92305",
            "addressCountry": "US"
          }
        },
        "url": "https://lightningyouthacademy.org/runningcamp",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-07-01T00:00-07:00",
          "url": "https://mizmormusic.com/#events"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Mizmor Music",
          "url": "https://mizmormusic.com"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Event",
        "name": "Vision 2020: Back to School",
        "startDate": "2026-08-08T10:00-07:00",
        "endDate": "2026-08-08T15:00-07:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "description": "Free eye examinations with Lestonnac Free Clinic, prescription glasses for qualifying children, and a hands-on Mizmor music experience. Advance registration required.",
        "location": {
          "@type": "Place",
          "name": "Orange",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1310 E Lincoln Ave",
            "addressLocality": "Orange",
            "addressRegion": "CA",
            "postalCode": "92865",
            "addressCountry": "US"
          }
        },
        "url": "https://mizmormusic.com/#vision-2020-registration",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-07-01T00:00-07:00",
          "url": "https://mizmormusic.com/#events"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Mizmor Music",
          "url": "https://mizmormusic.com"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Event",
        "name": "Bongo Circle",
        "startDate": "2026-08-15T10:00-07:00",
        "endDate": "2026-08-15T10:45-07:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "description": "An interactive rhythm experience where children and families connect through drumming. No experience needed.",
        "location": {
          "@type": "Place",
          "name": "Orange",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1310 E Lincoln Ave",
            "addressLocality": "Orange",
            "addressRegion": "CA",
            "postalCode": "92865",
            "addressCountry": "US"
          }
        },
        "url": "https://mizmormusic.com/#events",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-07-01T00:00-07:00",
          "url": "https://mizmormusic.com/#events"
        },
        "organizer": {
          "@type": "Organization",
          "name": "Mizmor Music",
          "url": "https://mizmormusic.com"
        }
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHOOL_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENTS_LD) }}
        />
      </head>
      <body>
        <BrandStripes />
        <MusicNotes />
        <MinistryBanner />
        <Nav />
        <Ticker />
        {children}
        <Footer />
      </body>
    </html>
  );
}
