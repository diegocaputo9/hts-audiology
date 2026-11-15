'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play, MapPin } from 'lucide-react';
import Link from 'next/link';
import { clinic } from '@/lib/clinic';

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduce ? {} : { y: [18, 0], opacity: [.55, 1] }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
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
    <img className="hero-poster" src="/images/consultation.jpg" width="1672" height="941" fetchPriority="high" alt="" />
    <video ref={video} className="hero-video" loop muted playsInline preload="metadata" poster="/images/consultation.jpg" width="1920" height="1080" aria-hidden="true"><source src="/video/patient-journey.mp4" type="video/mp4" /></video>
    <div className="hero-shade" />
    <div className="hero-content"><h1 id="hero-heading">Life sounds<br />better connected.</h1><p>Expert hearing and tinnitus care.<br />Centered on you, here in Pagosa Springs.</p><Link href="/book/" className="button button-light">Let’s find your clarity <ArrowUpRight size={18} /></Link><a href="#meet-dr-melton" className="hero-secondary">Get to know your care team <ArrowDown size={15} /></a></div>
    <div className="hero-bottom"><span><MapPin size={15} /> Pagosa Springs, Colorado</span><div><span className="film-note">AI-generated care scenes</span><button onClick={toggle} className="film-control" aria-label={playing ? 'Pause background film' : 'Play background film'}>{playing ? <Pause size={15} /> : <Play size={15} />}<span>{playing ? 'Pause film' : 'Play film'}</span></button></div></div>
  </section>;
}

export function MapPanel() {
  const [loaded, setLoaded] = useState(false);
  return <div className="map-panel">{loaded ? <iframe title="Map of Hearing and Tinnitus Solutions in Pagosa Springs" src="https://maps.google.com/maps?q=2343A%20Eagle%20Drive%20Pagosa%20Springs%20CO%2081147&output=embed" loading="lazy" referrerPolicy="no-referrer" /> : <>
    <div className="map-lines" aria-hidden="true"><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /><span className="map-water" /><span className="map-place">PAGOSA SPRINGS</span><span className="map-road-label">Eagle Drive</span></div>
    <span className="map-schematic">Location illustration · Not to scale</span>
    <div className="map-location"><span className="map-pin"><MapPin size={26} /></span><strong>We’re right here.</strong><span>{clinic.address}</span></div>
    <button className="map-load" onClick={() => setLoaded(true)}>Load interactive Google map <ArrowUpRight size={14} /></button>
  </>}</div>;
}
