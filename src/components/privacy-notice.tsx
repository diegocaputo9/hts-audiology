import { T } from '@/components/language';
import { clinic } from '@/lib/clinic';

export function PrivacyNotice() {
  return <article className="legal-content privacy-notice">
    <p><T>Last updated November 14, 2026.</T></p>
    <p><T>Hearing & Tinnitus Solutions, P.C. respects your privacy. This notice explains information associated with this website, your inquiries, and our customer care text messages. The practice’s separate Notice of Privacy Practices explains how protected health information is handled in clinical care. Contact us to request a copy.</T></p>

    <h2><T>Information you choose to provide</T></h2>
    <p><T>If you call, text, or email the practice, we receive the information you choose to share, such as your contact details and inquiry. We use that information to respond, help arrange care, provide customer support, and communicate about our services. Please ask the clinic for a secure way to send medical records or sensitive health information.</T></p>
    <p><T>This website has no patient accounts, online payment collection, medical uploads, or appointment submission form. It does not sell personal information or use advertising pixels or website analytics.</T></p>
    <p><T>The contact message window prepares an email draft using the name, email address, and message you enter. These entries stay in the current page’s memory until you leave or refresh; the website does not store or submit them to a server. Choosing “Send message” passes the draft to your email app. You review and send it there, and your email provider’s privacy practices apply. Please use this feature only for general questions.</T></p>

    <h2><T>Technical and device information</T></h2>
    <p><T>The website’s hosting and security providers may process technical information needed to deliver, maintain, and protect the service. This can include IP address, browser and device characteristics, operating system, pages requested, timestamps, and diagnostic or security logs. Approximate location may be inferred from an IP address. This website does not request GPS access or your precise device location.</T></p>

    <h2><T>Google Maps and external services</T></h2>
    <p><T>An embedded Google map loads automatically on pages that show our clinic location. Your browser connects to Google when the map loads. Google may receive technical information such as your IP address and device details and use cookies or similar technologies under its own policies. Read the </T><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"><T>Google Privacy Policy</T></a> <T>and use your browser or Google privacy settings to manage those services.</T></p>
    <p><T>Directions, social profiles, Google reviews, and the SHOEBOX hearing screening also link to external providers. Their privacy practices govern information you share with them. Blocking third party content may prevent an embedded map from appearing; the clinic address and directions link remain available.</T></p>

    <h2><T>Your tinnitus check in and day planner</T></h2>
    <p><T>Tinnitus check in answers are calculated in this page’s temporary browser memory. They are not saved or transmitted to the practice. Refreshing or leaving the page clears them. If you print or save a reflection, you control that copy.</T></p>
    <p><T>The day planner shows usual clinic days and hours. Your selection stays in the page and is not sent to the clinic. It does not access the clinic calendar or reserve an appointment; call the team to confirm availability.</T></p>

    <h2><T>SMS terms and your choices</T></h2>
    <p><T>By opting into SMS through an authorized form or another medium, you agree to receive customer care text messages from Hearing & Tinnitus Solutions. Message frequency varies. Message and data rates may apply.</T></p>
    <p><T>Reply </T><strong><T>HELP</T></strong> <T>for help. Reply </T><strong><T>STOP</T></strong> <T>to any message to opt out. You can also call </T><a href={clinic.phoneHref}><T>{clinic.phone}</T></a> <T>for assistance. Visiting this website or using its day planner does not opt you into text messages.</T></p>
    <p><strong><T>SMS consent is not shared with third parties.</T></strong> <T>Mobile opt in information is not sold or shared for third party marketing. Information needed to deliver customer care messages is handled through service providers acting for the practice.</T></p>

    <h2><T>How information is used and shared</T></h2>
    <p><T>We use information to answer inquiries, provide requested services, send relevant administrative or customer care communications, maintain security, enforce applicable terms, and comply with legal obligations. Where applicable, processing relies on your consent, providing requested services, legitimate operational interests, or legal requirements.</T></p>
    <p><T>Information may be shared with service providers as needed to operate those services, with your consent, where legally required, to protect rights or safety, or as part of a business transfer subject to applicable privacy obligations. SMS consent remains subject to the specific restrictions above.</T></p>

    <h2><T>Retention and international processing</T></h2>
    <p><T>We retain routine website related inquiry information only as long as needed for the purposes described in this notice, generally no longer than two years unless a longer period is required or permitted by law. Information that is no longer needed is deleted, anonymized, or securely isolated where immediate deletion is not possible. Clinical records follow separate medical record retention requirements.</T></p>
    <p><T>Hosting, security, map, and communication providers may process information in countries other than your own and apply their own retention policies. Applicable protections and legal requirements depend on the service and information involved.</T></p>

    <h2><T>Security and children’s privacy</T></h2>
    <p><T>We use safeguards intended to protect information processed for our services. No internet transmission or storage method can be guaranteed completely secure. Please use the clinic’s recommended communication method for sensitive information.</T></p>
    <p><T>We do not knowingly solicit personal information from children under 18 through this website. Parents or guardians can contact the practice about care for a child. If you believe a child has provided personal information without appropriate permission, please contact us.</T></p>

    <h2><T>Your privacy rights</T></h2>
    <p><T>Depending on the law that applies to you, you may have rights to access, correct, delete, or restrict use of personal information, or withdraw consent. California residents may request information about personal information disclosed for direct marketing where applicable. Contact us to make a request; we may need to verify your identity. Some records must be retained to meet legal or clinical obligations.</T></p>
    <p><T>There are no patient accounts on this website to review or close. We do not add advertising trackers or analytics. Browser Do Not Track signals do not change the operation of this site, and external providers have their own privacy controls.</T></p>

    <h2><T>Updates and contact</T></h2>
    <p><T>We may update this notice as our services or applicable requirements change. The updated date appears at the top. Material changes may also be communicated through the website or directly where appropriate.</T></p>
    <p><T>For privacy questions, requests, SMS support, or a copy of the clinical Notice of Privacy Practices, contact Hearing & Tinnitus Solutions at </T><a href={`mailto:${clinic.email}`}><T>{clinic.email}</T></a>, <a href={clinic.phoneHref}><T>{clinic.phone}</T></a><T>, or {clinic.address}</T>, <T>{clinic.city}</T>.</p>

    <h2 id="website-content-credits"><T>Website content and imagery</T></h2>
    <p><T>Website information is educational and does not replace an individual medical evaluation. Clinic scenes are AI generated illustrations; named provider portraits are adapted from the practice’s existing photographs. The service illustration of Dr. Melton is AI generated using his portrait as a reference and does not depict a real patient visit. The tinnitus check in is an original reflection tool and is not the validated Tinnitus Functional Index.</T></p>
  </article>;
}
