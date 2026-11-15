import { publicAsset } from './public-asset';

export const clinic = {
  name: 'Hearing & Tinnitus Solutions',
  phone: '(970) 444 2314',
  phoneHref: 'tel:+19704442314',
  email: 'howdy@htsaudiology.com',
  address: '2343A Eagle Drive',
  city: 'Pagosa Springs, CO 81147',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=2343A+Eagle+Drive+Pagosa+Springs+CO+81147',
  screening: 'https://www.shoeboxonline.com/hursthearing/',
  socials: { facebook: 'https://www.facebook.com/htsaudiology/', instagram: 'https://www.instagram.com/hts_audiology/' },
  googleBusiness: 'https://share.google/HoPhoRzbIrXpUcseP',
  // Owner-supplied Google screenshot. This is a dated snapshot, not a live API feed.
  googleReviewSnapshot: { rating: '5.0', count: 237, asOf: 'Nov 2026' },
};

export const services = {
  hearing: {
    title: 'Hearing', headline: 'More of the sounds.\nMore of your life.',
    intro: 'From the first conversation to a finely tuned hearing aid, your care starts with understanding how you hear and what you want to hear better.',
    image: publicAsset('/images/consultation.jpg'), imageAlt: 'Illustrative hearing care consultation with an older patient',
    items: [
      ['A clearer picture of your hearing', 'A comprehensive evaluation looks beyond a basic hearing check. Tone and speech testing, along with measures of ear health, help Dr. Melton understand your hearing and explain the next steps.'],
      ['Hearing aids that fit your everyday', 'The right technology is personal. Hearing aids are selected and programmed around your hearing, comfort, listening environments, and goals, with ongoing adjustments and support.'],
      ['Care for the details', 'Professional ear cleaning, device cleanings and repairs, and custom hearing protection help you care for your ears and keep your hearing technology performing well.'],
    ],
  },
  tinnitus: {
    title: 'Tinnitus', headline: 'Less distraction.\nMore room for you.',
    intro: 'Ringing, buzzing, or hissing can take up more space than you want it to. Start with someone who understands tinnitus and can help you explore a way forward.',
    image: publicAsset('/images/reception.jpg'), imageAlt: 'Illustrative clinic team member helping arrange a consultation',
    items: [
      ['Start with understanding', 'A tinnitus consultation explores the sounds you notice, your hearing, and how daily life is affected. Your experience helps guide an individual management plan.'],
      ['Explore your options', 'Depending on your needs, care may include sound therapy, hearing technology, counseling approaches, Lenire® bimodal neuromodulation, or the Oto tinnitus program. Suitability is determined in consultation.'],
      ['Specialized care, close to home', 'Dr. Melton holds the Certificate Holder in Tinnitus Management credential and has training in Tinnitus Retraining Therapy. He is a certified provider of Lenire and Oto.'],
    ],
  },
  cognition: {
    title: 'Cognition', headline: 'Hearing is part of\nthe bigger picture.',
    intro: 'Listening connects sound, attention, and conversation. Understanding your hearing is a practical place to start when you want to stay engaged with the people and moments around you.',
    image: publicAsset('/images/connection.jpg'), imageAlt: 'Illustrative older couple enjoying a conversation at home',
    items: [
      ['When listening takes more effort', 'Conversations can feel more demanding when speech is difficult to hear. A hearing evaluation helps identify hearing difficulties and opens a conversation about support.'],
      ['What research can tell us', 'In the ACHIEVE trial, hearing intervention did not reduce cognitive decline across the full study population. A group with higher baseline risk experienced slower decline. These results do not show that hearing aids prevent dementia.'],
      ['A connected approach', 'Talk with Dr. Melton about hearing and communication goals. Concerns about memory or thinking should also be discussed with your primary care clinician; a hearing test does not diagnose cognitive conditions.'],
    ],
  },
} as const;

export const faqs = [
  ['What can I expect at my first appointment?', 'You will discuss your hearing concerns and listening goals, have your hearing and ear health evaluated as appropriate, and review the findings with your provider. Bring a list of medications, any previous hearing tests, and your current hearing aids if you use them.'],
  ['Do I need a referral?', 'Referral and coverage requirements depend on your insurance plan. Call the clinic before your visit so the team can help you understand what to check with your insurer.'],
  ['Can you help with ringing in my ears?', 'Yes. Dr. Melton offers tinnitus evaluation and management, including sound therapy, hearing technology, and other options when appropriate. An appointment is the best way to explore what may suit your needs.'],
  ['Do you offer home visits or telecare?', 'Clinic appointments, home visits, and telecare are available. Call the team to discuss your location, care needs, and which visit format is appropriate.'],
  ['Can I bring someone with me?', 'A partner, family member, or friend can share useful observations and help you remember the information discussed. You are welcome to ask the team about bringing someone to your appointment.'],
] as const;
