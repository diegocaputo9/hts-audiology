import { T, LocalizedElement } from '@/components/language';
import { Facebook, Instagram, ArrowUpRight, Star } from 'lucide-react';
import { clinic } from '@/lib/clinic';

export function SocialLinks() {
  return <LocalizedElement as="div" className="social-links" role="group" aria-label="Clinic social profiles">
    <LocalizedElement as="a" className="social-profile-link" href={clinic.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Hearing and Tinnitus Solutions on Facebook (opens in a new tab)"><Facebook size={19} aria-hidden="true" /></LocalizedElement>
    <LocalizedElement as="a" className="social-profile-link" href={clinic.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Hearing and Tinnitus Solutions on Instagram (opens in a new tab)"><Instagram size={20} aria-hidden="true" /></LocalizedElement>
  </LocalizedElement>;
}

export function GoogleReviews() {
  const review = clinic.googleReviewSnapshot;
  return <LocalizedElement as="a" className="google-reviews-link" href={clinic.googleBusiness} target="_blank" rel="noopener noreferrer" aria-label={`View ${review.count} Google reviews, rated ${review.rating} out of 5, as of ${review.asOf} (opens in a new tab)`}>
    <span className="google-review-score" aria-hidden="true"><strong><T>{review.rating}</T></strong><span className="google-review-stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}</span></span>
    <span className="google-review-caption"><span><T>{review.count}</T> <T>Google reviews </T><ArrowUpRight size={13} aria-hidden="true" /></span><small><T>As of {review.asOf}</T></small></span>
  </LocalizedElement>;
}
