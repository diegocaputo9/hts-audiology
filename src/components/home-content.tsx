'use client';
import { MotionHeading } from '@/components/motion-heading';
import { T, LocalizedElement } from '@/components/language';

import { publicAsset } from '@/lib/public-asset';

import { motion, useReducedMotion } from 'motion/react';
import { motionTiming, motionEase } from '@/lib/motion';
import { useEffect, useState } from 'react';
import { LocalizedLink as Link } from '@/components/language';
import { ArrowRight, ArrowUpRight, Check, Plus, Phone, MapPin, Mail } from 'lucide-react';
import { clinic, faqs } from '@/lib/clinic';
import { MapPanel, Reveal } from './motion-parts';

const tabs = [
  { id: 'hearing', title: 'Hearing', heading: 'Hear the moments\nthat make you, you.', text: 'A familiar voice. Your favorite song. The conversation around the table. We help you find your way back to the sounds that matter.', list: ['Hearing exams & comprehensive diagnostics', 'Hearing aids, fittings & ongoing support', 'Ear cleaning & custom hearing protection'], image: publicAsset('/images/expertise-hearing.webp'), alt: 'Illustration of Dr. Robert Melton explaining hearing test results to an older adult' },
  { id: 'tinnitus', title: 'Tinnitus', heading: 'Find a little\nmore quiet.', text: 'When ringing or buzzing gets in the way, you deserve to be heard. Explore tinnitus care built around your hearing, your daily life, and your goals.', list: ['Specialized tinnitus evaluation', 'Individual management options', 'Lenire® and Oto provider'], image: publicAsset('/images/expertise-tinnitus.webp'), alt: 'Illustrative woman listening to a tabletop sound machine in a quiet room' },
  { id: 'cognition', title: 'Cognition', heading: 'Stay part of\nthe conversation.', text: 'Good hearing supports everyday communication. Discover the connection between listening, attention, and staying engaged with your world.', list: ['Understand listening effort', 'Explore hearing and cognitive health research', 'Build a plan for better communication'], image: publicAsset('/images/expertise-cognition.webp'), alt: 'Illustrative older adult sharing a conversation and a tabletop puzzle with his daughter' },
];

export function ServiceExplorer() {
  const [selected, setSelected] = useState(0);
  const [instant, setInstant] = useState(false);
  const [readyScenes, setReadyScenes] = useState<Set<number>>(() => new Set([0]));
  const [scene, setScene] = useState(0);
  useEffect(() => { if (readyScenes.has(selected)) setScene(selected); }, [readyScenes, selected]);
  const reduce = useReducedMotion();
  const quiet = reduce || instant;
  const tab = tabs[selected];
  function onKey(e: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? 2 : (index + (e.key === 'ArrowRight' ? 1 : 2)) % 3;
    setInstant(true); setSelected(next); document.getElementById(`service-tab-${tabs[next].id}`)?.focus();
  }
  return <section className="services-section section-space" id="our-care"><div className="container">
    <Reveal className="section-intro"><MotionHeading><T>Expertise, with</T><br /><T>you at the center.</T></MotionHeading><p><T>Thoughtful care for your hearing.</T><br /><T>A clearer connection to everything else.</T></p></Reveal>
    <LocalizedElement as="div" role="tablist" aria-label="Explore our care" className="service-tabs">{tabs.map((t, i) => <button key={t.id} id={`service-tab-${t.id}`} role="tab" aria-selected={selected === i} aria-controls="service-panel" tabIndex={selected === i ? 0 : -1} onKeyDown={e => onKey(e, i)} onClick={event => { setInstant(event.detail === 0); setSelected(i); }}><span className="tab-label"><T>{t.title}</T></span>{selected === i && <motion.span className="tab-underline" layoutId="service-underline" transition={{ type: 'spring', duration: quiet ? 0 : motionTiming.press, bounce: .1 }} />}</button>)}</LocalizedElement>
    <div className="service-panel" id="service-panel" role="tabpanel" tabIndex={0} aria-labelledby={`service-tab-${tab.id}`}><div className="service-panel-inner"><motion.div key={tab.id} className="service-panel-copy" initial={{ opacity: quiet ? 1 : .9 }} animate={{ opacity: 1 }} transition={{ type: 'tween', duration: quiet ? 0 : motionTiming.reveal, ease: motionEase }}><h3><T>{tab.heading}</T></h3><p><T>{tab.text}</T></p><ul>{tab.list.map(item => <li key={item}><Check size={16} /><T>{item}</T></li>)}</ul><Link href={`/${tab.id}/`} className="text-link"><T>Explore {tab.title.toLowerCase()}</T> <T>care </T><ArrowUpRight size={17} /></Link></motion.div><div className="service-image">{tabs.map((image, i) => <LocalizedElement as="img" key={image.id} data-scene={image.id} aria-hidden={scene !== i} style={{ opacity: scene === i ? 1 : 0, transitionDuration: quiet ? '0s' : undefined }} onLoad={() => setReadyScenes(current => new Set(current).add(i))} src={image.image} srcSet={`${publicAsset(`/images/expertise-${image.id}-720.webp`)} 720w, ${image.image} 1440w`} sizes="(max-width:453px) 405px, (max-width:600px) calc(100vw - 48px), (max-width:1400px) 48vw, 660px" alt={image.alt} width="1440" height="960" loading="lazy" decoding="async" />)}<span><T>Care made personal.</T></span></div></div></div>
  </div></section>;
}

