'use client';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, ArrowUpRight } from 'lucide-react';
import { clinic } from '@/lib/clinic';

export function BookingCalendar() {
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => {
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Denver', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
    const part = (type: string) => Number(parts.find(p => p.type === type)?.value);
    setToday(new Date(part('year'), part('month') - 1, part('day')));
  }, []);
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState<Date | null>(null);
  if (!today) return <div className="calendar" role="status">Loading the clinic day planner…</div>;
  const month = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  const first = month.getDay();
  const count = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  return <div className="booking-grid"><section className="calendar" aria-label="Clinic day planner">
    <div className="calendar-header"><h2 aria-live="polite">{month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2><div><button disabled={offset === 0} onClick={() => setOffset(offset - 1)} aria-label="Previous month"><ChevronLeft size={16} /></button><button disabled={offset === 5} onClick={() => setOffset(offset + 1)} aria-label="Next month"><ChevronRight size={16} /></button></div></div>
    <div className="calendar-week" aria-hidden="true">{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i}>{d}</span>)}</div>
    <div className="calendar-days">{Array.from({ length: first }, (_, i) => <span key={`blank-${i}`} />)}{Array.from({ length: count }, (_, i) => {
      const date = new Date(month.getFullYear(), month.getMonth(), i + 1);
      const closed = date.getDay() === 0 || date.getDay() === 6;
      const past = date < today;
      const isSelected = date.toDateString() === selected?.toDateString();
      return <button key={i} disabled={closed || past} aria-label={`${date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}${closed ? ', clinic closed' : past ? ', past date' : ''}`} aria-pressed={isSelected} className={isSelected ? 'selected' : ''} onClick={() => setSelected(date)}>{i + 1}</button>;
    })}</div>
    <p className="calendar-note">Clinic hours planner · Not live availability<br />Weekends and past dates are unavailable. Holidays and booked times are confirmed by the team.</p>
  </section><section className="booking-info"><h2>Let’s find a time<br />that works for you.</h2><div aria-live="polite">{selected ? <div className="booking-selection"><strong>{selected.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong><span>Usual hours: {selected.getDay() === 5 ? '8:30am–12pm' : '8:30am–12pm & 1pm–4:30pm'} Mountain Time.<br />This is your preferred day; an appointment has not been booked.</span></div> : null}</div><p>Our team handles scheduling personally. Call or text to confirm an appointment, ask a question, or discuss home visits and telecare.</p><a className="button" href={clinic.phoneHref}><Phone size={16} />Call {clinic.phone}<ArrowUpRight size={17} /></a><p>Monday–Thursday, 8:30am–12pm & 1–4:30pm<br />Friday, 8:30am–12pm<br />All hours are Mountain Time.</p><div className="notice">To protect your privacy, please discuss medical details directly with the clinic. This planner does not collect or send your information.</div></section></div>;
}
