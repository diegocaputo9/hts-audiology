'use client';

import { useLanguage } from '@/components/language';
import { usePathname } from 'next/navigation';
import { motionTiming } from '@/lib/motion';
import { headingWasSeen, rememberHeading, subscribeHeadingMemory } from '@/lib/heading-memory';
import { Children, isValidElement, useLayoutEffect, useRef, type CSSProperties, type ReactNode } from 'react';

/** A line mask, not a typewriter: the full heading stays in the accessibility tree. */
export function MotionHeading({ as: Tag = 'h2', children, className = '', id, calm = false, text, pauseBeforeLast = false, motionKey, supportAt = 'end' }: {
  as?: 'h1' | 'h2'; children?: ReactNode; className?: string; id?: string; calm?: boolean; text?: string; pauseBeforeLast?: boolean; motionKey?: string; supportAt?: 'end' | 'last-phrase';
}) {
  const { t } = useLanguage();
  const path = usePathname();
  const heading = useRef<HTMLHeadingElement>(null);
  const lines: ReactNode[][] = [[]];
  if (text !== undefined) lines.splice(0, 1, ...t(text).split(/\n/).map(line => [line]));
  else Children.toArray(children).forEach(child => {
    if (isValidElement(child) && child.type === 'br') lines.push([]);
    else lines[lines.length - 1].push(child);
  });

  useLayoutEffect(() => {
    const element = heading.current;
    if (!element) return;
    const sequence = element.closest<HTMLElement>('.heading-sequence');
    const key = `${path}:${motionKey || id || text || 'heading'}`;
    const reduced = matchMedia('(prefers-reduced-motion:reduce)');
    const phone = matchMedia('(max-width:600px)');
    let observer: IntersectionObserver | undefined;
    let finishTimer = 0;
    function rest() {
      element!.dataset.titleState = 'rest';
      if (sequence) sequence.dataset.sequenceState = 'rest';
    }
    function setup() {
      observer?.disconnect();
      clearTimeout(finishTimer);
      if (reduced.matches || headingWasSeen(key)) { rest(); return; }
      // A return to an already scrolled bio must never hide the reading area.
      const rect = element!.getBoundingClientRect();
      const scopeRect = sequence?.getBoundingClientRect();
      const header = document.querySelector('.site-header')?.getBoundingClientRect().bottom || 0;
      if (rect.bottom < header && scopeRect && scopeRect.bottom > header && scopeRect.top < innerHeight) { rest(); return; }
      element!.dataset.titleState = 'wait';
      if (sequence) sequence.dataset.sequenceState = 'pending';
      observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        element!.dataset.titleState = 'play';
        rememberHeading(key);
        observer?.disconnect();
        if (sequence) {
          // Read the actual final phrase timing, including its deliberate pause.
          const inks = Array.from(element!.querySelectorAll<HTMLElement>('.motion-heading-ink'));
          const end = Math.max(...inks.map(ink => {
            const style = getComputedStyle(ink);
            return (parseFloat(style.animationDelay) + parseFloat(style.animationDuration)) * 1000;
          }), 0);
          const finalInk = inks.at(-1);
          const delay = supportAt === 'last-phrase' && finalInk ? parseFloat(getComputedStyle(finalInk).animationDelay) * 1000 : end;
          sequence.style.setProperty('--support-delay', `${delay}ms`);
          sequence.dataset.sequenceState = 'playing';
          finishTimer = window.setTimeout(() => { sequence.dataset.sequenceState = 'rest'; }, delay + motionTiming.reveal * 1000);
        }
      }, { rootMargin: phone.matches ? '0px 0px -4% 0px' : '0px 0px -12% 0px', threshold: 0.1 });
      observer.observe(element!);
    }
    const unsubscribe = subscribeHeadingMemory(setup);
    setup();
    reduced.addEventListener('change', setup);
    phone.addEventListener('change', setup);
    return () => { clearTimeout(finishTimer); observer?.disconnect(); unsubscribe(); reduced.removeEventListener('change', setup); phone.removeEventListener('change', setup); };
  }, [path, motionKey, id, text, supportAt]);

  return <Tag ref={heading} id={id} data-title-state="wait" data-pause-last={pauseBeforeLast || undefined} className={`motion-heading ${calm ? 'motion-heading-calm ' : ''}${className}`}>
    {lines.map((line, index) => <span className="motion-heading-line" key={index} style={{ '--line-index': index } as CSSProperties}><span className="motion-heading-ink">{line}</span></span>)}
  </Tag>;
}
