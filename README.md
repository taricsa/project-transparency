# [Project-Transparency]

Open-source, mobile-first educational platform for Canadian teenagers navigating menstrual product safety. Version **1.0.0**.

## Stack

- **Next.js 16** (App Router, React Server Components by default)
- **TypeScript** (strict mode, `@/*` path aliases)
- **Tailwind CSS v4** (CSS-first `@theme` in `src/app/globals.css`)
- **Vercel** (Edge runtime for dynamic OG images)

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home & Pad/Pod lexicon, biological baseline, exposure scale |
| `/science` | Toxicology & chemical glossary (PFAS, VOCs, phthalates, metals) |
| `/regulations` | Canadian regulatory analysis |
| `/guide` | Safe brand screening for the Canadian market |
| `/api/og` | Dynamic Open Graph image cards |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional: set `NEXT_PUBLIC_SITE_URL` for correct OG image URLs in production metadata.

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Scripts

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Branch workflow

| Branch | Purpose | Vercel |
|--------|---------|--------|
| `develop` | Active development | Preview deployments |
| `stage` | Pre-release testing | Staging environment |
| `main` | Production releases | Production |

All changes must follow this release flow:

1. Commit and push to **`develop`**
2. Open a **PR: `develop` → `stage`**, review, and merge
3. Open a **PR: `stage` → `main`**, review, and merge

Do not push directly to `stage` or `main`, and do not skip `stage` when promoting to production.

```text
develop  --PR-->  stage  --PR-->  main
   |                 |              |
 preview          staging       production
```

## Deploy to Vercel

1. Import the GitHub repository in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
3. Map branches: `main` → Production, `stage` → Staging, `develop` → Preview.

```bash
npx vercel link
npx vercel env pull
```

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FDFBF7` | Cream/oatmeal page background |
| Foreground | `#2C3630` | Forest charcoal typography |
| Primary | `#A3B899` | Matcha/sage brand accent |
| Accent | `#D98A6C` | Terracotta/clay highlights |

## Disclaimer

Educational content only — not medical advice. Consult a healthcare provider for personal medical decisions.

## License

Open source — see repository license file when published.
