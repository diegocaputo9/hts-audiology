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
    fontSize: "14px"
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
- **Copy:** Most supporting prose uses the smaller copy role; provider paragraphs increase leading to (1.9).
- **Label:** Semibold navigation, actions, and FAQ summaries. Secondary interface annotations are smaller in the current build; they do not establish a reusable small-text scale.

## Layout

The content container is centered, capped at (1280px), with desktop width `calc(100% - 128px)`. Its horizontal allowance becomes (90px) at the (1200px) breakpoint and (48px) at (800px). The header has its own (1440px) cap and desktop width `calc(100% - 80px)`.

Sections have generous vertical rhythm: the section spacing token reduces to (90px) at (1000px), then (70px) at (600px). Split grids pair images and text, typically with gaps of (5–9%). Supporting content uses divider rows rather than an interchangeable card grid. Most paired content becomes one column at (600px). The desktop navigation switches to a stacked mobile menu at (800px).

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

Controls and photographic containers use the small control radius. Numeric selections use the selection radius; the assessment and dropdown use their separate modest radii. Boundaries are usually single-pixel hairlines. The portrait backdrop's arched top and the round map pin are local image/location forms, not general control shapes. Navigation is unboxed with line indicators.

## Components

### Buttons

Compact rectangular actions with clear contrast. Primary, light, and outline variants share the base geometry, a minimum height of (52px), semibold labels, and icon gap of (28px). The header action is smaller. Hover deepens the fill, adds the action shadow, and shifts the arrow (3px, -2px). The outline variant uses the soft-outline border and mist hover. Global keyboard focus is a (2px) outline with (6px) offset. Disabled assessment actions have opacity (.4).

### Cards / Containers

Reading surfaces remain restrained: the assessment and calendar are white, single-pixel outlined containers with modest corner rounding. The assessment panel is the documented representative; media captions are separate translucent overlays. Do not infer a universal hover-lift card from the action shadow.

### Inputs / Fields

The implemented assessment uses native radio inputs inside numbered labels, not text-entry fields. Selected labels receive teal fill, white text, and a teal border. Labels with focused inputs receive a (2px) teal outline at (3px) offset. Their minimum height is (46px), rising to (48px) on mobile. No text-field or validation-error visual system is present to document.

### Navigation

The desktop header starts with a (104px) minimum height and contracts to (78px); the logo width contracts from (230px) to (197px). This explicitly requested header treatment uses bounded width/min-height transitions of (.6s) with the shared easing. Links use a thin underline for hover and current page. The care dropdown is an outlined, softly elevated menu; it closes on outside interaction, blur, or Escape. Mobile links are stacked divider rows and the appointment action stays visible.

### Service Explorer

Text tabs sit over a hairline with a shared (2px) teal selection underline. Keyboard arrows, Home, and End move selection and focus. The underline uses a shared layout identity; panel changes use a brief opacity/vertical transition (.25s). The default spring is stiffness (140), damping (24). This is the recurring state-morphing interaction, not a license for unrelated ambient motion.

### Film and Reveals

The background film has an explicit play/pause control and visible illustrative provenance. Reduced motion and data-saving preferences suppress autoplay; leaving the viewport pauses playback. Reveals run once with (18px) upward travel, opacity (.55 to 1), and duration (.65s), using `cubic-bezier(.16,1,.3,1)`. The connection photograph has a progressive, reduced-motion-gated scroll drift; the listening bars have one five-second breathing cycle. Reduced-motion CSS removes selected transitions and smooth scrolling; MotionConfig honors the user preference.

### FAQ Rows

Native disclosure rows use dividers, semibold question text, and a plus SVG that rotates when open. The answer sits below in muted text; the shared disclosure name permits one open item at a time.

## Do's and Don'ts

### Do:
- **Do** use the existing white, ink, teal, muted, line, and mist roles.
- **Do** preserve underline navigation and visible keyboard focus.
- **Do** keep original provider portraits distinct from identified illustrative care scenes.
- **Do** honor reduced-motion preferences and provide the film pause control.

### Don't:
- **Don't** introduce pill navigation.
- **Don't** turn the bounded header contraction into a general convention for animating layout dimensions.
- **Don't** present illustrative scenes as real clinic staff or patient footage.
