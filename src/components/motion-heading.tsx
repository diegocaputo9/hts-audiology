'use client';

import { Children, isValidElement, useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

/** A line mask, not a typewriter: the full heading stays in the accessibility tree. */
export function MotionHeading({ as: Tag = 'h2', children, className = '', id }: {
  as?: 'h1' | 'h2'; children: ReactNode; className?: string; id?: string;
}) {
  const heading = useRef<HTMLHeadingElement>(null);
  const played = useRef(false);
  const lines: ReactNode[][] = [[]];
  Children.toArray(children).forEach(child => {
    if (isValidElement(child) && child.type === 'br') lines.push([]);
    else lines[lines.length - 1].push(child);
  });

  useEffect(() => {
    const element = heading.current;
    if (!element) return;
    const reduced = matchMedia('(prefers-reduced-motion:reduce)');
    const phone = matchMedia('(max-width:600px)');
    let observer: IntersectionObserver | undefined;
    function setup() {
      observer?.disconnect();
      if (reduced.matches || played.current) { element!.dataset.titleState = 'rest'; return; }
      element!.dataset.titleState = 'wait';
      observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        element!.dataset.titleState = 'play';
        played.current = true;
        observer?.disconnect();
      }, { rootMargin: phone.matches ? '0px 0px -4% 0px' : '0px 0px -12% 0px', threshold: 0.1 });
      observer.observe(element!);
    }
    setup();
    reduced.addEventListener('change', setup);
    phone.addEventListener('change', setup);
    return () => { observer?.disconnect(); reduced.removeEventListener('change', setup); phone.removeEventListener('change', setup); };
  }, []);

  return <Tag ref={heading} id={id} className={`motion-heading ${className}`}>
    {lines.map((line, index) => <span className="motion-heading-line" key={index} style={{ '--line-index': index } as CSSProperties}><span className="motion-heading-ink">{line}</span></span>)}
  </Tag>;
}
