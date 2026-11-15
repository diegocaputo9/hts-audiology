'use client';
import { T, LocalizedElement } from '@/components/language';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { useReducedMotion } from 'motion/react';

/** A decorative, silent sound sculpture. No audio or patient data is used. */
export function LiquidSound() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: -1000, y: 0 });
  const phase = useRef(0);
  const bars = useRef(Array.from({ length: 33 }, () => ({ height: 0, velocity: 0, offset: 0 })));
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  useEffect(() => { if (reduced !== null) setPlaying(!reduced); }, [reduced]);

  useEffect(() => {
    const element = canvas.current;
    const region = wrapper.current;
    const context = element?.getContext('2d');
    if (!element || !region || !context) return;
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = false;
    let lastTime = 0;
    function draw(delta = 0) {
      if (!context || !element || !width || !height) return;
      const time = phase.current;
      context.clearRect(0, 0, width, height);
      const span = width * .84;
      const gap = span / 32;
      for (let i = 0; i < 33; i++) {
        const envelope = Math.pow(Math.sin((i + 1) / 34 * Math.PI), 1.25);
        const x = width * .08 + gap * i;
        const distance = Math.abs(pointer.current.x - x);
        const influence = playing ? Math.exp(-Math.pow(distance / (gap * 3.5), 2)) : 0;
        const breath = .78 + .13 * Math.sin(time * .95 + i * .21) + .07 * Math.sin(time * 1.4 - i * .28);
        const target = 22 + envelope * height * .7 * breath + influence * 36;
        const bar = bars.current[i];
        if (!bar.height) bar.height = target;
        // The spring carries velocity while the pointer reverses direction.
        bar.velocity += (target - bar.height) * 100 * delta;
        bar.velocity *= Math.exp(-10 * delta);
        bar.height += bar.velocity * delta;
        const bend = influence * (pointer.current.y / height - .5) * 15;
        bar.offset += (bend - bar.offset) * Math.min(1, delta * 9);
        const barWidth = Math.min(7, gap * .48) + influence * 2;
        const center = height * .5 + Math.sin(time * .65 + i * .16) * 9;
        const top = center - bar.height / 2;
        const sheen = context.createLinearGradient(x - barWidth / 2, top, x + barWidth, top + bar.height);
        const light = .5 + .5 * Math.sin(time * .55 + i * .19);
        sheen.addColorStop(0, '#71948f');
        sheen.addColorStop(.25 + light * .12, '#d1e5de');
        sheen.addColorStop(.5 + light * .08, '#8eaca8');
        sheen.addColorStop(1, '#6d9690');
        context.fillStyle = sheen;
        context.beginPath();
        context.roundRect(x - barWidth / 2 + bar.offset, top, barWidth, bar.height, barWidth / 2);
        context.fill();
      }
    }

    function tick(now: number) {
      const delta = Math.min((now - (lastTime || now - 16)) / 1000, .033);
      lastTime = now;
      phase.current += delta;
      draw(delta);
      frame = requestAnimationFrame(tick);
    }

    function sync() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      if (playing && visible && !document.hidden) frame = requestAnimationFrame(tick);
      else draw();
    }

    const resize = new ResizeObserver(() => {
      const bounds = region.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      element.width = Math.round(width * ratio);
      element.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    });
    resize.observe(region);
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    visibility.observe(region);
    document.addEventListener('visibilitychange', sync);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); visibility.disconnect(); document.removeEventListener('visibilitychange', sync); };
  }, [playing]);

  return <div className="sound-sculpture">
    <div ref={wrapper} className="liquid-sound" aria-hidden="true" onPointerMove={event => {
      if (event.pointerType !== 'mouse' || !playing) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      pointer.current = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    }} onPointerLeave={() => { pointer.current = { x: -1000, y: 0 }; }}>
      <canvas ref={canvas} />
    </div>
    <LocalizedElement as="button" className="sound-control" onClick={() => setPlaying(value => !value)} aria-label={playing ? 'Pause sound animation' : 'Play sound animation'}>{playing ? <Pause size={14} /> : <Play size={14} />}<span><T>{playing ? 'Pause animation' : 'Play animation'}</T></span></LocalizedElement>
  </div>;
}
