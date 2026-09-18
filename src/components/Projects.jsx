import SectionTitle from './SectionTitle.jsx';
import useReveal from '../hooks/useReveal.js';
import { projects } from '../data/profile.js';

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="section">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <SectionTitle en="Selected Work" cn="精选作品" />

        <div className="projects__list">
          {projects.map((p, idx) => (
            <article key={p.id} className={`project ${idx % 2 === 1 ? 'project--reverse' : ''}`}>
              <div className="project__media">
                {p.cover ? (
                  <img src={p.cover} alt={p.title} loading="lazy" />
                ) : (
                  <div className="project__media--mockup" aria-hidden="true">
                    <div className="project__media--mockup-inner">
                      <span className="project__media--mockup-icon">P</span>
                      <span className="project__media--mockup-title">DESKTOP WIDGET</span>
                      <span className="project__media--mockup-label">Mockup · 待替换为真实截图</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="project__body">
                <p className="project__no">— {p.no} / 0{projects.length}</p>
                <span className="project__tag">{p.tag}</span>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__subtitle">{p.subtitle}</p>
                <p className="project__desc">{p.desc}</p>

                <ul className="project__features">
                  {p.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <div className="project__tags">
                  {p.tags.map(t => (
                    <span key={t} className="project__tag-chip">{t}</span>
                  ))}
                </div>

                {p.id === 'light-shadow' && (
                  <a href="#shots" className="project__link">
                    看更多作品
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}