export function Faqs({ all = false }: { all?: boolean }) {
  return <div className="faq-list">{faqs.slice(0, all ? 5 : 4).map(([q, a]) => <details name="clinic-faq" key={q}><summary><T>{q}</T><Plus size={19} /></summary><div><p><T>{a}</T></p></div></details>)}</div>;
}

export function VisitSection({ isHome = false }: { isHome?: boolean }) {
  return <section className={`visit-section section-space${isHome ? ' home-visit-section' : ''}`} id="visit"><div className="container"><Reveal className="section-intro"><MotionHeading><T>Good care.</T><br /><T>Close to home.</T></MotionHeading><p><T>Serving our neighbors in southwest Colorado</T><br /><T>and northwest New Mexico.</T></p></Reveal>
    <Reveal className="visit-grid"><div className="visit-details"><h3><T>Come see us in Pagosa.</T></h3><p className="address"><MapPin size={18} /><span><T>{clinic.address}</T><br /><T>{clinic.city}</T></span></p><a className="text-link" href={clinic.directions} target="_blank" rel="noopener noreferrer"><T>Get directions </T><ArrowUpRight size={17} /></a><div className="hours"><div><span><T>Monday to Thursday</T></span><span><T>8:30 to 12 & 1 to 4:30</T></span></div><div><span><T>Friday</T></span><span><T>8:30 to 12</T></span></div><small><T>Mountain Time · Closed Saturday & Sunday</T></small></div><a className="visit-phone" href={clinic.phoneHref}><Phone size={18} /><T>{clinic.phone}</T><ArrowUpRight size={19} /></a><span className="small-text"><T>Call or text. We’re happy to help.</T></span><a className="visit-email" href={`mailto:${clinic.email}`}><Mail size={18} /><span><T>{clinic.email}</T></span><ArrowUpRight size={17} /></a></div><MapPanel /></Reveal>
    <div className="home-faq"><div><h3><T>A little clarity</T><br /><T>before your visit.</T></h3><Link href="/resources/" className="text-link"><T>All patient resources </T><ArrowRight size={17} /></Link></div><Faqs /></div>
  </div></section>;
}

export function ClosingCTA() { return <section className="closing-cta"><Reveal className="container"><MotionHeading><T>Your next chapter</T><br /><T>sounds better.</T></MotionHeading><div><p><T>Let’s start with a conversation.</T></p><Link href="/book/" className="button button-light"><T>Book your visit </T><ArrowUpRight size={18} /></Link></div></Reveal></section>; }
