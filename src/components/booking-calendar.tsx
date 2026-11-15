'use client';
import { T, LocalizedElement, useLanguage } from '@/components/language';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, ArrowUpRight } from 'lucide-react';
import { clinic } from '@/lib/clinic';

export function BookingCalendar() {
  const { language } = useLanguage();
  const dateLocale = language === 'es' ? 'es-US' : 'en-US';
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => {
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Denver', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
    const part = (type: string) => Number(parts.find(p => p.type === type)?.value);
    setToday(new Date(part('year'), part('month') - 1, part('day')));
  }, []);
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState<Date | null>(null);
  if (!today) return <div className="calendar" role="status"><T>Loading the clinic day planner…</T></div>;
  const month = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  const first = month.getDay();
  const count = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  return <div className="booking-grid"><LocalizedElement as="section" className="calendar" aria-label="Clinic day planner">
    <div className="calendar-header"><h2 aria-live="polite"><T>{month.toLocaleDateString(dateLocale, { month: 'long', year: 'numeric' })}</T></h2><div><LocalizedElement as="button" disabled={offset === 0} onClick={() => setOffset(offset - 1)} aria-label="Previous month"><ChevronLeft size={16} /></LocalizedElement><LocalizedElement as="button" disabled={offset === 5} onClick={() => setOffset(offset + 1)} aria-label="Next month"><ChevronRight size={16} /></LocalizedElement></div></div>
    <div className="calendar-week" aria-hidden="true">{(language === 'es' ? ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'] : ['S', 'M', 'T', 'W', 'T', 'F', 'S']).map((d, i) => <span key={i}><T>{d}</T></span>)}</div>
    <div className="calendar-days"><T>{Array.from({ length: first }, (_, i) => <span key={`blank-${i}`} />)}{Array.from({ length: count }, (_, i) => {
      const date = new Date(month.getFullYear(), month.getMonth(), i + 1);
      const closed = date.getDay() === 0 || date.getDay() === 6;
      const past = date < today;
      const isSelected = date.toDateString() === selected?.toDateString();
      return <LocalizedElement as="button" key={i} disabled={closed || past} aria-label={`${date.toLocaleDateString(dateLocale, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}${closed ? ', clinic closed' : past ? ', past date' : ''}`} aria-pressed={isSelected} className={isSelected ? 'selected' : ''} onClick={() => setSelected(date)}><T>{i + 1}</T></LocalizedElement>;
    })}</T></div>
    <p className="calendar-note"><T>Clinic hours planner · Not live availability</T><br /><T>Weekends and past dates are unavailable. Holidays and booked times are confirmed by the team.</T></p>
  </LocalizedElement><section className="booking-info"><h2><T>Let’s find a time</T><br /><T>that works for you.</T></h2><div aria-live="polite">{selected ? <div className="booking-selection"><strong><T>{selected.toLocaleDateString(dateLocale, { weekday: 'long', month: 'long', day: 'numeric' })}</T></strong><span><T>Usual hours: {selected.getDay() === 5 ? '8:30am to 12pm' : '8:30am to 12pm & 1pm to 4:30pm'}</T> <T>Mountain Time.</T><br /><T>This is your preferred day; an appointment has not been booked.</T></span></div> : null}</div><p><T>Our team handles scheduling personally. Call or text to confirm an appointment, ask a question, or discuss home visits and telecare.</T></p><a className="button" href={clinic.phoneHref}><Phone size={16} /><T>Call {clinic.phone}</T><ArrowUpRight size={17} /></a><p><T>Monday to Thursday, 8:30am to 12pm & 1 to 4:30pm</T><br /><T>Friday, 8:30am to 12pm</T><br /><T>All hours are Mountain Time.</T></p><div className="notice"><T>To protect your privacy, please discuss medical details directly with the clinic. This planner does not collect or send your information.</T></div></section></div>;
}
