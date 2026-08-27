import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Brand from '../components/Brand';
import AboutSlider from '../components/AboutSlider';
import FaqSection from '../components/FaqSection';
import GigForm from '../components/GigForm';
import HeroSlider from '../components/HeroSlider';
import ProjectShowcase from '../components/ProjectShowcase';
import FloatingActions from '../components/FloatingActions';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="site-header"><Brand /><button className="menu-toggle" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>Menu <span>{menuOpen ? '−' : '+'}</span></button><nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation"><a href="#services" onClick={closeMenu}>Services</a><a href="#work" onClick={closeMenu}>Our work</a><a href="#about" onClick={closeMenu}>About</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Book a gig <span>↗</span></a></nav></header>
    <main id="top">
      <HeroSlider />
      <AboutSlider />
      <section className="ticker"><div className="ticker-track"><span>Web development</span><b>+</b><span>School systems</span><b>+</b><span>Mobile apps</span><b>+</b><span>Automation</span><b>+</b><span>UI/UX design</span><b>+</b><span>Web development</span><b>+</b><span>School systems</span></div></section>
      <ServicesSection />
      <ProjectShowcase />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <section id="contact" className="contact-section"><div className="section-wrap contact-grid"><div><p className="eyebrow">04 / Book a gig</p><h2>Let's build<br /><em>something together.</em></h2><p className="contact-intro">Tell us about your project and we’ll get back to you within 24 hours.</p><div className="contact-details"><a href="mailto:hello@techbridgeinfinitygrid.com">hello@techbridgeinfinitygrid.com</a><a href="https://wa.me/2348102445683" target="_blank" rel="noreferrer">WhatsApp: 0810 244 5683</a><a href="https://wa.me/2349072886986" target="_blank" rel="noreferrer">WhatsApp: 0907 288 6986</a><span>Akwa Ibom, Nigeria</span></div></div><GigForm /></div></section>
    </main>
    <footer className="site-footer"><div className="section-wrap footer-top"><div className="footer-brand"><Brand /><p>Building the future,<br />one line of code at a time.</p></div><div className="footer-column"><h3>Explore</h3><a href="#services">Services</a><a href="#work">Our work</a><a href="#about">About us</a><a href="#contact">Book a gig</a></div><div className="footer-column"><h3>Contact</h3><a href="mailto:hello@techbridgeinfinitygrid.com">hello@techbridgeinfinitygrid.com</a><a href="https://wa.me/2348102445683" target="_blank" rel="noreferrer">0810 244 5683</a><a href="https://wa.me/2349072886986" target="_blank" rel="noreferrer">0907 288 6986</a><span>Akwa Ibom, Nigeria</span></div><div className="footer-column footer-social"><h3>Follow along</h3><div className="socials"><a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a><a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a><a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a></div></div></div><div className="section-wrap footer-bottom"><span>© 2026 TechBridge Infinity Grid. All rights reserved.</span><span>Digital products for a growing Nigeria.</span></div></footer><FloatingActions />
  </>;
}
