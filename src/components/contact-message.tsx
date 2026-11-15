'use client';
import { T, LocalizedElement, useLanguage } from '@/components/language';

import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Copy, Mail, X } from 'lucide-react';
import { clinic } from '@/lib/clinic';

export function ContactMessage() {
  const { t, language } = useLanguage();
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
      input.setCustomValidity(value ? '' : language === 'es' ? (field === 'name' ? 'Escriba su nombre.' : 'Escriba su mensaje.') : `Please enter your ${field}.`);
    }
    if (!form.reportValidity()) return;
    const body = `${t('Name')}: ${name}\n${t('Email address')}: ${email}\n\n${message}`;
    setDraft(body);
    setCopyStatus('');
    window.location.href = `mailto:${clinic.email}?subject=${encodeURIComponent(t('Website inquiry: Hearing & Tinnitus Solutions'))}&body=${encodeURIComponent(body)}`;
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
    <button className="button button-outline" type="button" onClick={() => dialog.current?.showModal()} aria-haspopup="dialog" aria-controls="contact-message-dialog"><Mail size={18} /><T>Send a message</T><ArrowUpRight size={17} /></button>
    <dialog ref={dialog} id="contact-message-dialog" className="contact-dialog" aria-labelledby="contact-message-title" aria-describedby="contact-message-intro">
      <div className="contact-dialog-heading"><h2 id="contact-message-title"><T>A conversation</T><br /><T>starts here.</T></h2><LocalizedElement as="button" className="dialog-close icon-button" type="button" onClick={() => dialog.current?.close()} aria-label="Close message window"><X size={22} /></LocalizedElement></div>
      <p id="contact-message-intro"><T>Write to our team. We’ll open your email app with your message ready to send.</T></p>
      <form onInvalid={event => {
        const input = event.target as HTMLInputElement | HTMLTextAreaElement;
        if (input.validity.valueMissing) input.setCustomValidity(t(input.name === 'name' ? 'Please enter your name.' : input.name === 'email' ? 'Please enter your email address.' : 'Please enter a message.'));
        else if (input.name === 'email' && input.validity.typeMismatch) input.setCustomValidity(t('Please enter a valid email address.'));
      }} onInputCapture={event => (event.target as HTMLInputElement | HTMLTextAreaElement).setCustomValidity('')} action={`mailto:${clinic.email}`} method="post" encType="text/plain" onSubmit={prepareEmail} onChange={() => { setDraft(''); setCopyStatus(''); }}>
        <p className="contact-required"><T>All fields are required.</T></p>
        <div className="contact-field"><label htmlFor="contact-name"><T>Name</T></label><input id="contact-name" name="name" autoComplete="name" maxLength={100} required autoFocus onInput={event => event.currentTarget.setCustomValidity('')} /></div>
        <div className="contact-field"><label htmlFor="contact-email"><T>Email address</T></label><input id="contact-email" name="email" type="email" autoComplete="email" autoCapitalize="none" autoCorrect="off" spellCheck={false} maxLength={254} required /></div>
        <div className="contact-field"><label htmlFor="contact-message"><T>Message</T></label><textarea id="contact-message" name="message" rows={4} maxLength={2000} required aria-describedby="contact-message-privacy" onInput={event => event.currentTarget.setCustomValidity('')} /></div>
        <p className="contact-privacy" id="contact-message-privacy"><T>For general questions only. Please leave out medical records and sensitive health information.</T></p>
        <button className="button contact-send" type="submit"><T>Send message</T><ArrowUpRight size={18} /></button>
        <p className="contact-delivery"><T>Opens your email app. Review your draft and send it there.</T></p>
        {draft && <div className="contact-handoff"><p role="status"><T>Your message is ready for your email app. It hasn’t been sent by this website.</T></p><p><T>If no draft opens, email </T><a href={`mailto:${clinic.email}`}><T>{clinic.email}</T></a> <T>and copy your message below.</T></p><button type="button" className="text-link" onClick={copyDraft}><T>Copy message</T><Copy size={16} /></button><p role="status"><T>{copyStatus}</T></p></div>}
      </form>
    </dialog>
  </>;
}
