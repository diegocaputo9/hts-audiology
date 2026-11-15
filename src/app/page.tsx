import { MotionHeading } from '@/components/motion-heading';
import { T, LocalizedElement, LanguageSwitcher } from '@/components/language';
import { publicAsset } from '@/lib/public-asset';
import { clinic } from '@/lib/clinic';

import { LocalizedLink as Link } from '@/components/language';
import { ArrowUpRight } from 'lucide-react';
import { Hero, Reveal } from '@/components/motion-parts';
import { ServiceExplorer, VisitSection, ClosingCTA } from '@/components/home-content';
import { ServiceDetails } from '@/components/service-details';
import { ProviderStory } from '@/components/provider-story';
import { LiquidSound } from '@/components/liquid-sound';

export default function Home() {
  return <>
    <Hero />
    <div className="care-shortcuts-band"><div className="care-shortcuts container">{[['Hearing', 'Rediscover what matters.', '/hearing/'], ['Tinnitus', 'Find your way to relief.', '/tinnitus/'], ['Cognition', 'Connect the bigger picture.', '/cognition/']].map(([title, desc, href]) => <Link href={href} key={href}><div><h2><T>{title}</T></h2><p><T>{desc}</T></p></div><ArrowUpRight size={25} /></Link>)}</div></div>
    <section id="meet-dr-melton" className="provider-section section-space"><ProviderStory><Reveal className="provider-portrait"><div className="portrait-arch" /><LocalizedElement as="img" src={publicAsset("/images/robert-melton-cutout.webp")} alt="Dr. Robert Melton, Doctor of Audiology" width="1500" height="2000" loading="lazy" /><div className="portrait-caption"><strong><T>Robert Melton</T></strong><span><T>AuD · Doctor of Audiology</T></span></div></Reveal><Reveal className="provider-copy"><MotionHeading><T>Good care starts</T><br /><T>with being heard.</T></MotionHeading><p className="large-copy"><T>Your hearing is personal.</T><br /><T>Your care should be, too.</T></p><div className="provider-language-note"><span lang="es">También hablamos español.</span><LanguageSwitcher compact /></div><p><T>Meet Dr. Robert Melton. A Doctor of Audiology with specialized training in tinnitus care, he takes time to understand your experience, explain your options, and help you feel confident about what comes next.</T></p><p className="provider-mobile-detail"><T>Advanced audiology technology helps Dr. Melton and team tailor treatment to your needs. Care includes clinic appointments, telecare and home visits, plus tinnitus treatment and professional ear cleaning. A </T><a className="inline-care-link" href={clinic.screening} target="_blank" rel="noopener noreferrer"><T>complimentary online hearing screening</T></a> <T>is a simple place to begin.</T></p><p><T>Independent, evidence based care.</T><br /><T>A familiar face, right here in Pagosa Springs.</T></p><Link href="/about/" className="text-link"><T>Get to know Dr. Melton </T><ArrowUpRight size={18} /></Link><div className="provider-credentials"><span><T>Doctor of Audiology</T><br /><strong><T>Auburn University</T></strong></span><span><T>Specialized training</T><br /><strong><T>Tinnitus management</T></strong></span></div></Reveal></ProviderStory></section>
    <ServiceExplorer /><ServiceDetails />
    <section className="tinnitus-feature"><div className="container tinnitus-feature-inner"><Reveal><MotionHeading><T>When the ringing</T><br /><T>won’t quiet down,</T><br /><span><T>we’re here to listen.</T></span></MotionHeading><p><T>Take a moment to reflect on how tinnitus affects your day. A short check in can help you start the conversation.</T></p><Link className="button button-light" href="/assessment/"><T>Take the tinnitus check in </T><ArrowUpRight size={18} /></Link><small><T>5 questions · Private by design · No signup</T></small></Reveal><LiquidSound /></div></section>
    <VisitSection isHome /><ClosingCTA />
  </>;
}
