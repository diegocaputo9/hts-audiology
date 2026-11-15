'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Plus, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { ServiceSymbol } from './service-symbol';

export const primaryServices = [
  {
    id: 'hearing-exams', title: 'Hearing exams', subtitle: 'Comprehensive hearing diagnostics',
    includes: ['Adult and pediatric evaluations', 'Ear health assessment', 'Pure tone hearing testing', 'Speech understanding testing', 'Middle ear and inner ear measures', 'Results review and care planning'],
    paragraphs: [
      'Your comprehensive exam will check your ear health, hearing levels, and speech understanding in a controlled, clinical setting. The results will guide Dr. Melton’s treatment plan for you, from monitoring changes to recommending hearing technology when needed.',
      'Advanced testing includes detailed tone and speech testing, middle ear and inner ear measures, and a clear explanation of results, with evidence based recommendations tailored to your needs.',
    ],
  },
  {
    id: 'hearing-aids', title: 'Hearing aids', subtitle: 'Fitting, verification & ongoing support',
    includes: ['Hearing aid selection and fitting', 'Programming and adjustments', 'Fitting verification', 'Follow up visits and fine tuning', 'Device cleaning and maintenance', 'Repair support across manufacturers'],
    paragraphs: [
      'Hearing aids are medical devices precisely programmed, based on your hearing test, for sound in a range of hearing environments. Dr. Melton and team will fit, verify, and fine tune your devices over time to keep them performing their best.',
      'Devices are selected to match your unique hearing profile, lifestyle, and listening goals. Follow up visits, adjustments, cleanings, and repair support help keep your hearing aids comfortable and dependable.',
    ],
  },
  {
    id: 'ear-cleaning', title: 'Ear cleaning', subtitle: 'Professional care for wax buildup',
    includes: ['Ear canal examination', 'Assessment of wax buildup', 'Professional earwax removal'],
    paragraphs: [
      'Sometimes hearing feels muffled simply because of wax buildup in the ear canal. A professional ear cleaning is a quick, gentle way to help optimal sound come through more clearly.',
      'If you notice muffled hearing or a blocked feeling, let the team check your ears and discuss whether wax removal is appropriate for you.',
    ],
  },
  {
    id: 'tinnitus-treatment', title: 'Tinnitus treatment', subtitle: 'A personal approach to ringing or buzzing',
    includes: ['Hearing and tinnitus evaluation', 'Individual management planning', 'Sound therapy', 'Hearing aids with tinnitus features', 'Lenire® bimodal neuromodulation', 'Oto CBT tinnitus management', 'Counseling based strategies'],
    paragraphs: [
      'A range of options are available to reduce the impact of ringing or buzzing in your ears so it feels less intrusive, day and night.',
      'Strategies include sound therapy, bimodal neuromodulation, hearing aids with tinnitus features, and counseling approaches to help your brain filter and manage noise. Dr. Melton will discuss which options fit your needs.',
    ],
  },
  {
    id: 'hearing-protection', title: 'Hearing protection', subtitle: 'Custom fit for your everyday sound',
    includes: ['Custom molded earplugs', 'Workplace hearing protection', 'Protection for music', 'Protection for shooting and loud hobbies'],
    paragraphs: [
      'Custom hearing protection is molded to your ears for a secure, comfortable fit and noise reduction tailored to you.',
      'Options can be tailored for work, music, shooting, or everyday loud environments, helping protect your hearing while still allowing you to hear what matters.',
    ],
  },
] as const;

type Service = typeof primaryServices[number];

