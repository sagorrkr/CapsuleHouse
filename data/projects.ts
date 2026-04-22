import { Project } from '@/types';

export interface ProjectFull extends Project {
  fullDescription: string;
  challenge: string;
  outcome: string;
}

export const projects: ProjectFull[] = [
  {
    slug: 'changzhou-lakeside-resort',
    title: 'Changzhou Lakeside Resort',
    location: 'Jiangsu, China',
    date: 'March 2024',
    units: 6,
    models: 'Customized Shark Capsule',
    description:
      'A cluster of 6 Customized Shark units integrated with smart home controls for a premium lakeside glamping experience.',
    image: '/images/products/ChangzhouLakesideCustomize.jpg',
    images: [
      '/images/products/ChangzhouLakesideCustomize.jpg',
    
    ],
    highlights: [
      '6 Customized Shark units deployed across two lakefront terraces.',
      'Full smart home integration: app-controlled lighting, AC, and door locks.',
      'Panoramic glass facades oriented toward the lake.',
      'Installed and guest-ready within 6 weeks of delivery.',
      'Operates year-round with 85%+ seasonal occupancy.',
    ],
    fullDescription:
      'The Changzhou Lakeside Resort project began as a greenfield site, a sloped lakefront plot with excellent views but no existing infrastructure. The operator needed accommodation that could be installed quickly, blend with the natural environment, and deliver a premium guest experience from day one.',
    challenge:
      'The site\'s sloped terrain required custom steel base frames for each unit to maintain level floors without excavation. Utility connections, power, water, and drainage needed to be routed across 110m of landscaped garden without disrupting the grounds.',
    outcome:
      'All 6 units were delivered and installed over a three-week period. The resort opened on schedule for the spring season and achieved full occupancy within its first weekend of operation. Guest reviews consistently highlight the panoramic lake views and the smart home controls as standout features.',
  },
  {
    slug: 'desert-mirage-retreat',
    title: 'Desert Mirage Retreat',
    location: 'Ningxia, China',
    date: 'November 2024',
    units: 8,
    models: 'F5 Space Capsule',
    description:
      '8 F5 units featuring heat-reflective aluminium shells and custom desert-proof insulation for a remote desert glamping site.',
    image: '/images/products/f5-capsule2.jpg',
    images: ['/images/products/f5-capsule2.jpg'],
    highlights: [
      '8 F5 units with upgraded heat-reflective exterior finish',
      'Enhanced insulation package rated for 45°C+ summer temperatures also for cold winters(Vice-versa)',
      'Solar panel integration on each unit\'s roof deck',
      'Remote site logistics managed from factory to installation',
      'Full off-grid capability with battery backup and water storage',
    ],
    fullDescription:
      'The Desert Mirage Retreat is located in a remote section of the Ningxia landscape, accessible only by a single dirt track. The operator wanted a high-end glamping experience that could function entirely off-grid, withstand extreme heat, and still deliver the full interior finish their guests expected.',
    challenge:
      'Extreme temperature swings above 45°C in summer, below -10°C in winter required significant modification to the standard F5 shell. The remote site location meant all materials, tooling, and personnel had to be transported in a single coordinated convoy.',
    outcome:
      'The project delivered on all performance targets. Interior temperatures remain comfortable year-round with the upgraded insulation and inverter AC system. The solar integration means operating costs are near zero for power. The site has since become a benchmark reference for off-grid capsule home deployments in northern China.',
  },
  {
    slug: 'mountain-ridge-escape',
    title: 'Mountain Ridge Escape',
    location: 'Sichuan, China',
    date: 'July 2025',
    units: 4,
    models: 'F7 Space Capsule',
    description:
      '4 F7 units deployed in high-altitude terrain with snow-load rated roof panels and panoramic mountain views.',
    image: '/images/products/f7-capsule.jpg',
    images: [
      '/images/products/f7-capsule.jpg',
    ],
    highlights: [
    '4 F7 units at 2,400m elevation with reinforced snow-load roof panels',
    'Panoramic glass end walls framing mountain ridge views',
    'Underfloor heating system integrated at the factory',
    'Modular component system for manual transport to restricted sites',
    'Year-round operation in sub-zero winter conditions',
    ],
    fullDescription:
      'The Mountain Ridge Escape is a high-altitude retreat at 2,400m in Sichuan. To preserve the sensitive alpine environment, we utilized a precision panelized assembly for the F7 Space Capsules, bypassing the need for heavy machinery or road access.',
    challenge:
      'The ridge was accessible only via a narrow walking path and a small utility lift. To overcome this, the F7 units were redesigned into Modular Precision Panels. No single component weighed more than 150kg, allowing for manual transport or the use of small-scale mechanical dollies. The challenge was ensuring that the "click-lock" thermal seals remained airtight to handle Sichuan’s sub-zero mountain humidity.',
    outcome:
      'Using a "Lego-style" assembly logic, all four F7 units were carried to the ridge piece-by-piece and reconstructed on pre-installed, low-impact screw pile foundations. The entire installation was completed in just eight days with a six-person crew, requiring zero heavy machinery and leaving the surrounding flora entirely undisturbed. Since opening, the resort has become a benchmark for sustainable high-altitude glamping, with the integrated graphene underfloor heating maintaining a consistent 22°C internal climate despite external mountain blizzards.',
  },
];

export function getProjectBySlug(slug: string): ProjectFull | undefined {
  return projects.find((p) => p.slug === slug);
}
