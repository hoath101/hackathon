# Avion — Furniture & Homeware Store

A fully responsive e-commerce storefront for **Avion**, a fictional London-based furniture and homeware brand. Built as a GIAIC hackathon project using Next.js 15, Tailwind CSS, and Sanity CMS.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, feature highlights, ceramics grid, popular products, newsletter |
| `/about` | Brand story, service section, feature cards |
| `/products` | Full product catalogue fetched live from Sanity |
| `/product` | Single product detail — image, description, dimensions, add to cart |
| `/cart` | Shopping cart with subtotal and checkout |
| `/studio` | Sanity Studio (content management) |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **CMS:** Sanity v3 (product & category schemas)
- **Icons:** react-icons
- **UI Primitives:** Radix UI, class-variance-authority

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To manage content, visit [http://localhost:3000/studio](http://localhost:3000/studio).

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── products/         # All products (Sanity fetch)
│   ├── product/          # Single product detail
│   ├── cart/             # Shopping cart
│   └── studio/           # Sanity Studio
├── components/
│   ├── header.tsx        # Responsive nav (desktop + mobile sheet)
│   ├── footer.tsx        # Responsive footer grid
│   └── button.tsx        # Shared button components
└── sanity/
    ├── lib/              # Sanity client, image helper
    └── schemaTypes/      # Product & category schemas
```

---

## Scripts

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## Sanity Content Schema

**Product** fields: `name`, `slug`, `image`, `price`, `quantity`, `tags`, `description`, `features`, `dimensions` (height/width/depth), `category`

**Category** fields: `name`, `slug`
