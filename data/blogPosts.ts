import { BlogPost } from '@/types';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export interface BlogPostFull extends BlogPost {
  body: Block[];
}

export const blogPosts: BlogPostFull[] = [
  {
    slug: 'factory-vs-site',
    category: "Founder's Note · Vision",
    title: 'Why we build in a factory, not on a construction site',
    excerpt:
      'Traditional construction is slow and impossible to scale. We asked: what if a quality home could be manufactured like a precision product?',
    image: '/images/products/f5-capsule.jpg',
    date: 'January 15, 2025',
    author: 'Zhang WeiFei, Founder',
    readTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'Every building project we looked at before starting Flower Capsule had the same problem: too many variables outside anyone\'s control. Weather delays, contractor availability, material shortages, and site access issues meant that a six-month build regularly became twelve months — or longer. The cost overruns weren\'t exceptions; they were the norm.',
      },
      {
        type: 'h2',
        text: 'The factory model changes the equation',
      },
      {
        type: 'p',
        text: 'When a home is built inside a controlled factory environment, the variables disappear. Our team works with the same materials, the same tools, and the same process every single day. Quality checks happen at every stage of the build, not just at the end. The result is a finished unit that leaves our facility in Changzhou at the same standard every time — regardless of what the weather is doing outside.',
      },
      {
        type: 'p',
        text: 'Factory production also compresses the timeline dramatically. A standard site build for a comparable structure takes four to eight months. Our capsule units are completed and ready for delivery in six to ten weeks. For resort operators trying to open for a season, or developers trying to hit a lease date, this difference is everything.',
      },
      {
        type: 'h2',
        text: 'Scale without compromise',
      },
      {
        type: 'p',
        text: 'The other advantage that only becomes clear at scale: when a client needs twelve units, or thirty, the factory model means unit twelve is identical to unit one. There\'s no drift in finish quality, no variation in fittings, no inconsistent workmanship across a development. Every guest in a ten-pod resort gets the same experience in pod one as they do in pod ten. That kind of consistency is simply impossible to achieve with traditional site construction.',
      },
      {
        type: 'ul',
        items: [
          'Controlled environment eliminates weather and site access delays',
          '6–10 week production cycle vs 4–8 months for on-site builds',
          'Identical quality across every unit in a multi-unit order',
          'Full smart home integration completed at the factory before shipping',
          'Units arrive fully furnished and ready to occupy',
        ],
      },
      {
        type: 'p',
        text: 'We\'re not reinventing housing — we\'re applying manufacturing precision to it. That shift is what makes Flower Capsule units worth building, and worth buying.',
      },
    ],
  },
  {
    slug: 'resort-demand',
    category: 'Industry · Hospitality',
    title: 'The demand for resort accommodation is growing faster than builders can supply it',
    excerpt:
      'Tourism is recovering globally. Capsule homes deploy in days — here\'s why that changes everything for resort developers.',
    image: '/images/products/n7-apple-cabin.jpg',
    date: 'February 3, 2025',
    author: 'Wang XiaoLei, Founder',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Global tourism has not just recovered from the disruptions of the early 2020s — it has surpassed pre-pandemic levels in many segments, with nature-based and boutique accommodation growing fastest. Glamping in particular has seen double-digit growth year-on-year since 2022, driven by travellers who want immersive outdoor experiences without sacrificing comfort.',
      },
      {
        type: 'h2',
        text: 'The supply problem',
      },
      {
        type: 'p',
        text: 'Resort developers know the demand is there. The problem is supply. Traditional hotel construction is capital-intensive, slow, and locked into permanent infrastructure. Building a 20-room lodge from scratch might take two years and cost ten times more per key than a modular capsule unit. By the time it opens, market conditions may have shifted entirely.',
      },
      {
        type: 'p',
        text: 'Capsule homes solve this directly. A developer who orders ten F5 units can have them on site and generating revenue within three months of signing. If the market shifts — if a new site becomes available, or a location underperforms — the units can be relocated. That optionality has a real financial value that static construction simply cannot offer.',
      },
      {
        type: 'h2',
        text: 'What operators are actually building',
      },
      {
        type: 'ul',
        items: [
          'Lakeside and riverside glamping villages with 8–20 units',
          'Mountain retreat clusters with premium interior specs',
          'Beach and coastal boutique resorts in tourist zones',
          'Tea houses and wellness pods as F&B or spa add-ons',
          'Urban rooftop and infill micro-accommodation',
        ],
      },
      {
        type: 'p',
        text: 'The operators we work with range from individual investors building their first glamping site to established hospitality groups expanding a portfolio. What they share is an understanding that speed, quality, and flexibility now matter more than permanence. Capsule homes deliver all three.',
      },
    ],
  },
  {
    slug: 'custom-build',
    category: 'Design Story · Custom',
    title: 'From standard shell to shark capsule — how a custom build works',
    excerpt:
      'A client brief becomes a finished themed capsule home. Walk through a real project from concept to delivery.',
    image: '/images/products/shark-capsule.jpg',
    date: 'March 11, 2025',
    author: 'Lu Dash, Marketing Manager(Overseas)',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'The Shark Capsule started as a conversation about standing out. The client — a resort operator on the Hainan coast — had seen dozens of glamping sites and felt they all looked the same. They wanted something that would stop a guest mid-scroll on social media. What they ended up with was a 32m² unit shaped like an emerging shark fin, with a master bedroom, private deck, and the full Flower Capsule smart interior package inside.',
      },
      {
        type: 'h2',
        text: 'Phase 1: Brief and concept',
      },
      {
        type: 'p',
        text: 'Every custom build starts with a brief session — typically one to two calls where we understand the site, the use case, the desired guest experience, and any hard constraints like footprint, access, or local regulations. From this, our design team produces three concept directions with rough renders. The client picks a direction, we iterate, and within two weeks we have an agreed concept with dimensions, material palette, and interior spec.',
      },
      {
        type: 'h2',
        text: 'Phase 2: Engineering and production',
      },
      {
        type: 'p',
        text: 'Once the design is signed off, engineering drawings are produced and reviewed before we cut a single piece of material. The galvanised steel frame is fabricated first, then the exterior shell panels — in the Shark\'s case, a custom curved fluorocarbon aluminium skin that required tooling specific to this project. Interior fit-out runs in parallel: flooring, electrical, plumbing, joinery, and smart home wiring are all installed at the factory to the same standard as our production units.',
      },
      {
        type: 'ul',
        items: [
          'Brief and concept: 1–2 weeks',
          'Engineering and sign-off: 1 week',
          'Factory production: 6–8 weeks',
          'Quality inspection and photography: 3–5 days',
          'Shipping and site installation: 1–2 weeks',
        ],
      },
      {
        type: 'p',
        text: 'Total time from first call to unit on site: around ten to twelve weeks for most custom builds. The Shark Capsule was on the Hainan coast and fully operational in eleven weeks from project kick-off. That timeline — for a one-of-a-kind sculptural structure — is something traditional construction cannot come close to matching.',
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPostFull | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
