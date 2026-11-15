import { publicAsset } from '@/lib/public-asset';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Hero, Reveal } from '@/components/motion-parts';
import { ServiceExplorer, VisitSection, ClosingCTA } from '@/components/home-content';
import { ServiceDetails } from '@/components/service-details';
import { ProviderStory } from '@/components/provider-story';
import { LiquidSound } from '@/components/liquid-sound';

export default function Home() {
  return <>
    <Hero />
    <div className="care-shortcuts-band"><div className="care-shortcuts container">{[['Hearing', 'Rediscover what matters.', '/hearing/'], ['Tinnitus', 'Find your way to relief.', '/tinnitus/'], ['Cognition', 'Connect the bigger picture.', '/cognition/']].map(([title, desc, href]) => <Link href={href} key={href}><div><h2>{title}</h2><p>{desc}</p></div><ArrowUpRight size={25} /></Link>)}</div></div>
    <section id="meet-dr-melton" className="provider-section section-space"><ProviderStory><Reveal className="provider-portrait"><div className="portrait-arch" /><img src={publicAsset("/images/robert-melton-cutout.webp")} alt="Dr. Robert Melton, Doctor of Audiology" width="1500" height="2000" loading="lazy" /><div className="portrait-caption"><strong>Robert Melton</strong><span>AuD, CH-TM · Doctor of Audiology</span></div></Reveal><Reveal className="provider-copy" delay={.12}><h2>Good care starts<br />with being heard.</h2><p className="large-copy">Your hearing is personal.<br />Your care should be, too.</p><p>Meet Dr. Robert Melton. A Doctor of Audiology with specialized training in tinnitus care, he takes time to understand your experience, explain your options, and help you feel confident about what comes next.</p><p>Independent, evidence-based care.<br />A familiar face, right here in Pagosa Springs.</p><Link href="/about/" className="text-link">Get to know Dr. Melton <ArrowUpRight size={18} /></Link><div className="provider-credentials"><span>Doctor of Audiology<br /><strong>Auburn University</strong></span><span>Specialized training<br /><strong>Tinnitus management</strong></span></div></Reveal></ProviderStory></section>
    <ServiceExplorer /><ServiceDetails />
    <section className="tinnitus-feature"><div className="container tinnitus-feature-inner"><Reveal><h2>When the ringing<br />won’t quiet down,<br /><span>we’re here to listen.</span></h2><p>Take a moment to reflect on how tinnitus affects your day. A short check-in can help you start the conversation.</p><Link className="button button-light" href="/assessment/">Take the tinnitus check-in <ArrowUpRight size={18} /></Link><small>5 questions · Private by design · No signup</small></Reveal><LiquidSound /></div></section>
    <VisitSection /><ClosingCTA />
  </>;
}
