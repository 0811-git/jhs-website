import ParticleText from './ParticleText.jsx';
import useReveal from '../hooks/useReveal.js';
import { profile } from '../data/profile.js';

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="contact">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="contact__inner">
          <p className="contact__pre">— 06 / Contact</p>

          <div className="contact__particle">
            <ParticleText
              text="LET'S BUILD SOMETHING"
              particleSize={2.4}
              density={4}
              color="#ffffff"
              highlightColor="#a4a4ff"
              scatter={220}
              gatherDuration={1800}
              stagger={420}
              pointerRepel={45}
              repelRadius={140}
              idleDrift={0.6}
              trigger="hover"
              fontSize="clamp(2.4rem, 8vw, 6rem)"
              fontWeight={800}
              fontFamily='"Geist", "Geist Sans", system-ui, sans-serif'
              glow
            />
          </div>

          <p className="contact__subline">
            一起做点有意思的东西 · design × build × ship
          </p>

          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className="contact__meta">
            <div className="contact__meta-item">
              <span className="contact__meta-label">Phone</span>
              <a className="contact__meta-value" href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
            <div className="contact__meta-item">
              <span className="contact__meta-label">Location</span>
              <span className="contact__meta-value">{profile.location}</span>
            </div>
            <div className="contact__meta-item">
              <span className="contact__meta-label">School</span>
              <span className="contact__meta-value">{profile.school}</span>
            </div>
            <div className="contact__meta-item">
              <span className="contact__meta-label">Focus</span>
              <span className="contact__meta-value">产品 · AI · 摄影</span>
            </div>
          </div>

          <footer className="contact__footer">
            <span>© 2026 {profile.nickname} · 蒋沪昇</span>
            <span>Built with React + Vite</span>
            <span>ShapeWaves · ParticleText · ElasticMesh</span>
          </footer>
        </div>
      </div>
    </section>
  );
}