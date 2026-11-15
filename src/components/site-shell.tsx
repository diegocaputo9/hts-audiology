'use client';
import { T, LocalizedElement, LanguageSwitcher, HeaderLanguageToggle, useLanguage } from '@/components/language';

import { publicAsset } from '@/lib/public-asset';

import { LocalizedLink as Link } from '@/components/language';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { clinic } from '@/lib/clinic';
import { SocialLinks, GoogleReviews } from './social-proof';
import { motionTiming, motionEase } from '@/lib/motion';

export function Header() {
  const { t } = useLanguage();
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const sentinel = document.getElementById('header-sentinel');
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () => document.documentElement.style.setProperty('--site-header-height', `${header.getBoundingClientRect().height}px`);
    const observer = new ResizeObserver(update);
    observer.observe(header);
    update();
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
    <header ref={headerRef} className={`site-header ${scrolled ? 'is-compact' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Hearing and Tinnitus Solutions home"><LocalizedElement as="img" src={publicAsset("/images/original-logo.png")} width="2560" height="820" alt="Hearing & Tinnitus Solutions" /></Link>
        <LocalizedElement as="nav" className="desktop-nav" aria-label="Main navigation">
          <Link className={`nav-link ${path === '/' ? 'active' : ''}`} href="/" aria-current={path === '/' ? 'page' : undefined}><T>Home</T></Link>
          <Link className={`nav-link ${path === '/about/' ? 'active' : ''}`} href="/about/" aria-current={path === '/about/' ? 'page' : undefined}><T>Our people</T></Link>
          <div className="nav-dropdown" ref={menuRef} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setDropdown(false); }}>
            <button className={`nav-link ${['/hearing/', '/tinnitus/', '/cognition/'].includes(path) ? 'active' : ''}`} onClick={() => setDropdown(!dropdown)} aria-expanded={dropdown} aria-controls="care-menu"><T>Our care </T><ChevronDown size={13} className={dropdown ? 'rotate' : ''} /></button>
            <AnimatePresence>{dropdown && <motion.div className="care-menu" id="care-menu" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ type: 'tween', duration: motionTiming.press, ease: motionEase }}>
              {[['Hearing', 'A clearer connection', '/hearing/'], ['Tinnitus', 'Find a way forward', '/tinnitus/'], ['Cognition', 'The bigger picture', '/cognition/']].map(([title, desc, href]) => <Link key={href} href={href}><span><T>{title}</T><small><T>{desc}</T></small></span><ArrowUpRight size={17} /></Link>)}
            </motion.div>}</AnimatePresence>
          </div>
          <Link className={`nav-link ${path === '/resources/' ? 'active' : ''}`} href="/resources/" aria-current={path === '/resources/' ? 'page' : undefined}><T>Patient resources</T></Link>
          <Link className={`nav-link ${path === '/contact/' ? 'active' : ''}`} href="/contact/" aria-current={path === '/contact/' ? 'page' : undefined}><T>Contact</T></Link>
          <HeaderLanguageToggle />
        </LocalizedElement>
        <Link href="/book/" className="button header-cta" aria-label="Book a visit"><span className="header-book-full"><T>Book a visit</T></span><span className="header-book-short">Cita</span><ArrowUpRight size={16} /></Link>
        <LocalizedElement as="button" ref={trigger} className="mobile-toggle icon-button" onClick={() => setMobile(!mobile)} aria-expanded={mobile} aria-controls="mobile-nav" aria-label={mobile ? 'Close navigation' : 'Open navigation'}>{mobile ? <X /> : <Menu />}</LocalizedElement>
      </div>
      <AnimatePresence>{mobile && <motion.nav id="mobile-nav" className="mobile-nav" aria-label={t('Mobile navigation')} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ type: 'tween', duration: motionTiming.press, ease: motionEase }}>
        <LanguageSwitcher />
        {[['Home', '/'], ['Our people', '/about/'], ['Hearing', '/hearing/'], ['Tinnitus', '/tinnitus/'], ['Cognition', '/cognition/'], ['Patient resources', '/resources/'], ['Contact', '/contact/']].map(([label, href]) => <Link onClick={() => setMobile(false)} key={href} href={href}><T>{label}</T><ArrowUpRight size={18} /></Link>)}
        <a href={clinic.phoneHref}><T>Call {clinic.phone}</T><ArrowUpRight size={18} /></a>
      </motion.nav>}</AnimatePresence>
    </header>
  </>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><Link href="/" className="footer-brand"><T>Hearing &</T><br /><T>Tinnitus Solutions</T><span><T>Personal care. A clearer connection.</T></span></Link><p className="footer-spanish" lang="es">También hablamos español.</p></div>
      <div><h2><T>Explore</T></h2><Link href="/about/"><T>Our people</T></Link><Link href="/hearing/"><T>Hearing care</T></Link><Link href="/tinnitus/"><T>Tinnitus care</T></Link><Link href="/cognition/"><T>Hearing & cognition</T></Link></div>
      <div><h2><T>Your visit</T></h2><Link href="/book/"><T>Book an appointment</T></Link><Link href="/resources/"><T>Patient resources</T></Link><Link href="/assessment/"><T>Tinnitus check in</T></Link><Link href="/contact/"><T>Find our clinic</T></Link></div>
      <div className="footer-contact"><h2><T>Let’s talk</T></h2><a href={clinic.phoneHref}><T>{clinic.phone}</T></a><a href={`mailto:${clinic.email}`}><T>{clinic.email.split('@')[0]}</T>@<wbr /><T>{clinic.email.split('@')[1]}</T></a><p><T>{clinic.address}</T><br /><T>{clinic.city}</T></p></div>
    <LocalizedElement as="section" className="footer-badges" aria-label="Professional credentials">
      <LocalizedElement as="a" className="credential-badge credential-badge-aba" aria-label="American Board of Audiology: Dr. Melton’s Certificate in Tinnitus Management" href="https://www.audiology.org/american-board-of-audiology/aba-certificate-programs/" target="_blank" rel="noopener noreferrer"><LocalizedElement as="img" src={publicAsset('/images/credentials/american-board-of-audiology.png')} alt="American Board of Audiology" width="1200" height="620" loading="lazy" /></LocalizedElement>
    </LocalizedElement>
    </div>
    <div className="footer-social-row"><div className="footer-social-language"><SocialLinks /><LanguageSwitcher compact /></div><GoogleReviews /></div>
    <div className="footer-bottom"><span>© <T>{new Date().getFullYear()}</T> <T>Hearing & Tinnitus Solutions, P.C.</T></span><div><Link href="/privacy/"><T>Privacy</T></Link><Link href="/accessibility/"><T>Accessibility</T></Link><Link href="/privacy/#website-content-credits"><T>Image credits</T></Link><a href="https://diegocaputo.com" target="_blank" rel="noopener noreferrer"><T>Website by diegocaputo.com</T></a></div></div>
  </div></footer>;
}

export function SiteMotion({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const pendingPath = useRef<string | null>(null);
  const anchorTimer = useRef<number | undefined>(undefined);
  const prepareTop = useCallback(() => {
    // Avoid scroll anchoring undoing the requested top position as the header expands.
    clearTimeout(anchorTimer.current);
    document.documentElement.classList.add('is-returning-top');
    anchorTimer.current = window.setTimeout(() => {
      if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
      document.documentElement.classList.remove('is-returning-top');
    }, 1000);
  }, []);
  useEffect(() => {
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.hash) return;
      if (url.pathname === location.pathname) {
        event.preventDefault();
        prepareTop();
        if (location.hash || url.search !== location.search) history.replaceState(history.state, '', url.href);
        window.scrollTo({ top: 0, behavior: event.detail === 0 || matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth' });
      } else {
        pendingPath.current = url.pathname;
      }
    };
    const cancelTop = () => {
      clearTimeout(anchorTimer.current);
      document.documentElement.classList.remove('is-returning-top');
    };
    const cancelEvents = ['pointerdown', 'touchstart', 'wheel', 'keydown'] as const;
    cancelEvents.forEach(type => document.addEventListener(type, cancelTop, { passive: true, capture: true }));
    document.addEventListener('click', navigate, true);
    return () => {
      document.removeEventListener('click', navigate, true);
      cancelEvents.forEach(type => document.removeEventListener(type, cancelTop, true));
      clearTimeout(anchorTimer.current);
      document.documentElement.classList.remove('is-returning-top');
    };
  }, [prepareTop]);
  useLayoutEffect(() => {
    if (pendingPath.current !== location.pathname || location.hash) return;
    pendingPath.current = null;
    prepareTop();
    const frame = requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    return () => cancelAnimationFrame(frame);
  }, [path, prepareTop]);
  return <MotionConfig reducedMotion="user" transition={{ type: 'spring', stiffness: 140, damping: 24 }}><T>{children}</T></MotionConfig>;
}
