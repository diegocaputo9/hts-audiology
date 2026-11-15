'use client';

import { publicAsset } from '@/lib/public-asset';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { clinic } from '@/lib/clinic';

export function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const sentinel = document.getElementById('header-sentinel');
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);
  useEffect(() => { setMobile(false); setDropdown(false); }, [path]);
  useEffect(() => {
    const close = (e: PointerEvent) => { if (!menuRef.current?.contains(e.target as Node)) setDropdown(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { setDropdown(false); setMobile(false); trigger.current?.focus(); } };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', esc); };
  }, []);
  return <>
    <div id="header-sentinel" aria-hidden="true" />
    <header className={`site-header ${scrolled ? 'is-compact' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Hearing and Tinnitus Solutions home"><img src={publicAsset("/images/original-logo.png")} width="2560" height="820" alt="Hearing & Tinnitus Solutions" /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link className={`nav-link ${path === '/' ? 'active' : ''}`} href="/" aria-current={path === '/' ? 'page' : undefined}>Home</Link>
          <Link className={`nav-link ${path === '/about/' ? 'active' : ''}`} href="/about/" aria-current={path === '/about/' ? 'page' : undefined}>Our people</Link>
          <div className="nav-dropdown" ref={menuRef} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setDropdown(false); }}>
            <button className={`nav-link ${['/hearing/', '/tinnitus/', '/cognition/'].includes(path) ? 'active' : ''}`} onClick={() => setDropdown(!dropdown)} aria-expanded={dropdown} aria-controls="care-menu">Our care <ChevronDown size={13} className={dropdown ? 'rotate' : ''} /></button>
            <AnimatePresence>{dropdown && <motion.div className="care-menu" id="care-menu" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: .18 }}>
              {[['Hearing', 'A clearer connection', '/hearing/'], ['Tinnitus', 'Find a way forward', '/tinnitus/'], ['Cognition', 'The bigger picture', '/cognition/']].map(([title, desc, href]) => <Link key={href} href={href}><span>{title}<small>{desc}</small></span><ArrowUpRight size={17} /></Link>)}
            </motion.div>}</AnimatePresence>
          </div>
          <Link className={`nav-link ${path === '/resources/' ? 'active' : ''}`} href="/resources/" aria-current={path === '/resources/' ? 'page' : undefined}>Patient resources</Link>
          <Link className={`nav-link ${path === '/contact/' ? 'active' : ''}`} href="/contact/" aria-current={path === '/contact/' ? 'page' : undefined}>Contact</Link>
        </nav>
        <Link href="/book/" className="button header-cta">Book a visit <ArrowUpRight size={16} /></Link>
        <button ref={trigger} className="mobile-toggle icon-button" onClick={() => setMobile(!mobile)} aria-expanded={mobile} aria-controls="mobile-nav" aria-label={mobile ? 'Close navigation' : 'Open navigation'}>{mobile ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>{mobile && <motion.nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}>
        {[['Home', '/'], ['Our people', '/about/'], ['Hearing', '/hearing/'], ['Tinnitus', '/tinnitus/'], ['Cognition', '/cognition/'], ['Patient resources', '/resources/'], ['Contact', '/contact/']].map(([label, href]) => <Link onClick={() => setMobile(false)} key={href} href={href}>{label}<ArrowUpRight size={18} /></Link>)}
        <a href={clinic.phoneHref}>Call {clinic.phone}<ArrowUpRight size={18} /></a>
      </motion.nav>}</AnimatePresence>
    </header>
  </>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><Link href="/" className="footer-brand">Hearing &<br />Tinnitus Solutions<span>Personal care. A clearer connection.</span></Link></div>
      <div><h2>Explore</h2><Link href="/about/">Our people</Link><Link href="/hearing/">Hearing care</Link><Link href="/tinnitus/">Tinnitus care</Link><Link href="/cognition/">Hearing & cognition</Link></div>
      <div><h2>Your visit</h2><Link href="/book/">Book an appointment</Link><Link href="/resources/">Patient resources</Link><Link href="/assessment/">Tinnitus check-in</Link><Link href="/contact/">Find our clinic</Link></div>
      <div><h2>Let’s talk</h2><a href={clinic.phoneHref}>{clinic.phone}</a><a href={`mailto:${clinic.email}`}>{clinic.email}</a><p>{clinic.address}<br />{clinic.city}</p></div>
    </div>
    <section className="footer-qualifications" aria-labelledby="footer-qualifications-title">
      <div className="footer-qualifications-heading"><h2 id="footer-qualifications-title">Provider qualifications</h2><a href="https://htsaudiology.com/about/" target="_blank" rel="noopener noreferrer">Practice profile <ArrowUpRight size={14} aria-hidden="true" /></a></div>
      <dl className="footer-qualification-list">
        <div><dt>Robert Melton, AuD, CH-TM</dt><dd>Doctor of Audiology · Auburn University</dd><dd>Certificate Holder–Tinnitus Management · American Board of Audiology</dd><dd>TRT training · Lenire® & Oto certified provider</dd></div>
        <div><dt>Jen Hurst, AuD</dt><dd>Doctor of Audiology · A.T. Still University</dd></div>
      </dl>
    </section>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Hearing & Tinnitus Solutions, P.C.</span><div><Link href="/privacy/">Privacy</Link><Link href="/accessibility/">Accessibility</Link><Link href="/privacy/#website-content-credits">Image credits</Link><a href="https://diegocaputo.com" target="_blank" rel="noopener noreferrer">Website by diegocaputo.com</a></div></div>
  </div></footer>;
}

export function SiteMotion({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user" transition={{ type: 'spring', stiffness: 140, damping: 24 }}>{children}</MotionConfig>;
}
