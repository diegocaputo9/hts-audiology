'use client';

import { publicAsset } from '@/lib/public-asset';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play, MapPin } from 'lucide-react';
import Link from 'next/link';
import { clinic } from '@/lib/clinic';

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduce ? {} : { opacity: [.7, 1] }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
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
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) { el.pause(); setPlaying(false); } }, { threshold: .05 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce]);
  const toggle = () => { const el = video.current; if (!el) return; if (el.paused) el.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); else { el.pause(); setPlaying(false); } };
  return <section className="hero" aria-labelledby="hero-heading">
    <img className="hero-poster" src={publicAsset("/images/consultation.jpg")} width="1672" height="941" fetchPriority="high" alt="" />
    <video ref={video} className="hero-video" loop muted playsInline preload="metadata" poster={publicAsset("/images/consultation.jpg")} width="1920" height="1080" aria-hidden="true"><source src={publicAsset("/video/patient-journey.mp4")} type="video/mp4" /></video>
    <div className="hero-shade" />
    <div className="hero-content"><h1 id="hero-heading">Life sounds<br />better connected.</h1><p>Expert hearing and tinnitus care.<br />Centered on you, here in Pagosa Springs.</p><Link href="/book/" className="button button-light">Let’s find your clarity <ArrowUpRight size={18} /></Link><a href="#meet-dr-melton" className="hero-secondary">Get to know your care team <ArrowDown size={15} /></a></div>
    <div className="hero-bottom"><span><MapPin size={15} /> Pagosa Springs, Colorado</span><div><button onClick={toggle} className="film-control" aria-label={playing ? 'Pause background slideshow' : 'Play background slideshow'}>{playing ? <Pause size={15} /> : <Play size={15} />}<span>{playing ? 'Pause slideshow' : 'Play slideshow'}</span></button></div></div>
  </section>;
}

export function MapPanel() {
  return <div className="map-panel map-panel-live">
    <iframe title="Map of Hearing and Tinnitus Solutions in Pagosa Springs" src="https://maps.google.com/maps?q=2343A%20Eagle%20Drive%20Pagosa%20Springs%20CO%2081147&output=embed" loading="eager" referrerPolicy="no-referrer" />
    <a className="map-directions" href={clinic.directions} target="_blank" rel="noopener noreferrer">Open directions in Google Maps <ArrowUpRight size={16} /></a>
  </div>;
}
