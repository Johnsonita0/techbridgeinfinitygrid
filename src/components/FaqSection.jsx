import { useState } from 'react';

const questions = [
  ['What type of projects do you take on?', 'We build business websites, school portals, mobile apps, automation tools, and thoughtful interfaces for growing teams.'],
  ['How long does a website take?', 'Most focused websites take two to four weeks, depending on the number of pages, content, and feedback cycles.'],
  ['Do you offer support after launch?', 'Yes. We stay available for improvements, fixes, updates, and guidance after your product goes live.'],
  ['How do we get started?', 'Send a project request through the form and tell us what you are trying to achieve. We will reply within 24 hours.'],
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(0);
  return <section id="faq" className="faq-section"><div className="section-wrap faq-grid"><div><p className="eyebrow">Questions, answered</p><h2>Let’s clear<br /><em>things up.</em></h2></div><div className="faq-list">{questions.map(([question, answer], index) => <div className={`faq-item ${openQuestion === index ? 'is-open' : ''}`} key={question}><button type="button" aria-expanded={openQuestion === index} onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}><span>{question}</span><b>{openQuestion === index ? '−' : '+'}</b></button>{openQuestion === index && <p>{answer}</p>}</div>)}</div></div></section>;
}
