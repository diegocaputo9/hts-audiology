import { publicAsset } from '@/lib/public-asset';

import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { motionTiming } from '@/lib/motion';
import '@fontsource-variable/manrope';
import './globals.css';
import { LanguageProvider, T } from '@/components/language';
import { Header, Footer, SiteMotion } from '@/components/site-shell';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_PATH ? 'https://diegocaputo9.github.io' : 'https://hts-audiology-melton.ovalspice5.chatgpt.site'),
  title: { default: 'Hearing & Tinnitus Solutions | Dr. Robert Melton | Pagosa Springs', template: '%s | Hearing & Tinnitus Solutions' },
  description: 'Personal hearing and tinnitus care with Dr. Robert Melton, AuD in Pagosa Springs, Colorado. Hearing evaluations, hearing aids, ear cleaning, and tinnitus management.',
  robots: { index: false, follow: false },
  icons: { icon: publicAsset('/icon.svg') },
  openGraph: { title: 'Hearing & Tinnitus Solutions', description: 'Personal hearing and tinnitus care in Pagosa Springs, Colorado.', siteName: 'Hearing & Tinnitus Solutions', url: process.env.NEXT_PUBLIC_BASE_PATH ? 'https://diegocaputo9.github.io/hts-audiology/' : '/', images: [{ url: publicAsset('/images/hts-melton-share-v2.png'), width:1200, height:630, type:'image/png', alt:'Dr. Robert Melton on a light background with Hearing & Tinnitus Solutions' }], type: 'website' },
  twitter: { card:'summary_large_image', title:'Hearing & Tinnitus Solutions', description:'Personal hearing and tinnitus care in Pagosa Springs, Colorado.', images:[publicAsset('/images/hts-melton-share-v2.png')] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" style={{ '--press-duration': `${motionTiming.press * 1000}ms`, '--reveal-duration': `${motionTiming.reveal * 1000}ms`, '--scene-duration': `${motionTiming.scene * 1000}ms` } as CSSProperties}><body><LanguageProvider><SiteMotion><a href="#main" className="skip-link"><T>Skip to content</T></a><Header /><main id="main">{children}</main><Footer /></SiteMotion></LanguageProvider></body></html>;
}
