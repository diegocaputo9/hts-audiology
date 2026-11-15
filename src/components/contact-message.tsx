'use client';

import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Copy, Mail, X } from 'lucide-react';
import { clinic } from '@/lib/clinic';

export function ContactMessage() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [draft, setDraft] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    for (const [field, value] of [['name', name], ['message', message]]) {
      const input = form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement;
      input.setCustomValidity(value ? '' : `Please enter your ${field}.`);
    }
    if (!form.reportValidity()) return;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    setDraft(body);
    setCopyStatus('');
    window.location.href = `mailto:${clinic.email}?subject=${encodeURIComponent('Website inquiry: Hearing & Tinnitus Solutions')}&body=${encodeURIComponent(body)}`;
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus('Message copied. Paste it into an email to our team.');
    } catch {
      setCopyStatus('Copy isn’t available in this browser. Your text is still in the fields above.');
    }
  }

  return <>
    <button className="button button-outline" type="button" onClick={() => dialog.current?.showModal()} aria-haspopup="dialog" aria-controls="contact-message-dialog"><Mail size={18} />Send a message<ArrowUpRight size={17} /></button>
    <dialog ref={dialog} id="contact-message-dialog" className="contact-dialog" aria-labelledby="contact-message-title" aria-describedby="contact-message-intro">
      <div className="contact-dialog-heading"><h2 id="contact-message-title">A conversation<br />starts here.</h2><button className="dialog-close icon-button" type="button" onClick={() => dialog.current?.close()} aria-label="Close message window"><X size={22} /></button></div>
      <p id="contact-message-intro">Write to our team. We’ll open your email app with your message ready to send.</p>
      <form action={`mailto:${clinic.email}`} method="post" encType="text/plain" onSubmit={prepareEmail} onChange={() => { setDraft(''); setCopyStatus(''); }}>
        <p className="contact-required">All fields are required.</p>
        <div className="contact-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" maxLength={100} required autoFocus onInput={event => event.currentTarget.setCustomValidity('')} /></div>
        <div className="contact-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" autoCapitalize="none" autoCorrect="off" spellCheck={false} maxLength={254} required /></div>
        <div className="contact-field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={4} maxLength={2000} required aria-describedby="contact-message-privacy" onInput={event => event.currentTarget.setCustomValidity('')} /></div>
        <p className="contact-privacy" id="contact-message-privacy">For general questions only. Please leave out medical records and sensitive health information.</p>
        <button className="button contact-send" type="submit">Send message<ArrowUpRight size={18} /></button>
        <p className="contact-delivery">Opens your email app. Review your draft and send it there.</p>
        {draft && <div className="contact-handoff"><p role="status">Your message is ready for your email app. It hasn’t been sent by this website.</p><p>If no draft opens, email <a href={`mailto:${clinic.email}`}>{clinic.email}</a> and copy your message below.</p><button type="button" className="text-link" onClick={copyDraft}>Copy message<Copy size={16} /></button><p role="status">{copyStatus}</p></div>}
      </form>
    </dialog>
  </>;
}
