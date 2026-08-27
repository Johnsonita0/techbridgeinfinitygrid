import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChalkboardUser, faCode, faMessage, faMobileScreenButton, faPalette, faSchool } from '@fortawesome/free-solid-svg-icons';

const services = [
  { title: 'Web development', text: 'Custom websites, landing pages, and stores that turn attention into action.', icon: faCode, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85' },
  { title: 'School portals', text: 'Results, fee payments, student access, and communication in one clear system.', icon: faSchool, image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Mobile apps', text: 'Android and iOS apps built around real users and real outcomes.', icon: faMobileScreenButton, image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Automation & SMS', text: 'Announcements, reminders, and alerts sent to the right people fast.', icon: faMessage, image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85' },
  { title: 'UI/UX design', text: 'Clean, modern interfaces that make your brand feel effortless.', icon: faPalette, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Online tutoring', text: 'Personal, practical learning support that helps students understand more and achieve their goals.', icon: faChalkboardUser, image: 'https://images.unsplash.com/photo-1584697964190-7383b8f7c4e3?auto=format&fit=crop&w=1200&q=85' },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const service = services[activeService];
  useEffect(() => {
    const timer = window.setInterval(() => setActiveService((current) => (current + 1) % services.length), 7000);
    return () => window.clearInterval(timer);
  }, []);
  return <section id="services" className="services-showcase"><div className="section-wrap"><div className="services-slider-layout"><div className="services-slider-copy" key={service.title}><p className="eyebrow">What we do</p><div className="services-slider-number">0{activeService + 1} <span>/ 06</span></div><h2>{service.title}</h2><p>{service.text}</p><a className="text-link" href={service.title === 'Online tutoring' ? '/apply' : '#contact'}>{service.title === 'Online tutoring' ? 'Apply for tutoring' : 'Build this with us'} <span>↗</span></a></div><div className="services-slider-card" key={`${service.title}-card`}><img src={service.image} alt={`${service.title} service`} /><div className="service-card-shade" /><div className="service-card-content"><div className="service-large-icon"><FontAwesomeIcon icon={service.icon} /></div><span className="service-card-label">TechBridge service</span><strong>{service.title}</strong><p>Designed for clarity.<br />Built for growth.</p></div><div className="service-slider-controls"><button type="button" aria-label="Previous service" onClick={() => setActiveService((activeService + services.length - 1) % services.length)}>←</button><div className="service-slider-tabs">{services.map((item, index) => <button type="button" key={item.title} aria-label={`Show ${item.title}`} aria-current={index === activeService} onClick={() => setActiveService(index)}>{String(index + 1).padStart(2, '0')}</button>)}</div><button type="button" aria-label="Next service" onClick={() => setActiveService((activeService + 1) % services.length)}>→</button></div></div></div></div></section>;
}
