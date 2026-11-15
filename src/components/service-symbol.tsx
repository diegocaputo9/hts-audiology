type ServiceId = 'hearing-exams' | 'hearing-aids' | 'ear-cleaning' | 'tinnitus-treatment' | 'hearing-protection';

/** A small, consistent set of line drawings; the adjacent service name supplies the label. */
export function ServiceSymbol({ service }: { service: ServiceId }) {
  return <svg className="service-symbol" viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {service === 'hearing-exams' && <>
      <path d="M13 17a8 8 0 0 1 16 0c0 4.8-3 6.2-5.4 8.3-1.7 1.5-1.5 5.7-5.2 5.7-2.7 0-4.4-1.9-4.4-4.5" />
      <path d="M17 17a4 4 0 0 1 8 0c0 3-4.5 3.3-4.5 6.5M7 14v10M4 17v4" />
    </>}
    {service === 'hearing-aids' && <>
      <path d="M24 22V13a4 4 0 0 0-8 0v7.5c0 4.5 2 8.5 5 8.5 2 0 3-1.7 3-4v-3Z" />
      <path d="M20 9c0-4 9-4 10 2 1.1 6.2-3 9.4-3 13v5M25 29h4v5h-4zM19 15v5" />
    </>}
    {service === 'ear-cleaning' && <>
      <path d="M10 17a8 8 0 0 1 16 0c0 4.8-3 6.2-5.4 8.3-1.7 1.5-1.5 5.7-5.2 5.7-2.7 0-4.4-1.9-4.4-4.5M14 17a4 4 0 0 1 8 0c0 3-4.5 3.3-4.5 6.5" />
      <path d="m31 11 .9 3.1L35 15l-3.1.9L31 19l-.9-3.1L27 15l3.1-.9L31 11Z" />
    </>}
    {service === 'tinnitus-treatment' && <>
      <path d="M8 17v6M14 12v16M20 8v24M26 13v14M32 17v6" />
    </>}
    {service === 'hearing-protection' && <>
      <path d="m20 5 12 5v10c0 7.1-6.6 12.1-12 15-5.4-2.9-12-7.9-12-15V10l12-5Z" />
      <path d="M15 18v4M20 14v12M25 18v4" />
    </>}
  </svg>;
}
