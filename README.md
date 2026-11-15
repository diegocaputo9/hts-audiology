# Hearing & Tinnitus Solutions

A modern clinical website for Dr. Robert Melton in Pagosa Springs, Colorado. Built from the supplied project brief and verified practice information.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion, Lucide, self-hosted Manrope. Static export works on Cloudflare Pages and other static hosts.

## Develop

```bash
npm ci
npm run dev
```

Visit http://localhost:3000.

```bash
npm test
npm run typecheck
npm run build
```

Production output is `out/`. Deploy the complete folder; directory routes use trailing slashes. GitHub Actions runs the score tests and production build on pushes and pull requests.

## Routes

Home, Our people, Hearing, Tinnitus, Cognition, Patient resources, Contact, Book a visit, Tinnitus check-in, Website privacy, Accessibility, and a custom 404.

## Functional scope

- Responsive contracting navigation, animated care dropdown, keyboard-enabled service tabs, stationary photographs, and restrained reveal motion.
- Muted inline cinematic hero loop with pause/play controls, a poster, reduced-motion handling, and data-saver handling.
- Actual provider photographs, edited for transparent backgrounds; original files retained in `docs/reference-assets/`.
- Original five-question tinnitus reflection, browser-only calculation, answer validation, back navigation, reset, and printable results. **It is not the licensed, validated TFI.**
- Clinic day planner reflects normal operating days, blocks weekends and past days, and shows Mountain Time hours. **It does not show live bookings or reserve appointments.** Actual appointments are arranged by calling the clinic. The old site's booking button is only an internal anchor, not an external scheduler.
- Automatically loaded Google map and direct directions link, FAQs, SHOEBOX screening link, contact links, privacy and accessibility pages.

## Media

The hero is a 1080p H.264 stationary crossfade edit of three original AI-generated editorial images. It is not filmed footage or a Higgsfield-generated 4K motion scene. Replace `public/video/patient-journey.mp4` and the hero poster when the final film is available. Keep the film silent, compressed, and short; keep the pause control.

Generated people in clinic scenes are illustrative. Do not identify them as actual staff or patients. Named provider images come from the existing practice website. Exact image prompts and sources are retained in `docs/asset-provenance.json`, `docs/cutout-prompts.json`, and embedded image metadata or adjacent provenance sidecars. Images were produced with the built-in image_gen tool; image conversion and video encoding are local build preparation.

## Privacy and launch status

No patient accounts, database, form submissions, analytics, or questionnaire persistence. Google Maps is embedded automatically and follows Google’s privacy practices, described in the website notice. No Supabase project or keepalive task is necessary for this static website. Normal host request logs and visitor use of external map/screening services remain subject to those providers' practices.

This is a review build. Robots indexing is disabled in both metadata and `public/robots.txt`. The website privacy page describes the current implementation; it is not a substitute for the practice's Notice of Privacy Practices. See `docs/launch-notes.md` for the remaining clinical and integration decisions.

Cloudflare configuration and security headers are included. See `docs/cloudflare-deployment.md` to connect the private GitHub repository to the client's own Cloudflare account.

## Latest review refinements

The hero has fixed images without camera movement. All interface text is at least 13px, with 16px reading copy. Five native service disclosures explain hearing exams, hearing aids, ear cleaning, tinnitus treatment, and hearing protection. Pointer hover, press feedback, a spring tab underline, and a reflective pointer-responsive sound sculpture support the same clinical visual system. The sculpture pauses when hidden or offscreen, includes a pause control, and defaults to a static frame for reduced motion. The source stays private while the hosted website can be shared publicly.

The full-width hero, tighter page headings, compact footer, and five authored service symbols retain the clinical layout. The contact-page message dialog uses native focus management, required fields, and an email-app draft addressed to howdy@htsaudiology.com. The visitor sends the email from their own app; the website never reports a sent message. A copy-message fallback remains available, with no server submission or saved form entries.
