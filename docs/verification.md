# Verification

Verified November 14, 2026.

- Production static export (Next.js Webpack build): passes (11 content routes plus generated not-found output).
- TypeScript: passes.
- Four score validation tests: pass (zero, maximum, mixed values, invalid/missing values).
- Browser checks: 28 checks; all 11 routes at 1440px and 390px load without horizontal overflow, page errors, or axe WCAG A/AA violations in the tested states.
- Patient flow: service tabs, keyboard arrow navigation, mobile navigation, required questionnaire answers, correct zero score, refresh clearing, day-planner selection, and deferred map loading pass.
- Additional behavior: normal-motion video starts, pauses, resumes, and stops offscreen; reduced motion shows a static poster. Homepage has no horizontal overflow at 320, 600, 768, 1024, 1280, and 1600px.
- Media: local 1080p MP4 loads; all six shipping raster images have recorded provenance. Provider WebP images preserve alpha transparency.
- Mechanical design detector: no errors; two bounded layout-transition warnings for the specifically requested shrinking navigation (logo width/header minimum height). These are deliberate, localized transitions rather than a general animation convention.

Automated accessibility scans are bounded checks, not a full accessibility certification. Clinical approval, live scheduling, licensed TFI integration, and the final production domain remain the practice's launch decisions.

Independent visual review: initial disposition fix for two disclosure labels. Both were corrected and scored resolved on the same desktop/mobile production captures. Final disposition: ship for the scored fixes; no regressions observed in that verdict pass.
