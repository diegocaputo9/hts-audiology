import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import './globals.css';
import { Header, Footer, SiteMotion } from '@/components/site-shell';

export const metadata: Metadata = {
  metadataBase: new URL('https://hts-audiology-melton.ovalspice5.chatgpt.site'),
  title: { default: 'Hearing & Tinnitus Solutions | Dr. Robert Melton | Pagosa Springs', template: '%s | Hearing & Tinnitus Solutions' },
  description: 'Personal hearing and tinnitus care with Dr. Robert Melton, AuD, CH-TM in Pagosa Springs, Colorado. Hearing evaluations, hearing aids, ear cleaning, and tinnitus management.',
  robots: { index: false, follow: false },
  icons: { icon: '/icon.svg' },
  openGraph: { title: 'Life sounds better connected.', description: 'Personal hearing and tinnitus care in Pagosa Springs, Colorado.', images: ['/images/consultation.jpg'], type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteMotion><a href="#main" className="skip-link">Skip to content</a><Header /><main id="main">{children}</main><Footer /></SiteMotion></body></html>;
}
