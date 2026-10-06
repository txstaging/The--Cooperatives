# cooperatives

Arabic (RTL) marketing site for **التعاونيات**, built from the Figma file
`transformix-2` (frames `Desktop - 2` → `/`, `Desktop - 3` → `/about`, `الاشتراك — سطح المكتب` → `/subscription` and `التواصل معنا` → `/contact`).

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 3.4

## Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the dev server             |
| `npm run build`     | Production build                 |
| `npm start`         | Serve the production build       |
| `npm run lint`      | ESLint (Next core-web-vitals)    |
| `npm run typecheck` | `tsc --noEmit`                   |

## Structure

```text
src/
├── app/                    # Routes: /, /about, /subscription, /contact, not-found
├── components/
│   ├── ui/                 # Primitives: Button/ButtonLink, Container, Logo, SectionHeader, NumberedList, AccentText
│   └── features/
│       ├── layout/         # SiteHeader (desktop nav + mobile drawer), SiteFooter
│       ├── home/           # Home page sections
│       ├── about/          # About page sections
│       ├── contact/        # Contact page: hero, info card, form (client)
│       ├── subscription/   # Subscription page: plans, comparison table, steps, FAQ (native details), CTA
│       └── shared/         # CtaBanner, ComingSoon
├── config/
│   ├── site.ts             # Routes, navigation, footer links, metadata
│   └── content/            # Page copy and image metadata (typed)
├── lib/cn.ts               # clsx + tailwind-merge (aware of custom tokens)
├── types/                  # Shared domain interfaces
└── styles/globals.css      # Design tokens as CSS variables + Tailwind layers
```

## Design tokens

Colors live as RGB channels in `src/styles/globals.css` (`--color-*`) and are
exposed through `tailwind.config.ts` (`brand`, `ink`, `content`, `surface`,
`line`, `mint`, `footer`, `cta`…), so opacity modifiers like `border-brand-deep/20`
work. The type scale (`text-display`, `text-heading`, `text-body-lg`…), radii,
and border widths (`border-thin` = Figma's 1.111px) are defined there too.

When you add a custom font-size or border-width token, also register it in
`src/lib/cn.ts`. Otherwise `tailwind-merge` mistakes it for a color and drops classes.

## Conventions

- The document is `dir="rtl"`. Use logical utilities (`ps-*`, `pe-*`, `start-*`,
  `end-*`, `text-start`) so layouts mirror correctly. Lists in `config/content`
  are in reading order: the first item renders right-most.
- Content is data-driven: change copy in `config/content/*`, not in components.
- Server Components by default; only the nav (active link + drawer) is client-side.
