# Social links, bilingual copy and share preview

Updated November 15, 2026.

## Links and review snapshot

- Facebook: https://www.facebook.com/htsaudiology/ (removed the supplied locale parameter and trailing comma).
- Instagram: https://www.instagram.com/hts_audiology/
- Google profile: https://share.google/HoPhoRzbIrXpUcseP (exact link supplied by the owner).
- The owner’s Google screenshot shows 5.0 and 237 reviews. It is displayed as a Nov 2026 snapshot. Direct Google lookup was unavailable through the research tools, so this is not described as an independently verified live count.
- Links use inline icons, accessible names and new-tab safety attributes. No social or review SDK is loaded.
- A later rotating testimonials section may use 10 to 20 genuine approved reviews with author/source attribution, manual controls, a pause option and reduced-motion behavior. No quotations or reviewer identities have been fabricated for this update.

## Spanish

The owner confirmed Spanish is spoken and requested the entire site, including the check-in, in Spanish. English remains the default. Translation strings live in src/lib/i18n/es.json and are applied through src/components/language.tsx. Clinical and privacy translations should be included in Dr. Melton’s final content review.

The switch changes the current page in place and remains selected during client navigation. Refreshing starts with English. No language cookie or local storage entry is written. Questionnaire state remains in its existing component, with scoring unchanged and no answer transmission. Dates and calendar weekday labels adapt to Spanish. Form labels, custom validation, email draft labels and accessibility attributes are translated.

## Hero and preview

The latest published push had not changed the hero font sizes. The earlier English values are now explicit so future global typography edits do not accidentally change this composition. Portrait scroll behavior remains the preferred earlier implementation, with a ResizeObserver also covering bio height changes after translation.

The scroll-triggered video pause was removed at the owner's request. Reduced motion, data saving and explicit user pause remain respected; browser/OS autoplay policies still apply.

The Open Graph/Twitter image is public/images/hts-melton-share-v2.png, 1200×630. It is composed from the existing unaltered portrait. Regenerate from the repository root with node scripts/render-share-preview.cjs; optionally set PLAYWRIGHT_CHROMIUM_EXECUTABLE for the local browser. WhatsApp and other sharing clients may cache earlier previews; a new message or versioned share URL can be used to test the updated metadata, but already-sent messages are controlled by the client.
