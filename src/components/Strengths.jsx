import SectionTitle from './SectionTitle.jsx';
import useReveal from '../hooks/useReveal.js';
import { profile } from '../data/profile.js';

export default function Strengths() {
  const [ref, visible] = useReveal();

  return (
    <section id="strengths" className="section section--dark">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <SectionTitle en="What I Bring" cn="个人优势" />

        <div className="strengths__grid">
          {profile.strengths.map(s => (
            <article key={s.no} className="strength-card">
              <p className="strength-card__no">— {s.no} / 0{profile.strengths.length}</p>
              <h3 className="strength-card__title">{s.title}</h3>
              <p className="strength-card__desc">{s.desc}</p>
              <div className="strength-card__tags">
                {s.tags.map(t => (
                  <span key={t} className="strength-card__tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}