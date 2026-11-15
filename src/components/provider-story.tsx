'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function ProviderStory({ children }: { children: ReactNode }) {
  const story = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = story.current;
    if (!root) return;
    const portrait = root.querySelector<HTMLElement>('.provider-portrait')!;
    const photo = portrait.querySelector('img')!;
    const bio = root.querySelector<HTMLElement>('.provider-copy')!;
    const backdrop = root.querySelector<HTMLElement>('.portrait-arch')!;
    const mobile = matchMedia('(max-width:600px)');
    const reduced = matchMedia('(prefers-reduced-motion:reduce)');
    const nativeTimeline = CSS.supports('animation-timeline:scroll()') && CSS.supports('animation-range:0% 100%') && CSS.supports('animation-range:exit -100% exit 0%') && CSS.supports('timeline-scope:--portrait-flat');
    let frame = 0;
    let enabled = false;

    const headerHeight = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--site-header-height')) || 71;
    function paint() {
      frame = 0;
      if (!enabled) return;
      const rect = root!.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > innerHeight) return;
      const header = headerHeight();
      const band = parseFloat(root!.style.getPropertyValue('--face-band'));
      const crop = parseFloat(root!.style.getPropertyValue('--portrait-head-crop'));
      // Release as the final bio content enters the viewport, without a spacer.
      const release = Math.max(0, innerHeight - rect.bottom);
      const stickyTop = header - crop;
      const constrainedTop = Math.min(stickyTop, rect.bottom - portrait.offsetHeight);
      portrait.style.transform = `translateY(${Math.min(0, stickyTop - release - constrainedTop)}px)`;
      const bioRect = bio.getBoundingClientRect();
      const faceBottom = Math.min(header + band, portrait.getBoundingClientRect().top + crop + band);
      const clipped = Math.max(0, Math.min(bioRect.height, Math.max(header, faceBottom) - bioRect.top));
      bio.style.clipPath = `inset(${clipped}px 0 0)`;
      if (!nativeTimeline) {
        const progress = Math.max(0, Math.min(1, (header + 140 - rect.top - crop) / 140));
        backdrop.style.clipPath = `inset(${45 * (1 - progress)}px 0 0 round ${48 * (1 - progress)}% ${48 * (1 - progress)}% 0 0)`;
      }
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(paint); }
    function measure() {
      enabled = mobile.matches && !reduced.matches;
      root!.dataset.mobileStory = String(enabled);
      if (!enabled) {
        portrait.style.transform = '';
        bio.style.clipPath = '';
        backdrop.style.clipPath = '';
        return;
      }
      const drawn = Math.min(photo.clientHeight, photo.clientWidth * (photo.naturalHeight || 1200) / (photo.naturalWidth || 900));
      const crop = photo.clientHeight - drawn + drawn / 6;
      const band = Math.min(180, Math.max(145, drawn * .36 + 12));
      root!.style.setProperty('--portrait-head-crop', `${crop}px`);
      root!.style.setProperty('--face-band', `${band}px`);
      schedule();
    }
    function focusBio(event: FocusEvent) {
      if (!enabled || !(event.target instanceof HTMLElement)) return;
      const top = event.target.getBoundingClientRect().top;
      const header = headerHeight();
      const band = parseFloat(root!.style.getPropertyValue('--face-band'));
      const crop = parseFloat(root!.style.getPropertyValue('--portrait-head-crop'));
      const visibleTop = Math.max(header, Math.min(header + band, portrait.getBoundingClientRect().top + crop + band)) + 12;
      if (top < visibleTop) window.scrollBy({ top: top - visibleTop, behavior: 'instant' });
    }
    const resize = new ResizeObserver(measure);
    resize.observe(portrait);
    resize.observe(bio);
    const header = document.querySelector('.site-header');
    if (header) resize.observe(header);
    photo.addEventListener('load', measure);
    bio.addEventListener('focusin', focusBio);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure);
    mobile.addEventListener('change', measure);
    reduced.addEventListener('change', measure);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      photo.removeEventListener('load', measure);
      bio.removeEventListener('focusin', focusBio);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', measure);
      mobile.removeEventListener('change', measure);
      reduced.removeEventListener('change', measure);
    };
  }, []);

  return <div ref={story} className="container provider-grid provider-story"><div className="provider-scroll-range" aria-hidden="true" />{children}</div>;
}
