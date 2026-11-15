'use client';

import { createContext, useContext, useEffect, useState, Children, createElement, type ReactNode, type ComponentProps } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import spanish from '@/lib/i18n/es.json';

const dictionary: Record<string, string> = spanish;
const lowerKeys = new Map(Object.keys(dictionary).map(key => [key.toLowerCase(), key]));
export type Language = 'en' | 'es';
export function translateText(text: string, language: Language): string {
  if (language === 'en' || !/[A-Za-z]/.test(text)) return text;
  const key = text.replace(/\s+/g, ' ').trim();
  const found = dictionary[key] ?? dictionary[lowerKeys.get(key.toLowerCase()) || ''];
  let result = found;
  if (!result) {
    const rating = key.match(/^(.*): (\d+) out of 10$/);
    const value = key.match(/^(\d+) out of 10(?:, (.*))?$/);
    const highest = key.match(/^Your highest rating was (\d+) out of 10, in (.+)\. Start by sharing what these areas have been like for you\.$/);
    const google = key.match(/^View (\d+) Google reviews, rated ([\d.]+) out of 5, as of (.+) \(opens in a new tab\)$/);
    if (rating) result = `${translateText(rating[1], language)}: ${rating[2]} de 10`;
    else if (value) result = `${value[1]} de 10${value[2] ? `, ${translateText(value[2], language)}` : ''}`;
    else if (highest) result = `Su valoración más alta fue ${highest[1]} de 10, en ${highest[2].split(', ').map(area => translateText(area, language)).join(', ')}. Comience por compartir cómo han sido estas áreas para usted.`;
    else if (google) result = `Ver ${google[1]} reseñas de Google, con ${google[2]} de 5, datos de ${translateText(google[3], language)} (se abre en una pestaña nueva)`;
    else if (/^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|January|February|March|April|May|June|July|August|September|October|November|December)(,| )/.test(key)) {
      const clean = key.replace(/, clinic closed$/, '').replace(/, past date$/, '');
      const date = new Date(clean);
      if (!Number.isNaN(date.getTime())) {
        const monthOnly = /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{4}$/.test(clean);
        result = date.toLocaleDateString('es-US', monthOnly ? { month:'long', year:'numeric' } : { weekday:'long', month:'long', day:'numeric', ...( /\d{4}/.test(clean) ? { year:'numeric' as const } : {}) });
        if (key.endsWith(', clinic closed')) result += ', clínica cerrada';
        if (key.endsWith(', past date')) result += ', fecha pasada';
      }
    }
  }
  if (!result) return text;
  if (/^[a-z]/.test(key) && lowerKeys.has(key.toLowerCase()) && !dictionary[key]) result = result[0].toLocaleLowerCase('es') + result.slice(1);
  return `${/^\s/.test(text) ? ' ' : ''}${result}${/\s$/.test(text) ? ' ' : ''}`;
}
const LanguageContext = createContext({ language: 'en' as Language, setLanguage: (_: Language) => {}, t: (text: string) => text });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const path = usePathname();
  const t = (text: string) => translateText(text, language);
  useEffect(() => {
    document.documentElement.lang = language;
    const slug = path.split('/').filter(Boolean).at(-1) || '';
    const titles: Record<string, string> = { about:'Our people', hearing:'Hearing care', tinnitus:'Tinnitus care', cognition:'Hearing & cognition', resources:'Patient resources', contact:'Find our clinic', book:'Book your visit', privacy:'Website privacy', accessibility:'Accessibility', assessment:'Private tinnitus check in' };
    if (titles[slug]) document.title = `${t(titles[slug])} | Hearing & Tinnitus Solutions`;
  }, [language, path]);
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
export function T({ children }: { children?: ReactNode }) {
  const { t } = useLanguage();
  return <>{Children.map(children, child => typeof child === 'string' ? t(child) : child)}</>;
}
function translateAttributes(props: Record<string, unknown>, t: (value: string) => string) {
  const next = { ...props };
  for (const key of ['alt', 'title', 'aria-label', 'aria-valuetext', 'placeholder']) if (typeof next[key] === 'string') next[key] = t(next[key] as string);
  return next;
}
export function LocalizedElement({ as, ...props }: { as: string; children?: ReactNode; [key: string]: unknown }) {
  const { t } = useLanguage();
  return createElement(as, translateAttributes(props, t));
}
export function LocalizedLink(props: ComponentProps<typeof NextLink>) {
  const { t } = useLanguage();
  return <NextLink {...props} aria-label={props['aria-label'] ? t(props['aria-label']) : undefined} title={props.title ? t(props.title) : undefined} />;
}
export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();
  return <div className={`language-switcher${compact ? ' is-compact-switcher' : ''}`} role="group" aria-label="Language / Idioma">
    <button type="button" lang="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>{compact ? 'EN' : 'English'}</button>
    <span aria-hidden="true">/</span>
    <button type="button" lang="es" aria-label="Español" aria-pressed={language === 'es'} onClick={() => setLanguage('es')}>{compact ? 'ES' : 'Español'}</button>
  </div>;
}

export function HeaderLanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return <button type="button" className="header-language-toggle" lang={language === 'en' ? 'es' : 'en'} aria-label={language === 'en' ? 'Ver el sitio en español' : 'View the website in English'} onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>{language === 'en' ? 'ES' : 'EN'}</button>;
}
