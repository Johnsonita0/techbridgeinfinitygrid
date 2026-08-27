import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  { quote: 'TechBridge understood what we needed and delivered a clean, useful school platform that our team can actually manage.', name: 'Flourish TenderCare School', role: 'School portal client' },
  { quote: 'From the first conversation to launch, the process was clear, responsive, and focused on getting the details right.', name: 'Pernest Digital Services', role: 'Business website client' },
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const testimonial = testimonials[activeTestimonial];

  useEffect(() => {
    const timer = window.setInterval(() => setActiveTestimonial((current) => (current + 1) % testimonials.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return <section className="testimonials-section"><div className="section-wrap testimonials-grid"><form className="testimonial-form" onSubmit={handleSubmit}><p className="eyebrow">Share your experience</p><h2>Tell us how we<br /><em>did.</em></h2><label>Your name<input name="name" required placeholder="Your name" /></label><label>Your testimonial<textarea name="testimonial" required rows="4" placeholder="Write a few words about your experience" /></label><button className="button button-dark" type="submit">Send testimonial <span>↗</span></button>{submitted && <p className="testimonial-success" role="status">Thank you for your kind words.</p>}</form><div className="testimonial-slider"><div className="testimonials-slider-heading"><p className="eyebrow">Client notes</p><span>0{activeTestimonial + 1} / 0{testimonials.length}</span></div><article className="testimonial-card" key={testimonial.name}><FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} /><div className="rating" aria-label="5 out of 5 stars">{[1, 2, 3, 4, 5].map((star) => <FontAwesomeIcon icon={faStar} key={star} />)}</div><blockquote>“{testimonial.quote}”</blockquote><footer><strong>{testimonial.name}</strong><span>{testimonial.role}</span></footer></article><div className="testimonial-controls"><button type="button" aria-label="Previous testimonial" onClick={() => setActiveTestimonial((activeTestimonial + testimonials.length - 1) % testimonials.length)}>←</button><div className="testimonial-dots">{testimonials.map((item, index) => <button key={item.name} type="button" aria-label={`Show testimonial ${index + 1}`} aria-current={activeTestimonial === index} onClick={() => setActiveTestimonial(index)} />)}</div><button type="button" aria-label="Next testimonial" onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}>→</button></div></div></div></section>;
}
