import { useEffect, useState } from 'react';

const slides = [
  {
    label: 'Our vision',
    title: 'A more connected future for every Nigerian business.',
    text: 'We imagine a future where great digital tools are accessible, practical, and built around the people who use them.',
  },
  {
    label: 'Our mission',
    title: 'Make quality technology easier to access.',
    text: 'We help schools and growing businesses move forward with clear strategy, useful design, and reliable software.',
  },
  {
    label: 'Core values',
    title: 'Clarity. Care. Craft.',
    text: 'We listen closely, communicate honestly, and take pride in building digital products that work beautifully in the real world.',
  },
];

export default function AboutSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  return <section id="about" className="about-intro section-wrap" aria-label="About TechBridge Infinity Grid">
    <div className="about-intro-copy"><p className="eyebrow">About us</p><h2>Digital tools with<br /><em>human thinking.</em></h2><p>TechBridge Infinity Grid is a Nigerian technology company helping schools and SMEs become more capable, connected, and confident online.</p><a className="text-link" href="#about">More about TechBridge <span>↗</span></a></div>
    <div className="about-slider" aria-live="polite"><div className="about-slider-index">0{activeSlide + 1} / 0{slides.length}</div><div className="about-slider-content"><p className="about-slider-label">{slide.label}</p><h3>{slide.title}</h3><p>{slide.text}</p></div><div className="about-slider-footer"><div className="about-tabs" role="tablist" aria-label="About TechBridge"><span className="about-tabs-label">Explore</span>{slides.map((item, index) => <button key={item.label} type="button" role="tab" aria-label={`Show ${item.label}`} aria-selected={index === activeSlide} onClick={() => setActiveSlide(index)}>{item.label}</button>)}</div><span>Our point of view</span></div></div>
  </section>;
}