function ServiceDisclosure({ service }: { service: Service }) {
  const details = useRef<HTMLDetailsElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const fade = useRef<Animation | null>(null);
  const desiredOpen = useRef(false);
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => () => {
    animation.current?.cancel();
    fade.current?.cancel();
  }, []);

  function toggle(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const element = details.current;
    const body = content.current;
    if (!element || !body) return;
    // Keep fractional layout dimensions, independent of the summary's press scale.
    const style = getComputedStyle(element);
    const start = parseFloat(style.height);
    const opacity = element.open ? getComputedStyle(body).opacity : '.65';
    element.style.height = `${start}px`;
    animation.current?.cancel();
    fade.current?.cancel();
    const open = !desiredOpen.current;
    desiredOpen.current = open;
    setExpanded(open);
    body.inert = !open;
    if (reduced || window.matchMedia('(prefers-reduced-motion: reduce)').matches || event.detail === 0 || !element.animate) {
      element.open = open;
      body.inert = false;
      element.style.height = '';
      element.style.overflow = '';
      animation.current = null;
      fade.current = null;
      return;
    }
    element.open = true;
    element.style.height = 'auto';
    const naturalHeight = parseFloat(getComputedStyle(element).height);
    const summary = element.querySelector('summary')!;
    const border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const collapsedHeight = parseFloat(getComputedStyle(summary).height) + border;
    const end = open ? naturalHeight : collapsedHeight;
    element.style.height = `${start}px`;
    element.style.overflow = 'hidden';
    const easing = getComputedStyle(document.documentElement).getPropertyValue('--ease').trim();
    const distance = Math.abs(end - start) / Math.max(1, naturalHeight - collapsedHeight);
    const duration = Math.max(120, (open ? 280 : 240) * Math.min(1, distance));
    const active = element.animate(
      [{ height: `${start}px` }, { height: `${end}px` }],
      { duration, easing, fill: 'both' },
    );
    const reveal = body.animate(
      [{ opacity }, { opacity: open ? 1 : .65 }],
      { duration: Math.min(200, duration), easing, fill: 'both' },
    );
    animation.current = active;
    fade.current = reveal;
    active.finished.then(() => {
      if (animation.current !== active) return;
      element.open = open;
      body.inert = false;
      // Commit the destination before removing the animation, avoiding an end-frame snap.
      element.style.height = `${end}px`;
      active.cancel();
      reveal.cancel();
      animation.current = null;
      fade.current = null;
      element.style.height = '';
      element.style.overflow = '';
    }).catch(() => {});
  }

  return <details ref={details} id={`service-${service.id}`} className="service-disclosure" data-expanded={expanded} onToggle={() => {
    if (!animation.current && details.current) {
      desiredOpen.current = details.current.open;
      setExpanded(details.current.open);
    }
  }}>
    <summary onClick={toggle} aria-expanded={expanded}>
      <Plus size={20} className="disclosure-plus" />
      <span className="service-disclosure-label"><strong>{service.title}</strong><span className="service-subtitle">{service.subtitle}</span></span>
      <ServiceSymbol service={service.id} />
    </summary>
    <div ref={content} className="service-disclosure-content">
      {service.paragraphs.map(text => <p key={text}>{text}</p>)}
      <h3 className="service-list-heading">Care options</h3>
      <ul className="service-options">{service.includes.map(item => <li key={item}>{item}</li>)}</ul>
      <Link className="text-link" href="/book/">Ask about {service.title.toLowerCase()} <ArrowUpRight size={16} /></Link>
    </div>
  </details>;
}

export function ServiceDetails({ hearingOnly = false }: { hearingOnly?: boolean }) {
  return <section className="service-details-section section-space" aria-labelledby="primary-services-heading">
    <div className="container">
      <div className="section-intro"><h2 id="primary-services-heading">The care you need.<br />Clearly explained.</h2><p>Hearing exams, hearing aids, ear cleaning, and more.<br />Select a service to explore what’s involved.</p></div>
      <p className="service-visit-formats">Clinic, home visits, and telecare are available. Ask the team which format suits your needs.</p>
      <div className="service-disclosures">{primaryServices.filter(service => !hearingOnly || service.id !== 'tinnitus-treatment').map(service => <ServiceDisclosure key={service.id} service={service} />)}</div>
    </div>
  </section>;
}
