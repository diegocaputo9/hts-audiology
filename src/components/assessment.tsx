'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, LockKeyhole, Printer } from 'lucide-react';
import Link from 'next/link';
import { questions, reflectionScore } from '@/lib/check-in.mjs';

export function Assessment() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(5).fill(null));
  const heading = useRef<HTMLHeadingElement>(null);
  const legend = useRef<HTMLLegendElement>(null);
  const mounted = useRef(false);
  useEffect(() => { if (!mounted.current) { mounted.current = true; return; } (legend.current || heading.current)?.focus(); }, [step]);
  const question = questions[step];
  const reset = () => { setAnswers(Array(5).fill(null)); setStep(-1); };
  return <div className="assessment-wrap"><section className="assessment" aria-label="Private tinnitus check-in">
    {step === -1 ? <><h1 ref={heading} tabIndex={-1}>A moment for<br />how you’re feeling.</h1><p>Tinnitus is personal. These five questions help you reflect on the past week and prepare for a conversation with your audiologist.</p><div className="notice">This is an original wellness check-in, not the validated Tinnitus Functional Index (TFI) or a diagnosis. Your reflection score describes only the answers you give here.</div><p>About 2 minutes. No name, email, or signup.</p><button className="button" onClick={() => setStep(0)}>Begin your check-in <ArrowRight size={17} /></button></> : step < 5 ? <>
      <div className="assessment-progress-label"><span>Tinnitus check-in</span><span>Question {step + 1} of 5</span></div><progress aria-label="Question progress" max={5} value={step + 1} />
      <fieldset key={step}><legend ref={legend} tabIndex={-1}>{question.title}</legend><p id="question-hint" className="question-hint">{question.hint}</p><div className="rating-options" role="radiogroup" aria-label={question.title} aria-describedby="question-hint">{Array.from({ length: 11 }, (_, value) => <label key={value}><input type="radio" name={`question-${step}`} value={value} checked={answers[step] === value} aria-label={`${value} out of 10${value === 0 ? `, ${question.low}` : value === 10 ? `, ${question.high}` : ''}`} onChange={() => setAnswers(current => current.map((a, i) => i === step ? value : a))} /><span>{value}</span></label>)}</div><div className="rating-endpoints"><span>0 · {question.low}</span><span>10 · {question.high}</span></div></fieldset>
      <div className="assessment-actions"><button onClick={() => setStep(step - 1)}>Back</button><button className="button" disabled={answers[step] === null} onClick={() => setStep(step + 1)}>{step === 4 ? 'See my reflection' : 'Next question'}<ArrowRight size={16} /></button></div>
    </> : <><h1 ref={heading} tabIndex={-1}>Your experience<br />deserves to be heard.</h1><div className="score-value">{reflectionScore(answers)}<span>/ 100</span></div><p className="result-summary">Your personal reflection score</p><p>A higher number reflects more impact in the five areas you rated. There are no clinical cutoffs for this original check-in. It cannot diagnose tinnitus, measure medical severity, or predict a treatment result.</p><p>{answers.some(a => (a ?? 0) >= 7) ? 'You described a strong impact in at least one area. Consider sharing what has been most difficult with Dr. Melton.' : 'Whether the impact feels small or substantial, you can discuss your questions and options with Dr. Melton.'}</p><ul className="checklist">{questions.map((q, i) => <li key={q.title}>{q.title} <strong>{answers[i]} / 10</strong></li>)}</ul><div className="result-actions"><Link className="button" href="/book/">Talk with Dr. Melton <ArrowUpRight size={16} /></Link><button className="button button-outline" onClick={() => window.print()}>Print my reflection <Printer size={16} /></button></div><div className="assessment-actions"><button onClick={reset}>Clear answers & start again</button><button onClick={() => setStep(4)}>Review my answers</button></div><div className="notice">If tinnitus comes with sudden hearing loss, seek urgent medical evaluation. New pulsating sounds or other concerning symptoms should be discussed with a healthcare professional.</div></>}
    <p className="privacy-note"><LockKeyhole size={14} />Your answers stay in this page’s memory. They are not saved or sent to the clinic. Refreshing or leaving this page clears them.</p>
  </section></div>;
}
