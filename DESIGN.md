---
name: Hearing & Tinnitus Solutions
description: Calm clinical clarity with a cinematic patient journey.
colors:
  ink: "#172e3b"
  teal: "#315f5c"
  muted: "#586a70"
  line: "#dce3e3"
  mist: "#f0f4f3"
  white: "#fff"
  teal-hover: "#234d4b"
  outline: "#b9c9c6"
  focus: "#477c76"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2.8rem, 5.3vw, 5.5rem)"
    fontWeight: 450
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2.2rem, 3.6vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(1.6rem, 2.5vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  copy:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
  annotation:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.7
rounded:
  selection: "2px"
  control: "3px"
  assessment: "4px"
  menu: "5px"
spacing:
  tight: "8px"
  compact: "16px"
  inset: "24px"
  large: "40px"
  section: "116px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 23px"
  button-primary-hover:
    backgroundColor: "{colors.teal-hover}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 23px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 23px"
  film-control:
    backgroundColor: "rgb(255 255 255 / .12)"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "8px 13px"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  service-tab:
    textColor: "{colors.muted}"
    padding: "10px 0 19px"
  assessment-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.assessment}"
    padding: "45px"
  rating-option:
    textColor: "{colors.ink}"
    rounded: "{rounded.selection}"
  rating-option-selected:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
---

# Design System: Hearing & Tinnitus Solutions

## Overview

**Creative North Star: "Cinematic patient journey"**

A calm, cinematic patient journey expressed through crisp white surfaces, deep blue ink, desaturated teal, and generous space. Manrope supplies both the large conversational headlines and precise functional labels. Genuine provider portraits and the original clinic logo carry the practice identity.

The build is predominantly flat and clinical. Translucency is selective: the compact navigation and small media or portrait overlays use blur and bright edges. Underlines identify navigation and service selection; corners stay nearly square. Motion connects state changes while reduced-motion preferences limit movement.

**Key Characteristics:**
- White clinical surfaces with teal actions and blue ink.
- Generous split grids, precise dividers, and restrained rectangular controls.
- Selective translucent overlays and a contracting navigation header.
- Real provider imagery; illustrative care scenes remain identified.

## Colors

The palette combines cool clinical whites with desaturated green-blue actions and deep blue text. Frontmatter values are normative; descriptive roles below refer to those tokens.

### Primary
- **Desaturated Teal** (`teal`): appointment actions, selected answers, service underline, and icon accents. `teal-hover` deepens primary actions on hover.

### Neutral
- **Deep Blue Ink** (`ink`): headings, normal text, and the footer's dark field.
- **Muted Blue Gray** (`muted`): supporting paragraphs, secondary labels, and explanatory copy.
- **Clinical White** (`white`): primary canvas, cards, navigation, and reversed action text.
- **Green Mist** (`mist`): quiet panels, portrait backdrop, and outline-button hover.
- **Cool Hairline** (`line`): section boundaries, FAQ rows, rating controls, and panel outlines.
- **Soft Outline** (`outline`): secondary action borders.
- **Focus Teal** (`focus`): the global keyboard outline.

**The Underline Navigation Rule.** Navigation and service selection use line indicators rather than pill backgrounds.

## Typography

**Display Font:** Manrope Variable, sans-serif fallback.  
**Body Font:** Manrope Variable, sans-serif fallback.

**Character:** One variable sans family unifies the film headline, clinical explanations, and functional controls. Balanced, closely tracked headings contrast with relaxed body leading. There is no separate display or mono face.

### Hierarchy
- **Display:** Hero headline uses the display token; mobile overrides use a fluid smaller clamp. Interior page headings use their own responsive sizes.
- **Headline / Title:** Global second- and third-level headings use their respective tokens. Individual provider and service compositions adjust those sizes in source.
- **Body:** The body token establishes the base. Paragraphs are limited to (68ch).
- **Copy:** Reading paragraphs use (16px) with (1.8) leading. Supporting labels use (13–15px). No interface text is below (13px), including at mobile breakpoints.
- **Label:** Actions use semibold labels, navigation uses (14px), and FAQ summaries use (15px). Annotations use the (13px) minimum token.

## Layout

The content container is centered, capped at (1280px), with desktop width `calc(100% - 128px)`. Its horizontal allowance becomes (90px) at the (1200px) breakpoint and (48px) at (800px). The header has its own (1440px) cap and desktop width `calc(100% - 80px)`.

