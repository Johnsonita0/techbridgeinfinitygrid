import { useEffect, useState } from 'react';

const projects = [
  {
    type: 'Business services website',
    year: '2026',
    title: 'Pernest Digital Services',
    description: 'A professional digital services platform for CAC registration, NIN support, SCUML, and business documentation.',
    stack: 'React / Responsive UI',
    url: 'https://www.pernestdigitalservices.com.ng/',
    desktopImage: '/image/pernestD.png',
    mobileImage: '/image/pernest.jpeg',
  },
  {
    type: 'Education website',
    year: '2026',
    title: 'Hagg Academy Plus',
    description: 'A focused digital home for an education brand and its learning community.',
    stack: 'Website / UI design',
    url: 'https://www.haggacademyplus.com.ng/',
    desktopImage: '/image/HaggD.png',
    mobileImage: '/image/HAGG.jpeg',
  },
  {
    type: 'School website',
    year: '2025',
    title: 'Flourish TenderCare School',
    description: 'A school platform designed to keep parents, students, and administrators connected.',
    stack: 'React / Node.js / MySQL',
    url: 'https://flourishtendercare.com.ng/',
    desktopImage: '/image/florishD.png',
    mobileImage: '/image/Flourish.jpeg',
  },
  {
    type: 'Community website',
    year: '2025',
    title: 'Paz Thriving Tribe',
    description: 'A welcoming digital space for a growing community and its stories.',
    stack: 'Website / Product design',
    url: 'https://pazthrivingtribe.org/',
    desktopImage: '/image/PazD.png',
    mobileImage: '/image/Paz.jpeg',
  },
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return <section id="work" className="showcase-section"><div className="showcase-inner"><div className="showcase-copy" key={project.title}><p className="eyebrow">Selected project</p><p className="showcase-type">{project.type} <span>{project.year}</span></p><h2>{project.title}</h2><p className="showcase-description">{project.description}</p><p className="showcase-stack">{project.stack}</p><a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">View live site <span>↗</span></a></div><div className="showcase-preview" key={`${project.title}-preview`}><div className="desktop-device"><div className="device-top"><span /><span /><span /><small>LIVE PROJECT / {String(activeProject + 1).padStart(2, '0')}</small></div><img src={project.desktopImage} alt={`${project.title} desktop homepage`} loading="eager" decoding="async" referrerPolicy="no-referrer" /></div><div className="mobile-device"><div className="mobile-speaker" /><img src={project.mobileImage} alt={`${project.title} mobile homepage`} loading="eager" decoding="async" referrerPolicy="no-referrer" /></div><div className="showcase-count">0{activeProject + 1} <span>/ 0{projects.length}</span></div></div><div className="showcase-tabs" role="tablist" aria-label="Recent projects">{projects.map((item, index) => <button key={item.title} type="button" role="tab" aria-selected={index === activeProject} onClick={() => setActiveProject(index)}><span>0{index + 1}</span>{item.title}</button>)}</div></div></section>;
}
