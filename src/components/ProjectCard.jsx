function ProjectVisual({ type }) {
  if (type === 'school') return <div className="project-visual visual-school"><div className="browser-bar"><span /><span /><span /><label>flourish.tendercare / portal</label></div><div className="dashboard"><div className="dash-side" /><div className="dash-main"><span className="dash-kicker">Welcome back</span><strong>Good morning, Ada.</strong><div className="dash-blocks"><i /><i /><i /></div></div></div></div>;
  if (type === 'commerce') return <div className="project-visual visual-commerce"><span className="visual-word">NOVA<br /><i>market</i></span><span className="visual-stamp">SELL<br />SMART</span></div>;
  return <div className="project-visual visual-mobile"><div className="phone"><div className="phone-notch" /><span>Track<br /><b>better.</b></span><i /><i /></div></div>;
}

export default function ProjectCard({ project, featured = false }) {
  return <article className={`project-card ${featured ? 'project-featured' : ''}`}><ProjectVisual type={project.visual} /><div className="project-meta"><p className="project-type">{project.type} <span>{project.year}</span></p><h3>{project.title}</h3>{project.description && <p>{project.description}</p>}<div className="project-bottom"><span>{project.stack}</span><a href={project.url} target="_blank" rel="noreferrer">View live site <b>↗</b></a></div></div></article>;
}