Sections have generous vertical rhythm: the section spacing token reduces to (90px) at (1000px), then (70px) at (600px). Split grids pair images and text, typically with gaps of (5–9%). Supporting content uses divider rows rather than an interchangeable card grid. Most paired content becomes one column at (600px). The desktop navigation switches to a stacked mobile menu at (1100px) to preserve readable labels and spacing.

The assessment is capped at (790px), with desktop panel padding from its component token; mobile padding becomes (28px 22px), with (16px) outer margins. Its eleven numeric responses wrap into six columns on mobile. The booking calendar remains a seven-column grid.

## Elevation & Depth

Depth comes mainly from tonal panels, photography, and thin boundaries. Small overlays use translucent white, blur, and bright edges. The compact header uses white at (86%) opacity, blur (20px), saturation (1.35), and an inset highlight. Portrait and media overlays use blur (16px). The build implements blur and highlights; it does not implement optical displacement or chromatic refraction.

### Shadow Vocabulary
- **Menu:** `0 16px 48px rgb(18 44 52 / .13)` supports the dropdown.
- **Action hover:** `0 5px 15px rgb(20 49 50 / .12)` supports the hovered button.
- **Portrait caption:** `0 6px 24px rgb(29 47 50 / .04)` gently separates text from a portrait.
- **Compact-header edge:** `inset 0 1px 0 rgb(255 255 255 / .9)` defines its upper highlight.

**The Selective Glass Rule.** Keep the main reading surfaces opaque; use the observed translucent treatments on navigation and small image or media overlays.

## Shapes

Controls and photographic containers use the small control radius. Numeric selections use the selection radius; the assessment and dropdown use their separate modest radii. Boundaries are usually single-pixel hairlines. The portrait backdrop's arched top is a local image form, not general control shapes. Navigation is unboxed with line indicators.

## Components

### Buttons

Compact rectangular actions with clear contrast. Primary, light, and outline variants share the base geometry, a minimum height of (52px), semibold labels, and icon gap of (28px). The header action is smaller. Hover deepens the fill, adds the action shadow, and shifts the arrow (3px, -2px). The outline variant uses the soft-outline border and mist hover. Global keyboard focus is a (2px) outline with (6px) offset. Disabled assessment actions have opacity (.4). Pressable actions compress to (.975) over (160ms), then settle with a small rebound over (300ms); spatial feedback is removed for reduced motion. Hover motion is gated to fine pointers.

### Cards / Containers

Reading surfaces remain restrained: the assessment and calendar are white, single-pixel outlined containers with modest corner rounding. The assessment panel is the documented representative; media captions are separate translucent overlays. Do not infer a universal hover-lift card from the action shadow.

### Inputs / Fields

The implemented assessment uses native radio inputs inside numbered labels, not text-entry fields. Selected labels receive teal fill, white text, and a teal border. Labels with focused inputs receive a (2px) teal outline at (3px) offset. Their minimum height is (46px), rising to (48px) on mobile. Contact fields use 16px text, 48px minimum input height, visible labels, native required/email validation, and a high-contrast boundary. Invalid styling appears after interaction. The message area can be resized vertically.

### Navigation

The desktop header starts with a (104px) minimum height and contracts to (78px); the logo width contracts from (230px) to (197px). This explicitly requested header treatment uses bounded width/min-height transitions of (.6s) with the shared easing. Links use a thin underline for hover and current page. The care dropdown is an outlined, softly elevated menu; it closes on outside interaction, blur, or Escape. Mobile links are stacked divider rows and the appointment action stays visible.

### Service Explorer

Text tabs sit over a hairline with a shared (3px) teal selection underline. Keyboard arrows, Home, and End move selection and focus. The underline uses a shared layout identity with a spring of duration (.5s) and bounce (.2); panel changes use a brief opacity/vertical transition (.25s). Hover scales tab labels to (1.06), and the home care shortcuts scale their headings to (1.055). The default spring is stiffness (140), damping (24). This is the recurring state-morphing interaction, not a license for unrelated ambient motion.

### Still-image Slideshow and Reveals

The background slideshow crossfades between fixed photographs with no zoom or pan. An explicit play/pause control remains; the hero’s provenance badge was removed at the user’s request, with provenance kept in the privacy notice. Reduced motion and data-saving preferences suppress autoplay; scrolling away no longer pauses playback, while the visible pause control remains available. Reveals use opacity only (.9 to 1), duration (.7s), and the shared ease; images have no scroll drift.

