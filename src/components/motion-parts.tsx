'use client';
import { T, LocalizedElement } from '@/components/language';

import { publicAsset } from '@/lib/public-asset';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play, MapPin } from 'lucide-react';
import { LocalizedLink as Link } from '@/components/language';
import { clinic } from '@/lib/clinic';
import { motionTiming, motionEase } from '@/lib/motion';

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduce ? { opacity: 1 } : { opacity: [.9, 1] }} viewport={{ once: true, amount: .15 }} transition={{ type: 'tween', duration: reduce ? 0 : motionTiming.reveal, delay: reduce ? 0 : delay, ease: motionEase }}><T>{children}</T></motion.div>;
}

export function Hero() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    if (reduce || (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) { el.pause(); setPlaying(false); return; }
    el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [reduce]);
  const toggle = () => { const el = video.current; if (!el) return; if (el.paused) el.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); else { el.pause(); setPlaying(false); } };
  return <section className="hero" aria-labelledby="hero-heading">
    <LocalizedElement as="img" className="hero-poster" src={publicAsset("/images/consultation.jpg")} width="1672" height="941" fetchPriority="high" alt="Illustrative audiology consultation with an older adult in a bright clinic" />
    <video ref={video} className="hero-video" loop muted playsInline preload="metadata" poster={publicAsset("/images/consultation.jpg")} width="1920" height="1080" aria-hidden="true"><source src={publicAsset("/video/patient-journey.mp4")} type="video/mp4" /></video>
    <div className="hero-shade" />
    <div className="hero-content"><h1 id="hero-heading"><T>Life sounds</T><br /><T>better connected.</T></h1><p><T>Expert hearing and tinnitus care.</T><br /><T>Centered on you, here in Pagosa Springs.</T></p><Link href="/book/" className="button button-light"><T>Let’s find your clarity </T><ArrowUpRight size={18} /></Link><a href="#meet-dr-melton" className="hero-secondary"><T>Get to know your care team </T><ArrowDown size={15} /></a></div>
    <div className="hero-bottom"><span><MapPin size={15} /> <T>Pagosa Springs, Colorado</T></span><div><LocalizedElement as="button" onClick={toggle} className="film-control" aria-label={playing ? 'Pause background slideshow' : 'Play background slideshow'}>{playing ? <Pause size={15} /> : <Play size={15} />}<span><T>{playing ? 'Pause slideshow' : 'Play slideshow'}</T></span></LocalizedElement></div></div>
  </section>;
}

export function MapPanel() {
  return <div className="map-panel map-panel-live">
    <LocalizedElement as="iframe" title="Map of Hearing and Tinnitus Solutions in Pagosa Springs" src="https://maps.google.com/maps?q=2343A%20Eagle%20Drive%20Pagosa%20Springs%20CO%2081147&output=embed" loading="eager" referrerPolicy="no-referrer" />
    <a className="map-directions" href={clinic.directions} target="_blank" rel="noopener noreferrer"><T>Open directions in Google Maps </T><ArrowUpRight size={16} /></a>
  </div>;
}
