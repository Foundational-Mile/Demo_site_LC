# Limitless Demo (Astro)

Elevated front-end redesign for **Limitless Church** built with Astro and reusable components.

## Run

```bash
npm install
npm run dev
```

## Project Structure

- `src/layouts/BaseLayout.astro`: global shell, metadata, header/footer wrapper.
- `src/styles/global.css`: design tokens, typography, spacing, buttons, grid, utility surfaces.
- `src/components/`: reusable UI building blocks.
- `src/pages/`: complete page routes.
- `src/data/`: centralized placeholder content and mock datasets.
- `public/images/`: named placeholder image files you can replace directly.
- `public/videos/`: homepage hero video drop-in location.

## Pages Included

1. `/` Home
2. `/about`
3. `/care`
4. `/messages`
5. `/kids`
6. `/staff`
7. `/give`
8. `/events`
9. `/next-steps`
10. `/plan-your-visit`

## Shared Components

- Header + mobile navigation (`Header.astro`)
- Footer (`Footer.astro`)
- Hero system (`HeroSection.astro`)
- Full-span video hero (`FullSpanVideoHero.astro`)
- Section intro (`SectionIntro.astro`)
- Split content section (`SplitSection.astro`)
- CTA band (`CTABand.astro`)
- Card grid wrapper (`CardGrid.astro`)
- Staff/message/event/ministry cards
- FAQ accordion (`FAQAccordion.astro`)
- Testimonial strip (`TestimonialStrip.astro`)
- Visit planning block (`VisitPlanningBlock.astro`)
- Service times/location block (`ServiceInfoBlock.astro`)
- Form placeholder section (`FormPlaceholder.astro`)
- Stat/reassurance block (`HighlightStats.astro`)

## Placeholder Data Location

- `src/data/site.ts`: church metadata, nav links, footer links.
- `src/data/content.ts`: staff, messages, events, ministries, values, care resources, FAQs, next steps, and testimonials.
- `src/data/media.ts`: named image paths used across all pages/data.

## Replace Media Quickly

- Replace any file in `public/images/` with your real asset while keeping the same filename.
- Example: replace `public/images/hero-about.svg` with your final About hero image.
- Homepage full-span hero video path is:
  - `public/videos/hero-home.mp4`
- Poster image (while video is loading or missing) is:
  - `public/images/hero-home-video-poster.svg`

## Future Integration Attachment Points

- **Church Center / Planning Center**: replace placeholder links and form sections in:
  - `src/components/FormPlaceholder.astro`
- **YouTube / Sermon API**: replace `messages` mock data in `src/data/content.ts`.
- **Event feed/calendar**: replace `events` mock data in `src/data/content.ts`.
- **Staff CMS / directory sync**: replace `staff` mock data in `src/data/content.ts`.
- **Giving platform**: wire `give` page CTA links to secure giving endpoint.
- **Maps embed**: replace map placeholder block in `src/pages/plan-your-visit.astro`.

## GitHub Pages Deployment

This repo is configured to deploy automatically via GitHub Actions using:

- `.github/workflows/deploy-pages.yml`
- `astro.config.mjs` dynamic `site`/`base` handling for project repos

### One-time GitHub setup

1. Push this project to a GitHub repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or `master`) to trigger deployment.

### Notes

- Project repo URL format: `https://<username>.github.io/<repo>/`
- User/org pages repo (`<username>.github.io`) deploys from root (`/`)
- `public/.nojekyll` is included to prevent Jekyll processing issues.
