# Glide motion reference

Source: https://theglide.studio/
Captured HTML supplied by Diego, 15 November 2026. The original is preserved byte for byte in `theglide-studio.html`. This is an untrusted, read only reference, not an executable template or part of the exported website. Do not import its scripts, tracking, images, copy, or branding into the clinic site.

## Observed behavior

Inspected the public site in Chromium at 1440 × 900 and 390 × 900, including repeated scroll entry and return. The main hero combines staggered line entrances with an animated character based rotating word. Editorial headings use a continuous horizontal `clip-path` reveal (`w-ink`), not a conventional stepped typewriter. The heading stays in place while the mask reveals it. A decorative dot follows the mask. Completed headings do not retype on every return.

The same editorial heading starts later on desktop: at 880px down the 900px viewport it was still waiting; at 700px it had triggered. At phone width it had already triggered near 880px. Phone layouts stack content, use shorter lines and retain readable spacing. Sampled public heading CSS and browser measurements were used for analysis only; source files remain the user's supplied snapshot.

## Adaptation for Hearing & Tinnitus Solutions

* Keep the clinic's Manrope typography, exact hero sizes, colors, layout and images.
* Use the continuous line mask on hero, editorial section titles and interior page titles. Omit the cursor, rotating clinical headlines, hand drawn underline and decorative dot.
* Preserve complete real heading text in the accessibility tree; no character duplication, timed text replacement, or live announcements.
* Titles reveal once over 700ms per line, with 120ms line offsets on desktop and 80ms on phone. Phone entry begins earlier. Typical two and three line titles complete within the 1200ms scene rhythm.
* Gentle opacity changes follow native view timelines at viewport entry and exit. Reading areas remain fully opaque; exit occurs only near the header edge. These effects follow scroll distance, not a time duration. Phone entry and exit ranges are shorter than desktop.
* Native scrolling is retained. No scroll interception, forced pauses or smoothing library.
* Patient contact details, the map and service disclosure controls remain fully opaque. Dr. Melton's portrait and bio retain their existing sticky geometry, arch morph and opacity. No additional picture transforms. The background slideshow keeps looping with its visible pause control.
* Reduced motion and print show complete static content. Unsupported view timelines show static content. Heading text is visible without JavaScript. Keyboard focus restores full opacity to a content block.

## Skill review

Used installed Liquid Glass, Animate, Playwright and Modern Web Guidance skills. Researched the official GreenSock skills at https://github.com/greensock/gsap-skills and other SplitText / ScrollTrigger skill offerings. No installation was necessary: these masked title reveals and decorative scroll fades need no GSAP, SplitText or Lenis dependency. Existing CSS and browser APIs cover the behavior without adding another animation system.

## Review targets

Check slow scrolling, fast swipes, reverse scrolling, 320px phone width, Spanish wrapping, keyboard access, reduced motion, print, JavaScript disabled, and the sticky portrait release. Existing contact, booking and questionnaire behavior must remain intact.

## Validation

Production export and TypeScript passed. Six questionnaire scoring/feedback tests passed. Browser checks covered 320, 390, 1168 and 1440px widths: heading timing/state, entry fade, fully opaque reading zone, no repeated title typing, unchanged hero font sizes, static portrait surfaces, uninterrupted offscreen slideshow, Spanish wrapping, reduced motion, print and JavaScript disabled. WebKit phone checks passed for masked headings, native timeline support and Spanish switching. Full page accessibility checks use a static reduced motion state to avoid sampling temporary fading colors. Existing bilingual navigation, contact dialog, social links, share metadata and assessment state were also rechecked.
