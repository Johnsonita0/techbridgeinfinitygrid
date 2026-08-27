import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Software that moves your business forward.',
    description: 'From school portals to business websites, we turn ambitious ideas into useful digital products.',
    image: '/logo/logo1.png',
    alt: 'TechBridge Infinity Grid logo',
    className: 'hero-slide-logo',
  },
  {
    title: 'Make your digital presence work harder.',
    description: 'Clear, conversion-focused websites designed for the people your business serves.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
    alt: 'Black colleagues collaborating around a table',
    className: 'hero-slide-team',
  },
  {
    title: 'Build systems people enjoy using.',
    description: 'Thoughtful interfaces and reliable technology for schools, teams, and growing companies.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85',
    alt: 'Black friends working together outdoors',
    className: 'hero-slide-office',
  },
  {
    title: 'Learn online with confidence.',
    description: 'Practical online tutoring that makes complex topics clearer and helps learners keep moving forward.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85',
    alt: 'Student learning during an online tutoring session',
    className: 'hero-slide-tutoring',
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (index) => setActiveSlide((index + slides.length) % slides.length);

  return <section className="hero-slider section-wrap" aria-label="TechBridge highlights">
    <div key={slide.title} className="hero-slider-copy"><h1>{slide.title}</h1><p className="hero-lede">{slide.description}</p><div className="hero-actions"><a className="button button-primary" href="#contact">Book a gig <span>↗</span></a><a className="text-link" href="#work">View our work <span>↓</span></a></div></div>
    <div className="hero-slider-media"><img key={slide.image} className={slide.className} src={slide.image} alt={slide.alt} /><div className="hero-slide-shade" /><div className="hero-slide-caption"><span>0{activeSlide + 1} / 0{slides.length}</span><strong>TechBridge<br />Infinity Grid</strong></div><div className="hero-slider-controls"><button type="button" aria-label="Previous slide" onClick={() => showSlide(activeSlide - 1)}>←</button><div className="hero-dots">{slides.map((item, index) => <button type="button" key={item.title} aria-label={`Go to slide ${index + 1}`} aria-current={index === activeSlide} onClick={() => showSlide(index)} />)}</div><button type="button" aria-label="Next slide" onClick={() => showSlide(activeSlide + 1)}>→</button></div></div>
  </section>;
}
