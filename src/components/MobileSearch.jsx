import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const searchableSections = [
  { title: 'Services', detail: 'Web, portals, apps, automation, design', target: '#services' },
  { title: 'Our work', detail: 'Recent projects and client websites', target: '#work' },
  { title: 'About us', detail: 'Vision, mission, and core values', target: '#about' },
  { title: 'Online tutoring', detail: 'HTML, CSS, JavaScript, and DevOps', target: '/apply' },
  { title: 'Client notes', detail: 'Testimonials and ratings', target: '#testimonials' },
  { title: 'FAQ', detail: 'Common questions and answers', target: '#faq' },
  { title: 'Book a gig', detail: 'Start a project with TechBridge', target: '#contact' },
];

export default function MobileSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const results = searchableSections.filter((section) => `${section.title} ${section.detail}`.toLowerCase().includes(query.toLowerCase()));

  function selectResult(target) {
    setOpen(false);
    setQuery('');
    if (target.startsWith('/')) window.location.href = target;
    else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }

  return <div className="mobile-search"><button className="search-toggle" type="button" aria-label={open ? 'Close site search' : 'Search site'} aria-expanded={open} onClick={() => setOpen(!open)}><FontAwesomeIcon icon={open ? faXmark : faMagnifyingGlass} /></button>{open && <div className="search-panel"><div className="search-input-wrap"><FontAwesomeIcon icon={faMagnifyingGlass} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this site" aria-label="Search this site" /></div><div className="search-results">{results.length ? results.map((section) => <button type="button" key={section.title} onClick={() => selectResult(section.target)}><strong>{section.title}</strong><span>{section.detail}</span><b>↗</b></button>) : <p>No matching section found.</p>}</div></div>}</div>;
}
