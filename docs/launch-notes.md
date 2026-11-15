# Launch and integration notes

## Ready for review

The website is a complete static marketing build. Medical information and provider details were grounded in the practice's current site. The generated clinic film is illustrative. No database, patient portal, medical uploads, submitted contact forms, or saved questionnaire data are implemented.

## Practice decisions needed before replacing the current live website

- Dr. Melton should review all clinical copy, biographies, treatment names, hours, generated scene use, and privacy text.
- Supply the practice-approved Notice of Privacy Practices and current intake forms, with secure return instructions. The website privacy page is distinct from this clinical notice.
- Supply a scheduling provider and access/configuration before adding live availability. The current site’s Book Appointment link points to an internal `#bookappt` anchor, so no real scheduling integration could be carried over. The included day planner never claims to reserve a time.
- The full Tinnitus Functional Index is copyrighted by OHSU. Obtain the necessary permission and clinician-approved form/results specification before implementing it. The shipped five-question reflection is original and intentionally does not use TFI branding, thresholds, or claims of validation.
- Confirm whether Dr. Hurst currently sees patients before adding availability or appointment booking for her. Her profile describes the founding history already published by the practice.
- Replace the stationary still-image crossfade edit with approved filmed or AI-generated motion footage if the complete 4K patient journey described in the brief is required. Higgsfield was not connected for this build.
- Confirm the final domain and switch off review indexing restrictions only at public launch.

## Patient data and hosting

GitHub stores the website source and assets. GitHub Pages currently serves the public preview. Neither should be treated as a patient-record system merely because access is private or HTTPS is enabled. The current static design needs no Supabase project or scheduled keepalive.

Before any future service creates, receives, stores, or transmits electronic protected health information on behalf of the practice, the practice needs to evaluate the architecture, applicable HIPAA duties, vendor agreements/BAAs, access controls, logging, retention, incident response, and relevant service eligibility. This build does not claim HIPAA certification or determine the practice's legal compliance.

[HHS guidance on HIPAA and cloud computing](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html) explains the role of business associate agreements and risk analysis. No clinical-data service was provisioned.

## Sources

- [Practice homepage](https://htsaudiology.com/): name, contact, location, usual hours, screening link.
- [Practice about page](https://htsaudiology.com/about/): provider histories and credentials.
- [Practice services](https://htsaudiology.com/services/): hearing services and tinnitus options.
- [National Institute on Aging](https://www.nia.nih.gov/news/hearing-aids-slow-cognitive-decline-people-high-risk): balanced interpretation of ACHIEVE.
- [ACHIEVE trial](https://pubmed.ncbi.nlm.nih.gov/37478886/): hearing intervention and cognitive outcomes.
- [VA questionnaire resources](https://www.ncrar.research.va.gov/ClinicianResources/TinnitusQuestionnaires.asp): TFI permission pathway.
- [NIDCD sudden deafness information](https://www.nidcd.nih.gov/health/sudden-deafness): urgent evaluation of sudden hearing loss.

## Security configuration

`public/_headers` declares a CSP, no-referrer policy, frame protection, MIME-sniffing prevention, browser feature restrictions, and HSTS for Cloudflare Pages. The CSP permits inline scripts/styles because Next static exports include inline hydration payloads and Motion uses style attributes. It limits external frames to Google Maps. The actual deployed headers must be verified on the chosen host; source declarations alone do not establish production enforcement.

No advertising pixels, website analytics, third-party fonts, patient-data requests, or health information in URL parameters are introduced by the application. The automatically embedded Google map may use cookies or similar technologies under Google’s own policy. Browser extensions, host authentication, and visitors' own print/email tools are outside the application.

## Privacy refinement

The supplied existing policy was reviewed and adapted to this implementation. Customer-care SMS terms include opt-in, variable message frequency, possible rates, HELP, STOP, and the restriction on sharing SMS consent. Removed generic references to nonexistent accounts, orders, competitions, and GPS collection. The map now loads automatically at the user’s request, which is reflected in the notice. The public website retains noindex for review; the source repository remains private.
