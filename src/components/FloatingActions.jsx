import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const tips = [
  'Need a site? Start here.',
  'Fast help on WhatsApp today.',
  'Ask about school tech.',
];

const whatsappNumber = '2348102445683';

export default function FloatingActions() {
  const [tipIndex, setTipIndex] = useState(0);
  const [tipVisible, setTipVisible] = useState(true);

  useEffect(() => {
    const hideInitialTip = window.setTimeout(() => setTipVisible(false), 4000);
    const timer = window.setInterval(() => {
      setTipIndex((current) => (current + 1) % tips.length);
      setTipVisible(true);
      window.setTimeout(() => setTipVisible(false), 4000);
    }, 7000);
    return () => {
      window.clearTimeout(hideInitialTip);
      window.clearInterval(timer);
    };
  }, []);

  const whatsappMessage = encodeURIComponent('Hello TechBridge Infinity Grid, I would like to discuss a project.');

  return <div className="floating-actions"><a className="back-to-top" href="#top" aria-label="Back to top" title="Back to top">↑</a><div className="whatsapp-action"><span key={tipIndex} className={`care-tip ${tipVisible ? 'is-visible' : ''}`} role="status">{tips[tipIndex]}</span><a className="whatsapp-button" href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" aria-label="Chat with TechBridge on WhatsApp" title="Chat with us on WhatsApp"><FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" /></a></div></div>;
}
