import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Brand from '../components/Brand';
import MobileSearch from '../components/MobileSearch';
import PortfolioMenu from '../components/PortfolioMenu';

const projects = [
  { type: 'Business services website', year: '2026', title: 'Pernest Digital Services', description: 'A professional digital services platform for CAC registration, NIN support, SCUML, and business documentation.', stack: 'React / Responsive UI', url: 'https://www.pernestdigitalservices.com.ng/', desktopImage: '/image/pernestD.png' },
  { type: 'Education website', year: '2026', title: 'Hagg Academy Plus', description: 'A focused digital home for an education brand and its learning community.', stack: 'Website / UI design', url: 'https://www.haggacademyplus.com.ng/', desktopImage: '/image/HaggD.png' },
  { type: 'School website', year: '2025', title: 'Flourish TenderCare School', description: 'A school platform designed to keep parents, students, and administrators connected.', stack: 'React / Node.js / MySQL', url: 'https://flourishtendercare.com.ng/', desktopImage: '/image/florishD.png' },
  { type: 'Community website', year: '2025', title: 'Paz Thriving Tribe', description: 'A welcoming digital space for a growing community and its stories.', stack: 'Website / Product design', url: 'https://pazthrivingtribe.org/', desktopImage: '/image/PazD.png' },
];

const heroSlides = [
  { eyebrow: 'Hello, I am Johnson', title: <>We turn bold ideas<br /><em>into useful products.</em></>, text: 'I am a web developer and digital product builder creating thoughtful experiences for growing brands, schools, and communities.', image: '/image/mypic/pic1.jpeg', position: 'center 32%', action: 'See my work', target: '#portfolio-projects' },
  { eyebrow: 'Creative problem solver', title: <>I design with purpose<br /><em>and build with clarity.</em></>, text: 'Every project starts with listening, then becomes a focused digital experience people can understand and use.', image: '/image/mypic/pic2.jpeg', position: 'center 25%', action: 'Explore projects', target: '#portfolio-projects' },
  { eyebrow: 'Business platforms', title: <>Digital tools<br /><em>that move business.</em></>, text: 'From documentation services to customer journeys, I build clear digital homes that help ambitious businesses grow.', image: '/image/mypic/pic3.jpeg', position: 'center 30%', action: 'Explore projects', target: '#portfolio-projects' },
  { eyebrow: 'Education and community', title: <>Technology with<br /><em>people at the centre.</em></>, text: 'My work helps schools communicate, communities connect, and teams serve their people with less friction.', image: '/image/mypic/pic4.jpeg', position: '58% 25%', action: 'View selected work', target: '#portfolio-projects' },
  { eyebrow: 'Let us build together', title: <>Your next idea<br /><em>can move further.</em></>, text: 'Bring the challenge. I will help shape the strategy, interface, and technology that takes it forward.', image: '/image/mypic/pic5.jpeg', position: 'center 27%', action: 'Start a conversation', target: '/#contact' },
];

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return <>
    <header className="site-header"><button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span className="hamburger-icon" aria-hidden="true"><i /><i /><i /></span></button><Brand /><MobileSearch /><nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Portfolio navigation"><a href="/#services" onClick={closeMenu}>Services</a><PortfolioMenu onNavigate={closeMenu} /><a href="/#about" onClick={closeMenu}>About</a><a className="nav-cta" href="/#contact" onClick={closeMenu}>Book a gig <span>↗</span></a></nav></header>
    <main className="portfolio-page">
      <section className="portfolio-hero" style={{ '--hero-image': `url(${slide.image})`, '--hero-position': slide.position }} aria-live="polite"><div className="section-wrap portfolio-hero-inner"><div className="portfolio-hero-copy" key={slide.title.props?.children?.[0] || activeSlide}><p className="eyebrow">{slide.eyebrow}</p><h1>{slide.title}</h1><p>{slide.text}</p><a className="button button-primary" href={slide.target}>{slide.action} <span>↗</span></a></div><div className="portfolio-hero-controls"><div>{heroSlides.map((item, index) => <button key={item.eyebrow} type="button" aria-label={`Show slide ${index + 1}`} aria-current={index === activeSlide} onClick={() => setActiveSlide(index)} />)}</div></div></div></section>
      <section id="portfolio-projects" className="portfolio-grid section-wrap" aria-label="Portfolio projects">{projects.map((project) => <article className="portfolio-project" key={project.title}><a className="portfolio-project-media" href={project.url} target="_blank" rel="noreferrer"><img src={project.desktopImage} alt={`${project.title} project preview`} loading="lazy" /><span>View live site ↗</span></a><div className="portfolio-project-copy"><p className="portfolio-project-type">{project.type} <span>{project.year}</span></p><h2><a href={project.url} target="_blank" rel="noreferrer">{project.title}</a></h2><p>{project.description}</p><div><small>{project.stack}</small><a href={project.url} target="_blank" rel="noreferrer">Open actual site ↗</a></div></div></article>)}</section>
      <section className="portfolio-cta"><div className="section-wrap"><p className="eyebrow">Have a project in mind?</p><h2>Let’s make your<br /><em>next move.</em></h2><a className="button button-dark" href="/#contact">Start a conversation <span>↗</span></a></div></section>
    </main>
    <footer className="site-footer"><div className="section-wrap footer-top"><div className="footer-brand"><Brand /><p>Building the future,<br />one line of code at a time.</p></div><div className="footer-column"><h3>Explore</h3><a href="/">Home</a><a href="/profiolo">Portfolio</a><a href="/#services">Services</a><a href="/#contact">Contact</a></div><div className="footer-column"><h3>Contact</h3><a href="mailto:hello@techbridgeinfinitygrid.com">hello@techbridgeinfinitygrid.com</a><span>Akwa Ibom, Nigeria</span></div><div className="footer-column footer-social"><h3>Follow along</h3><div className="socials"><a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a><a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a><a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a></div></div></div></footer>
  </>;
}