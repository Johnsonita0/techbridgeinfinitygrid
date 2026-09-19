import { useState } from 'react';

const portfolioItems = [
  { title: 'Pernest Digital Services', type: 'Business services', url: 'https://www.pernestdigitalservices.com.ng/' },
  { title: 'Hagg Academy Plus', type: 'Education platform', url: 'https://www.haggacademyplus.com.ng/' },
  { title: 'Flourish TenderCare School', type: 'School platform', url: 'https://flourishtendercare.com.ng/' },
  { title: 'Paz Thriving Tribe', type: 'Community website', url: 'https://pazthrivingtribe.org/' },
];

export default function PortfolioMenu({ onNavigate }) {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
    onNavigate?.();
  }

  return <div className={`portfolio-menu ${open ? 'is-open' : ''}`}>
    <button className="portfolio-trigger" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
      Portfolio <span>{open ? '−' : '+'}</span>
    </button>
    <div className="portfolio-panel">
      <div className="portfolio-panel-heading">
        <p className="portfolio-kicker">Selected work</p>
        <a href="/profiolo" onClick={closeMenu}>View all <span>↗</span></a>
      </div>
      <div className="portfolio-items">
        {portfolioItems.map((item) => <a key={item.title} href={item.url} target="_blank" rel="noreferrer" onClick={closeMenu}>
          <span><strong>{item.title}</strong><small>{item.type}</small></span>
          <b>↗</b>
        </a>)}
      </div>
    </div>
  </div>;
}