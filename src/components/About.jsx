import SectionTitle from './SectionTitle.jsx';
import useReveal from '../hooks/useReveal.js';
import { profile } from '../data/profile.js';

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <SectionTitle en="About" cn="关于" />

        <div className="about__grid">
          <div className="about__media">
            <img src="/photos/avatar.jpg" alt={`${profile.name} 的肖像照`} />
            <span className="about__caption">{profile.name} / {profile.nickname} · 2026</span>
          </div>

          <div className="about__body">
            <h3 className="about__name">我是蒋沪昇，机械数控 × AI 探索者。</h3>
            <p className="about__lead">
              {profile.tagline}。在车间里动手做，在屏幕上用代码搭。
            </p>

            <div className="about__paragraphs">
              {profile.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="about__data">
              {profile.dataCards.map(card => (
                <div key={card.label} className="data-card">
                  <p className="data-card__label">{card.label}</p>
                  <p className="data-card__value">{card.value}</p>
                  {card.sub && <p className="data-card__sub">{card.sub}</p>}
                </div>
              ))}
            </div>

            <div className="about__contact">
              <a href={`mailto:${profile.email}`}>
                <span aria-hidden="true">✉</span> {profile.email}
              </a>
              <a href={`tel:${profile.phone}`}>
                <span aria-hidden="true">☏</span> {profile.phone}
              </a>
              <span>
                <span aria-hidden="true">⌖</span> {profile.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}