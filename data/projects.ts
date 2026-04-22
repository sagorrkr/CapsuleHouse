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
    units: 12,
    models: 'F5 Space Capsule',
    description:
      'A cluster of 12 F5 units integrated with smart home controls for a premium lakeside glamping experience.',
    image: '/images/products/ChangzhouLakesideCustomize.jpg',
    images: [
      '/images/products/ChangzhouLakesideCustomize.jpg',
      '/images/products/f5-capsule.jpg',
    ],
    highlights: [
      '12 F5 units deployed across two lakefront terraces',
      'Full smart home integration: app-controlled lighting, AC, and door locks',
      'Panoramic glass facades oriented toward the lake',
      'Installed and guest-ready within 6 weeks of delivery',
      'Operates year-round with 85%+ seasonal occupancy',
    ],
    fullDescription:
      'The Changzhou Lakeside Resort project began as a greenfield site — a sloped lakefront plot with excellent views but no existing infrastructure. The operator needed accommodation that could be installed quickly, blend with the natural environment, and deliver a premium guest experience from day one.',
    challenge:
      'The site\'s sloped terrain required custom steel base frames for each unit to maintain level floors without excavation. Utility connections — power, water, and drainage — needed to be routed across 200m of landscaped garden without disrupting the grounds.',
    outcome:
      'All 12 units were delivered and installed over a three-week period. The resort opened on schedule for the spring season and achieved full occupancy within its first weekend of operation. Guest reviews consistently highlight the panoramic lake views and the smart home controls as standout features.',
  },
  {
    slug: 'desert-mirage-retreat',
    title: 'Desert Mirage Retreat',
    location: 'Ningxia, China',
    date: 'November 2023',
    units: 8,
    models: 'F5 Space Capsule',
    description:
      '8 F5 units featuring heat-reflective aluminium shells and custom desert-proof insulation for a remote desert glamping site.',
    image: '/images/products/f5-capsule.jpg',
    images: ['/images/products/f5-capsule.jpg'],
    highlights: [
      '8 F5 units with upgraded heat-reflective exterior finish',
      'Enhanced insulation package rated for 45°C+ summer temperatures',
      'Solar panel integration on each unit\'s roof deck',
      'Remote site logistics managed from factory to installation',
      'Full off-grid capability with battery backup and water storage',
    ],
    fullDescription:
      'The Desert Mirage Retreat is located in a remote section of the Ningxia landscape, accessible only by a single dirt track. The operator wanted a high-end glamping experience that could function entirely off-grid, withstand extreme heat, and still deliver the full interior finish their guests expected.',
    challenge:
      'Extreme temperature swings — above 45°C in summer, below -10°C in winter — required significant modification to the standard F5 shell. The remote site location meant all materials, tooling, and personnel had to be transported in a single coordinated convoy.',
    outcome:
      'The project delivered on all performance targets. Interior temperatures remain comfortable year-round with the upgraded insulation and inverter AC system. The solar integration means operating costs are near zero for power. The site has since become a benchmark reference for off-grid capsule home deployments in northern China.',
  },
  {
    slug: 'mountain-ridge-escape',
    title: 'Mountain Ridge Escape',
    location: 'Sichuan, China',
    date: 'January 2024',
    units: 4,
    models: 'F7 Space Capsule',
    description:
      '4 F7 units deployed in high-altitude terrain with snow-load rated roof panels and panoramic mountain views.',
    image: '/images/products/f7-capsule.jpg',
    images: [
      '/images/products/f7-capsule.jpg',
      '/images/products/forest-cabin-apple.jpg',
    ],
    highlights: [
      '4 F7 units at 2,400m elevation with reinforced snow-load roof panels',
      'Panoramic glass end walls framing mountain ridge views',
      'Underfloor heating system integrated at the factory',
      'Helicopter-assisted component delivery to the ridge site',
      'Year-round operation in sub-zero winter conditions',
    ],
    fullDescription:
      'The Mountain Ridge Escape sits on a narrow ridge at 2,400 metres in Sichuan province, with unobstructed views across a mountain range. The operator — an adventure tourism company — wanted accommodation that matched the drama of the location: minimal footprint, maximum view, and capable of operating through harsh winters.',
    challenge:
      'The site was accessible only by foot or helicopter, making conventional construction impossible. Units needed to be engineered for snow loads exceeding 150kg/m², underfloor heating had to be integrated before shipping, and the installation team had to work with limited equipment at altitude.',
    outcome:
      'All four units were lifted to the ridge in sections by helicopter and assembled on pre-prepared steel bases in five days. The resort opened for the winter hiking season and immediately became one of the most photographed glamping properties in Sichuan. The underfloor heating and panoramic views in sub-zero temperatures have become the signature guest experience.',
  },
];

export function getProjectBySlug(slug: string): ProjectFull | undefined {
  return projects.find((p) => p.slug === slug);
}