### Service Disclosures

Five named primary services use native details/summary semantics. The first three cards sit in a three-column row and the remaining two in a two-column row; the layout reduces to two columns at (1100px) and one at (600px). Summaries pair a plus icon with a (21–23px) title, (13px) subtitle, and a decorative teal line symbol on the right. Five authored SVGs share a 40-unit viewBox, thin rounded strokes, and 30–40px rendered sizes. Descriptions use (16px) body copy. Independent cards open or close over (700ms for a full reveal, scaled for interruption) with measured height, preserve interruption, and toggle instantly for reduced motion or keyboard activation.

### Liquid Sound Sculpture

A silent Canvas 2D graphic draws (33) reflective vertical capsules. Slow harmonics vary their silhouette; the pointer affects nearby lines through a spring with stiffness (100) and damping (10). The graphic pauses outside the viewport or a hidden tab and includes a visible pause control. Reduced motion defaults to a static frame; users can explicitly play it. The reflective colors are a local decorative material, not a new action palette.

### Location

Google Maps is embedded automatically, with an always-visible directions link and the clinic email next to the telephone. The privacy notice discloses the automatic third-party connection. The old schematic placeholder is no longer used.

### FAQ Rows

Native disclosure rows use dividers, semibold question text, and a plus SVG that rotates when open. The answer sits below in muted text; the shared disclosure name permits one open item at a time.

## Do's and Don'ts

### Do:
- **Do** use the existing white, ink, teal, muted, line, and mist roles.
- **Do** preserve underline navigation and visible keyboard focus.
- **Do** keep original provider portraits distinct from illustrative care scenes, with imagery provenance in the privacy notice.
- **Do** honor reduced-motion preferences and provide slideshow and ambient-animation pause controls.

### Don't:
- **Don't** introduce pill navigation.
- **Don't** turn the bounded header contraction into a general convention for animating layout dimensions.
- **Don't** present illustrative scenes as real clinic staff or patient footage.

### Current Framing and Contact Dialog

The hero runs the full viewport width. The home shortcut divider sits 12–28px from the viewport edges; the provider section starts 32–60px below it. Interior breadcrumbs begin 20–28px below the header. Footer links use compact 30px rows. The contact intro has no border directly beneath its call button.

The contact dialog uses native `showModal()`, a labeled heading, automatic focus containment/return, Escape dismissal, and a named close button. Its selective translucent surface uses 24px blur, a specular white edge, and a 260ms opacity/scale entrance, disabled for reduced motion. It is capped at 560px and constrained to the dynamic viewport with internal scrolling. Name, email address, and message prepare a draft in the visitor’s email app. Copy feedback is announced; no “sent” state, server submission, or persistent form storage exists.

The care explorer, primary-service details, and location section use tighter top padding (84px desktop, 64px tablet, 48px phone), while retaining their existing lower spacing. Contact-specific location spacing remains 64px/44px. The standalone home cognition photo section is removed; cognition remains available through navigation and the care explorer. Resource-item symbols sit to the left within their heading’s flex row. Research-note action links keep their single bottom border without a second text underline.

The home care explorer uses three dedicated editorial illustrations: Dr. Melton discussing hearing-test results, a home sound-therapy scene for tinnitus, and a family conversation over a tabletop puzzle for cognition. These are separate from the preserved hero imagery. Each has 1440×960 and 720×480 WebP variants, native lazy loading, and descriptive alt text. The generated Dr. Melton scene uses his existing portrait as the identity reference; provenance remains in the privacy notice.

Service disclosures use fractional measured heights with a frozen current frame during interruption, 700ms scaled to remaining distance with a 160ms minimum, and a coordinated description fade of up to 700ms. They share the existing ease token. Keyboard activation and reduced motion toggle instantly; closing content is inert during collapse.

The private tinnitus check-in gives descriptive feedback after each selected rating, without moving focus or advancing automatically. Results combine the original average-based score with five labeled neutral bars, highest-rated areas (including ties), educational next steps and an NIH source link. There are no diagnostic severity bands. Answers remain in temporary browser memory; progress counts answered questions. Print preserves the graphical summary.

Service disclosures include scannable 15px care-option lists under the five existing families, preserving the measured-height open/close animation. The footer replaces the written provider-qualification block with the user-supplied American Board of Audiology logo on a compact white surface, linked to ABA certificate information with an accessible label identifying Dr. Melton’s tinnitus certificate. This does not claim general board certification. The Ida tinnitus-course badge is omitted because the user has not confirmed completion. Website authorship is separately credited to diegocaputo.com, with imagery provenance linked from the footer.

