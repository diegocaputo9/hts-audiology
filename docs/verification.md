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

## November 14 refinement verification

- All 11 routes pass the 12px minimum text and horizontal-overflow checks at 1440px, 390px, and 320px. Main reading copy is 16px.
- Thirty recorded checks pass, including 22 axe WCAG A/AA route/viewport scans with no violations and no runtime page errors.
- All five service disclosures open independently, handle rapid interruption, and work with keyboard activation.
- Home care titles enlarge on pointer hover. Press feedback is shared across links, buttons, summaries, and rating controls; the service underline uses an elastic shared spring.
- The reflective sound sculpture animates and responds to the pointer, freezes on pause, and defaults to static for reduced motion.
- Sampling hero frames at one and three seconds gives an average pixel difference of 0.00164 on a 0–255 channel scale, confirming fixed images between crossfades.
- Google Maps is now requested automatically. The real embedded map endpoint returned HTTP 200 and loaded road/map content in the browser. This replaces the earlier deferred-map behavior.
- Contact email, HELP/STOP text-message instructions, SMS-consent restriction, and the automatic-map disclosure are present.

The mechanical detector was run once for the refinement. It reports the existing bounded header size-transition warnings, an additional matching logo press/width transition, and design-system advisories (including the deliberately raised 12px minimum). Documentation was updated to record the new type floor and motion rules. Existing local color annotations remain advisory; no unrelated palette change was made.
