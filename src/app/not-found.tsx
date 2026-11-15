import { T } from '@/components/language';
import { LocalizedLink as Link } from '@/components/language';
export default function NotFound() { return <div className="container not-found"><h1><T>Let’s get you</T><br /><T>back on track.</T></h1><p><T>We couldn’t find that page. Our team and care options are right here.</T></p><Link className="button" href="/"><T>Return home</T></Link></div>; }