On iPhone widths (600px and below), the duplicate care shortcuts below the hero are hidden; the care explorer remains available after the provider story. The full portrait and name are visible on entry, without negative bio overlap. The portrait uses bounded native sticky positioning with its arch flattening during approach. As the final bio credentials enter the viewport, a direct transform releases the portrait and the bio clipping follows its actual face position. There is no spacer tail or bottom section padding between the story and care explorer. Reduced motion retains the normal stacked portrait and bio. Service tabs remain bounded to their own section.

The compact ABA badge shares the footer’s desktop row with brand, navigation and contacts. On phones it sits beside the contact block; email may break at the @ sign. Visible prose uses spaces or rewritten phrases instead of hyphens and dash punctuation. Same page links return to the top; newly clicked internal routes start at the top after client navigation. Hash links retain their anchor behavior, and browser history restoration is preserved. Navigation initiated with a keyboard or reduced motion returns instantly, while pointer activation of the current page uses native smooth scrolling. A short settling correction prevents header expansion from leaving a small scroll offset; any new pointer, touch, wheel or keyboard interaction cancels that correction.

The experimental moving name card has been reverted. ProviderStory matches the preferred portrait iteration: the full portrait and fixed name card appear on entry, the face pins while the bio passes over the lower image, and the portrait releases as credentials enter view. The homepage visit FAQ remains hidden only at widths of 600px and below.

Motion timing is defined once in src/lib/motion.ts and supplies CSS tokens from RootLayout: press 160ms, reveal 700ms, scene 1200ms. Pointer press and return feedback use the press token. Editorial reveals use opacity from .9 to 1, once on entry, with an explicit tween and the existing ease. Page headings, care introductions, service cards, location content, and closing CTA participate; the mobile portrait and bio stay fully opaque. The hero content enters gently from .86 opacity over 1200ms. Care copy uses the reveal timing; persistent care images crossfade over 1200ms without positional motion, retain the last loaded scene until the next image is ready, and expose only the current image to assistive technology. Keyboard care selection and reduced motion change immediately. Continuous ambient motion and scroll-position-bound portrait morphing retain their existing input-driven behavior.

At phone widths (600px and below), the tinnitus reflection uses a native range input with integer steps from 0 through 10, eleven visible ticks and number labels, a 44px interaction area and a 28px thumb. The value is not recorded until deliberate pointer or keyboard interaction, including choosing zero at the starting position. A visible value and aria-valuetext identify the selection; feedback and progress update from the same answer state used by desktop radio options. Desktop and phone controls switch with CSS without losing answers. WebKit and Firefox pseudo-elements are styled separately, with React providing the fill percentage to avoid typed attr() dependencies in Safari. Reduced motion removes thumb deformation.

The phone homepage bio adds one paragraph about advanced audiology, personalized care, clinic/telecare/home visits, tinnitus care and professional cleaning, with an inline link to the existing complimentary screening provider. The heading and subtitle are unchanged, and the paragraph is hidden on desktop. The supplied FDA wording and hashtags are not added.

The hero poster has a concise visual description for assistive technology. Reflection results place the booking and print/save controls directly after the chart, with a brief handoff explanation; buttons wrap at phone widths and remain hidden in print. The clinical questionnaire identity, browser-only answer handling and preferred-day booking semantics remain explicit.

The footer and contact page include locally rendered Facebook and Instagram icon links with accessible names, 44px targets and the shared 160ms press rhythm. A Google review link displays the owner-provided 5.0/237 snapshot, dated Nov 2026, and opens the supplied exact Google share URL. It does not claim live synchronization or embed a review widget. The footer utility row keeps social controls and the rating compact at narrow widths.

English remains the initial language. First-party Spanish translations cover all patient pages, privacy and accessibility text, forms, services, questionnaire questions, per-answer feedback, result explanations, calendar labels and accessible names. T renders text without adding DOM wrappers, preserving the established CSS layout; LocalizedElement translates human-facing attributes, and LocalizedLink retains Next navigation. Language controls appear in navigation, the provider introduction, contact page and footer. Language choice stays in the current app session, and changing it does not reset answers or form inputs. Document language and page title update with the selection. Locale changes do not call a translation service or save patient information. Clinical Spanish remains part of the practice's content review before launch.

