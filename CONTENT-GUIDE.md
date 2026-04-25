# Content Update Guide

This file explains how to update website content without touching the design or code. All content lives in the `data/` folder.

---

## Products — `data/products.ts`

Each product is an object in the `products` array. To edit a product, find it by `slug` and update the fields.

**Key fields:**

- `name` — full display name
- `description` — shown on the product detail page
- `floorArea`, `guests`, `weight` — shown on the card and detail page
- `image` — path like `/images/products/f5-capsule.jpg` (file must exist in `public/images/products/`)
- `images` — array of all gallery images for the detail page
- `specs` — table shown on the detail page; each item is `{ label: '...', value: '...' }`
- `badge` — optional pill badge (e.g. `"Most Popular"`)

**To add a new product:**

1. Add a new object to the `products` array in `data/products.ts`
2. Copy the structure of an existing product and fill in all fields
3. Add the product image to `public/images/products/`
4. The product page at `/products/your-slug` is generated automatically

---

## Blog Posts — `data/blogPosts.ts`

Each post is an object in the `blogPosts` array.

**Key fields:**

- `slug` — URL slug, e.g. `"my-new-post"` → page at `/blog/my-new-post`
- `title`, `excerpt` — shown on the blog card and detail page
- `category` — small tag above the title (e.g. `"Founder's Note · Vision"`)
- `image` — path like `/images/products/f5-capsule.jpg`
- `date` — e.g. `"April 20, 2025"`
- `author` — e.g. `"Zhang WeiFei, Founder"`
- `readTime` — e.g. `"4 min read"`
- `body` — array of content blocks (see below)

**Body block types:**

```ts
// A paragraph
{ type: 'p', text: 'Your paragraph text here.' }

// A heading (H2)
{ type: 'h2', text: 'Section Heading' }

// A bullet list
{ type: 'ul', items: ['Point one', 'Point two', 'Point three'] }
```

**Example — adding a new post:**

```ts
{
  slug: 'why-capsule-homes-work-for-resorts',
  category: 'Industry · Hospitality',
  title: 'Why capsule homes work for resorts',
  excerpt: 'Short summary shown on the blog card (1–2 sentences).',
  image: '/images/products/n7-apple-cabin.jpg',
  date: 'April 20, 2025',
  author: 'Wang XiaoLei, Founder',
  readTime: '3 min read',
  body: [
    { type: 'p', text: 'Opening paragraph...' },
    { type: 'h2', text: 'First Section' },
    { type: 'p', text: 'Second paragraph...' },
    { type: 'ul', items: ['Point 1', 'Point 2'] },
  ],
},
```

---

## Projects — `data/projects.ts`

Each project is an object in the `projects` array.

**Key fields:**

- `slug` — URL slug → page at `/projects/your-slug`
- `title`, `description` — shown on the card and detail page
- `location`, `date`, `units`, `models` — shown in the details sidebar
- `image` — main hero image
- `images` — array of all images (first is the hero, rest shown in the gallery)
- `highlights` — bullet list of key achievements (shown with ✓ marks)
- `fullDescription` — full paragraph for the detail page
- `challenge` — short description of the project challenge
- `outcome` — short description of the result

**Example — adding a new project:**

```ts
{
  slug: 'hainan-beachfront-resort',
  title: 'Hainan Beachfront Resort',
  location: 'Hainan, China',
  date: 'June 2025',
  units: 6,
  models: 'Shark Capsule',
  description: 'Short description shown on the project card.',
  image: '/images/products/shark-capsule.jpg',
  images: ['/images/products/shark-capsule.jpg'],
  highlights: [
    '6 Shark Capsule units on a beachfront plot',
    'Custom exterior finish for salt-air resistance',
  ],
  fullDescription: 'Full description for the detail page...',
  challenge: 'Salt-air corrosion and tidal access constraints...',
  outcome: 'Opened on schedule, fully booked for first season...',
},
```

---

## Contact Details

Contact info (email, phone) appears in two places:

1. **Footer** → `components/layout/Footer.tsx` (lines 41–42)
2. **Contact section** → `components/home/ContactSection.tsx` (search for `capsulehouse0@gmail.com`)

Update both if the contact details change.

---

## Images

All product/blog/project images live in `public/images/products/`.

- **Naming:** use lowercase with hyphens, e.g. `my-new-image.jpg`
- **Size:** recommended 1200×800px minimum, JPG or PNG, under 500KB
- After adding an image, reference it as `/images/products/my-new-image.jpg` in the data files

---

## Deploying updates

After making any changes:

```bash
git add .
git commit -m "Update content: [what you changed]"
git push
```

Vercel picks up the push automatically and deploys within 2–3 minutes.
