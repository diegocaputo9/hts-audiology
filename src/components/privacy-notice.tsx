import { clinic } from '@/lib/clinic';

export function PrivacyNotice() {
  return <article className="legal-content privacy-notice">
    <p>Last updated November 14, 2026.</p>
    <p>Hearing & Tinnitus Solutions, P.C. respects your privacy. This notice explains information associated with this website, your inquiries, and our customer care text messages. The practice’s separate Notice of Privacy Practices explains how protected health information is handled in clinical care. Contact us to request a copy.</p>

    <h2>Information you choose to provide</h2>
    <p>If you call, text, or email the practice, we receive the information you choose to share, such as your contact details and inquiry. We use that information to respond, help arrange care, provide customer support, and communicate about our services. Please ask the clinic for a secure way to send medical records or sensitive health information.</p>
    <p>This website has no patient accounts, online payment collection, medical uploads, or appointment submission form. It does not sell personal information or use advertising pixels or website analytics.</p>
    <p>The contact message window prepares an email draft using the name, email address, and message you enter. These entries stay in the current page’s memory until you leave or refresh; the website does not store or submit them to a server. Choosing “Send message” passes the draft to your email app. You review and send it there, and your email provider’s privacy practices apply. Please use this feature only for general questions.</p>

    <h2>Technical and device information</h2>
    <p>The website’s hosting and security providers may process technical information needed to deliver, maintain, and protect the service. This can include IP address, browser and device characteristics, operating system, pages requested, timestamps, and diagnostic or security logs. Approximate location may be inferred from an IP address. This website does not request GPS access or your precise device location.</p>

    <h2>Google Maps and external services</h2>
    <p>An embedded Google map loads automatically on pages that show our clinic location. Your browser connects to Google when the map loads. Google may receive technical information such as your IP address and device details and use cookies or similar technologies under its own policies. Read the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a> and use your browser or Google privacy settings to manage those services.</p>
    <p>Directions and the SHOEBOX hearing screening also link to external providers. Their privacy practices govern information you share with them. Blocking third party content may prevent an embedded map from appearing; the clinic address and directions link remain available.</p>

    <h2>Your tinnitus check in and day planner</h2>
    <p>Tinnitus check in answers are calculated in this page’s temporary browser memory. They are not saved or transmitted to the practice. Refreshing or leaving the page clears them. If you print or save a reflection, you control that copy.</p>
    <p>The day planner shows usual clinic days and hours. Your selection stays in the page and is not sent to the clinic. It does not access the clinic calendar or reserve an appointment; call the team to confirm availability.</p>

    <h2>SMS terms and your choices</h2>
    <p>By opting into SMS through an authorized form or another medium, you agree to receive customer care text messages from Hearing & Tinnitus Solutions. Message frequency varies. Message and data rates may apply.</p>
    <p>Reply <strong>HELP</strong> for help. Reply <strong>STOP</strong> to any message to opt out. You can also call <a href={clinic.phoneHref}>{clinic.phone}</a> for assistance. Visiting this website or using its day planner does not opt you into text messages.</p>
    <p><strong>SMS consent is not shared with third parties.</strong> Mobile opt in information is not sold or shared for third party marketing. Information needed to deliver customer care messages is handled through service providers acting for the practice.</p>

    <h2>How information is used and shared</h2>
    <p>We use information to answer inquiries, provide requested services, send relevant administrative or customer care communications, maintain security, enforce applicable terms, and comply with legal obligations. Where applicable, processing relies on your consent, providing requested services, legitimate operational interests, or legal requirements.</p>
    <p>Information may be shared with service providers as needed to operate those services, with your consent, where legally required, to protect rights or safety, or as part of a business transfer subject to applicable privacy obligations. SMS consent remains subject to the specific restrictions above.</p>

    <h2>Retention and international processing</h2>
    <p>We retain routine website related inquiry information only as long as needed for the purposes described in this notice, generally no longer than two years unless a longer period is required or permitted by law. Information that is no longer needed is deleted, anonymized, or securely isolated where immediate deletion is not possible. Clinical records follow separate medical record retention requirements.</p>
    <p>Hosting, security, map, and communication providers may process information in countries other than your own and apply their own retention policies. Applicable protections and legal requirements depend on the service and information involved.</p>

    <h2>Security and children’s privacy</h2>
    <p>We use safeguards intended to protect information processed for our services. No internet transmission or storage method can be guaranteed completely secure. Please use the clinic’s recommended communication method for sensitive information.</p>
    <p>We do not knowingly solicit personal information from children under 18 through this website. Parents or guardians can contact the practice about care for a child. If you believe a child has provided personal information without appropriate permission, please contact us.</p>

    <h2>Your privacy rights</h2>
    <p>Depending on the law that applies to you, you may have rights to access, correct, delete, or restrict use of personal information, or withdraw consent. California residents may request information about personal information disclosed for direct marketing where applicable. Contact us to make a request; we may need to verify your identity. Some records must be retained to meet legal or clinical obligations.</p>
    <p>There are no patient accounts on this website to review or close. We do not add advertising trackers or analytics. Browser Do Not Track signals do not change the operation of this site, and external providers have their own privacy controls.</p>

    <h2>Updates and contact</h2>
    <p>We may update this notice as our services or applicable requirements change. The updated date appears at the top. Material changes may also be communicated through the website or directly where appropriate.</p>
    <p>For privacy questions, requests, SMS support, or a copy of the clinical Notice of Privacy Practices, contact Hearing & Tinnitus Solutions at <a href={`mailto:${clinic.email}`}>{clinic.email}</a>, <a href={clinic.phoneHref}>{clinic.phone}</a>, or {clinic.address}, {clinic.city}.</p>

    <h2 id="website-content-credits">Website content and imagery</h2>
    <p>Website information is educational and does not replace an individual medical evaluation. Clinic scenes are AI generated illustrations; named provider portraits are adapted from the practice’s existing photographs. The service illustration of Dr. Melton is AI generated using his portrait as a reference and does not depict a real patient visit. The tinnitus check in is an original reflection tool and is not the validated Tinnitus Functional Index.</p>
  </article>;
}