The English hero type scale is pinned to the earlier values: desktop clamp(2.8rem, 5.3vw, 5.5rem), 60px at tablet widths, and clamp(2.7rem, 10vw, 3.8rem) on phones. Spanish adjusts only its own narrow-screen composition to accommodate longer copy. The hero slideshow no longer has a viewport observer that pauses it on scroll; manual pause, reduced motion and data-saving preferences remain available.

The social preview uses a 1200×630 PNG composed from the existing Robert Melton cutout on a light background, without altering his identity. The face is positioned inside a central crop-safe area. Open Graph and Twitter metadata use the clinic name and the existing personal hearing/tinnitus care description. The image uses a new versioned path for share previews, and scripts/render-share-preview.cjs preserves the rendering source.


## Glide inspired editorial motion, November 2026

The shipped title treatment uses stationary line masks, once per heading, with the existing 700ms reveal token. Desktop line offsets are 120ms; phones use 80ms and an earlier viewport trigger. Full heading text remains available to assistive technology and without JavaScript. Hero typography and layout are unchanged. Content entry and late exit use native CSS view timelines, with shorter phone ranges and a fully opaque reading zone. These scroll distance driven fades supersede the earlier once only .9 to 1 Reveal behavior. Unsupported browsers render static content, with no polyfill. Focus within, reduced motion, and print preserve fully readable content. The portrait story, contact/map grid and service disclosure controls are excluded from the generic fades. No extra library was installed. Original HTML and the responsive motion analysis are retained in design-references/.

## Selective motion and hero loading refinement

The hero headline and supporting copy now render immediately, with no mask or entrance animation. The same consultation image is delivered as a responsive WebP (32KB at 720px, 102KB at full width, previously 380KB JPEG). The underlying photo stays visible while video loads; the video layer becomes visible after its first presented frame, with a 160ms blend and a readyState fallback for older browsers. Native autoplay and preload allow playback to begin before hydration. The visible pause control, looping behavior, reduced motion and data saving handling remain.

Home title masks are limited to “Good care starts with being heard” and the ringing feature. Their deliberate variant uses 900ms per line, followed in the provider section by a 700ms, 8px upward opacity reveal after the two line title completes. Focus immediately exposes the bio controls; reduced motion and print show static text. Intro/closing wrappers stay still, as do expertise, primary services, location and closing headlines. Care page titles, resources, privacy and accessibility are static. Our people and booking keep their existing primary title masks; contact uses a mask only on its first title. Portrait sticky geometry and release are unchanged.

### Phrase pauses

The ringing feature, contact title and our people title now reserve the final phrase until the preceding phrase has fully revealed, followed by a 160ms pause. The ringing feature keeps its first two line offsets (120ms desktop, 80ms phone) and 900ms duration; its final line starts at 1180ms desktop / 1140ms phone. Contact and our people keep 700ms reveals, with the second phrase starting at 860ms. Interior titles are translated as complete strings before splitting their explicit line breaks, preserving the existing Spanish wording and heading semantics. No timer mutates the text. Reduced motion shows all phrases immediately. Production export and phone/desktop checks passed for exact timing, English/Spanish line content and static reduced motion.

### Coordinated content and navigation memory

All five animated-heading scopes now sequence their supporting elements after the actual final heading phrase, including pause timing: home provider bio, tinnitus copy/sculpture, our people introduction/team, contact description/actions/social/language controls, and booking description/planner. Supporting content uses the 700ms reveal token; only the provider bio retains its 8px upward movement. Layout space is preserved. Keyboard focus reveals supporting controls immediately. Reduced motion, print and a noscript fallback show complete static content. Server markup holds supporting elements pending so they do not flash before hydration.

Heading playback is remembered by route and stable heading key in an in-memory Set for the lifetime of the document. Revisiting a page shows its played heading and supporting elements immediately, without a remount replay or fade reset. Refresh clears this memory. A single document visibility listener resets it after 30 minutes away from the tab; shorter absences retain it. Language changes do not create new playback keys. A return to an already scrolled reading area keeps that content visible. No storage, cookies, analytics, or patient data are involved.

Validation covered all five scopes at 390px and 1440px, actual header-link navigation and return, refresh, simulated 2-minute/31-minute tab absences, focus override, reduced motion, print and JavaScript disabled. Accessibility checks passed in the static reduced-motion state. WebKit phone checks also passed for supporting fades, Spanish switching and return navigation. Production export and TypeScript passed.
