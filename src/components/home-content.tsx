'use client';

import { publicAsset } from '@/lib/public-asset';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Plus, Phone, MapPin, Mail } from 'lucide-react';
import { clinic, faqs } from '@/lib/clinic';
import { MapPanel, Reveal } from './motion-parts';

const tabs = [
  { id: 'hearing', title: 'Hearing', heading: 'Hear the moments\nthat make you, you.', text: 'A familiar voice. Your favorite song. The conversation around the table. We help you find your way back to the sounds that matter.', list: ['Hearing exams & comprehensive diagnostics', 'Hearing aids, fittings & ongoing support', 'Ear cleaning & custom hearing protection'], image: publicAsset('/images/expertise-hearing.webp'), alt: 'Illustration of Dr. Robert Melton explaining hearing-test results to an older adult' },
  { id: 'tinnitus', title: 'Tinnitus', heading: 'Find a little\nmore quiet.', text: 'When ringing or buzzing gets in the way, you deserve to be heard. Explore tinnitus care built around your hearing, your daily life, and your goals.', list: ['Specialized tinnitus evaluation', 'Individual management options', 'Lenire® and Oto provider'], image: publicAsset('/images/expertise-tinnitus.webp'), alt: 'Illustrative woman listening to a tabletop sound machine in a quiet room' },
  { id: 'cognition', title: 'Cognition', heading: 'Stay part of\nthe conversation.', text: 'Good hearing supports everyday communication. Discover the connection between listening, attention, and staying engaged with your world.', list: ['Understand listening effort', 'Explore hearing and cognitive health research', 'Build a plan for better communication'], image: publicAsset('/images/expertise-cognition.webp'), alt: 'Illustrative older adult sharing a conversation and a tabletop puzzle with his daughter' },
];

export function ServiceExplorer() {
  const [selected, setSelected] = useState(0);
  const tab = tabs[selected];
  function onKey(e: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? 2 : (index + (e.key === 'ArrowRight' ? 1 : 2)) % 3;
    setSelected(next); document.getElementById(`service-tab-${tabs[next].id}`)?.focus();
  }
  return <section className="services-section section-space" id="our-care"><div className="container">
    <Reveal className="section-intro"><h2>Expertise, with<br />you at the center.</h2><p>Thoughtful care for your hearing.<br />A clearer connection to everything else.</p></Reveal>
    <div role="tablist" aria-label="Explore our care" className="service-tabs">{tabs.map((t, i) => <button key={t.id} id={`service-tab-${t.id}`} role="tab" aria-selected={selected === i} aria-controls="service-panel" tabIndex={selected === i ? 0 : -1} onKeyDown={e => onKey(e, i)} onClick={() => setSelected(i)}><span className="tab-label">{t.title}</span>{selected === i && <motion.span className="tab-underline" layoutId="service-underline" transition={{ type: 'spring', duration: .5, bounce: .2 }} />}</button>)}</div>
    <div className="service-panel" id="service-panel" role="tabpanel" tabIndex={0} aria-labelledby={`service-tab-${tab.id}`}><AnimatePresence mode="wait" initial={false}><motion.div key={tab.id} className="service-panel-inner" initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: .25 }}><div className="service-panel-copy"><h3>{tab.heading}</h3><p>{tab.text}</p><ul>{tab.list.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul><Link href={`/${tab.id}/`} className="text-link">Explore {tab.title.toLowerCase()} care <ArrowUpRight size={17} /></Link></div><div className="service-image"><img src={tab.image} srcSet={`${publicAsset(`/images/expertise-${tab.id}-720.webp`)} 720w, ${tab.image} 1440w`} sizes="(max-width:453px) 405px, (max-width:600px) calc(100vw - 48px), (max-width:1400px) 48vw, 660px" alt={tab.alt} width="1440" height="960" loading="lazy" decoding="async" /><span>Care made personal.</span></div></motion.div></AnimatePresence></div>
  </div></section>;
}

export function Faqs({ all = false }: { all?: boolean }) {
  return <div className="faq-list">{faqs.slice(0, all ? 5 : 4).map(([q, a]) => <details name="clinic-faq" key={q}><summary>{q}<Plus size={19} /></summary><div><p>{a}</p></div></details>)}</div>;
}

export function VisitSection() {
  return <section className="visit-section section-space" id="visit"><div className="container"><Reveal className="section-intro"><h2>Good care.<br />Close to home.</h2><p>Serving our neighbors in southwest Colorado<br />and northwest New Mexico.</p></Reveal>
    <div className="visit-grid"><div className="visit-details"><h3>Come see us in Pagosa.</h3><p className="address"><MapPin size={18} /><span>{clinic.address}<br />{clinic.city}</span></p><a className="text-link" href={clinic.directions} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={17} /></a><div className="hours"><div><span>Monday–Thursday</span><span>8:30–12 & 1–4:30</span></div><div><span>Friday</span><span>8:30–12</span></div><small>Mountain Time · Closed Saturday & Sunday</small></div><a className="visit-phone" href={clinic.phoneHref}><Phone size={18} />{clinic.phone}<ArrowUpRight size={19} /></a><span className="small-text">Call or text. We’re happy to help.</span><a className="visit-email" href={`mailto:${clinic.email}`}><Mail size={18} /><span>{clinic.email}</span><ArrowUpRight size={17} /></a></div><MapPanel /></div>
    <div className="home-faq"><div><h3>A little clarity<br />before your visit.</h3><Link href="/resources/" className="text-link">All patient resources <ArrowRight size={17} /></Link></div><Faqs /></div>
  </div></section>;
}

export function ClosingCTA() { return <section className="closing-cta"><div className="container"><h2>Your next chapter<br />sounds better.</h2><div><p>Let’s start with a conversation.</p><Link href="/book/" className="button button-light">Book your visit <ArrowUpRight size={18} /></Link></div></div></section>; }
