# Home Page 12 — Data Sources and Content Mapping

These assets are only related to Home Page 12. Use them to manage the blog posts, services, and reviews shown on that page.

- NextJS\data\ai-solutions\blog — blog pages
- NextJS\data\ai-solutions\services — service pages
- NextJS\data\testimonialsV8.json — review section JSON file

For POSIX-style paths (as seen in the repo), the equivalents are:

- `data/ai-solutions/blog`
- `data/ai-solutions/services`
- `data/testimonialsV8.json`

## Where the data is rendered

Home 12 route and components:

- Route: `app/home-12/page.tsx`
- Components: `components/homepage-12/`
  - Blog: `BlogPostV7.tsx`
  - Services: `ServicesV11.tsx` (and variants `ServicesV11_New.tsx`, `ServicesV11_Backup.tsx`)
  - Reviews: `TestimonialV8.tsx`

## Blog content (data/ai-solutions/blog)

- Format: Markdown files (.md)
- Purpose: Each file represents a blog post displayed in the Home 12 blog section.
- Current files:
  - `ai-powered-telemedicine-for-remote-healthcare.md`
  - `exploring-the-latest-advancements-in-ai-research.md`
  - `how-ai-is-revolutionizing-medical-diagnostics.md`
  - `leveraging-ai-to-improve-mental-health-care.md`
  - `revolutionizing-education-with-ai-technologies.md`
  - `ritesh.md`
  - `the-role-of-ai-in-robotic-assisted-surgeries.md`
  - `transforming-patient-care-with-ai-driven-solutions.md`
  - `understanding-the-ethical-implications-of-ai.md`

Tips:

- Keep slugs URL-safe. File name generally maps to the slug.
- Use front matter (if supported by your loaders) for title, date, excerpt, cover image.

## Service content (data/ai-solutions/services)

- Format: Markdown files (.md)
- Purpose: Each file represents a service shown in the Home 12 services section.
- Current files:
  - `ai-chatbots-and-virtual-assistants.md`
  - `ai-powered-marketing.md`
  - `application-development-and-architecture.md`
  - `business-process-automation-and-optimization.md`
  - `custom-ai-development.md`
  - `key-insights-from-complex-data.md`
  - `voice-ai-solutions.md`
  - `workflow-automation.md`

Tips:

- Keep titles short (<= 60 characters) to avoid wrapping issues.
- Add brief summaries/excerpts to improve the card layout.

## Reviews (data/testimonialsV8.json)

- Format: JSON array of review objects
- Used by: `components/homepage-12/TestimonialV8.tsx`
- Schema (keys):
  - `id` (number, unique)
  - `reviewText` (string)
  - `authorName` (string)
  - `authorRole` (string)
  - `authorImage` (string, path under `/public`, e.g. `/images/avatar/review-13.png`)
  - `rating` (number, 1-5)

Example entry:

```json
{
  "id": 1,
  "reviewText": "The level of innovation and technical expertise demonstrated by this team is outstanding. They've transformed our digital presence completely.",
  "authorName": "Kristin Watson",
  "authorRole": "CEO, Tech Innovators",
  "authorImage": "/images/avatar/review-13.png",
  "rating": 5
}
```

Guidelines:

- Ensure `id` values are unique and sequential if used as keys.
- Keep `rating` within 1–5. Non-integer values may not render as expected.
- Place images in `public/images/avatar/` and reference with leading slash.

## Maintenance checklist

- When adding a new blog or service:
  - Add a new `.md` file under the respective folder.
  - Follow existing naming and any front matter conventions.
  - Verify it appears correctly on `app/home-12`.
- When editing reviews:
  - Update `data/testimonialsV8.json` with valid fields and image paths.
  - Keep consistent tone/length for `reviewText` to maintain layout.

If you need these assets shared with other home pages, consider extracting shared content into a neutral folder and updating the corresponding components to read from the new location.
