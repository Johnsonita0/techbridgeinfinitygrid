import { useEffect, useRef, useState } from 'react';

const stats = [
  ['jobs', 24, 'Jobs completed', '+'],
  ['rate', 98, 'Success rate', '%'],
  ['clients', 18, 'Happy clients', '+'],
  ['products', 24, 'Products built', '+'],
];

function Count({ target, active }) {
  const [value, setValue] = useState(1);
  useEffect(() => {
    if (!active) {
      setValue(1);
      return undefined;
    }
    let current = 1;
    const step = Math.max(1, Math.ceil((target - 1) / 35));
    const timer = window.setInterval(() => {
      current = Math.min(target, current + step);
      setValue(current);
      if (current >= target) window.clearInterval(timer);
    }, 35);
    return () => window.clearInterval(timer);
  }, [active, target]);
  return <>{value}</>;
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const wasVisible = useRef(false);
  const [active, setActive] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !wasVisible.current) {
        setAnimationCycle((current) => current + 1);
      }
      wasVisible.current = entry.isIntersecting;
      setActive(entry.isIntersecting);
    }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="stats-section"><div className="section-wrap"><p className="eyebrow">The numbers</p><div className="stats-grid">{stats.map(([id, target, label, suffix]) => <div className="stat" key={id}><strong><Count key={`${id}-${animationCycle}`} target={target} active={active} />{suffix}</strong><span>{label}</span></div>)}</div></div></section>;
}
