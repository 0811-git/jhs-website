import { useCallback } from 'react';
import ShapeWaves from './ShapeWaves.jsx';
import { profile } from '../data/profile.js';

export default function Hero() {
  const handleWavesError = useCallback(error => {
    // WebGPU 不可用时静默降级：Hero 容器保留黑底即可
    // eslint-disable-next-line no-console
    console.warn('ShapeWaves fallback:', error.message);
  }, []);

  return (
    <section id="top" className="hero" aria-label="简介">
      <div className="hero__waves" aria-hidden="true">
        <ShapeWaves
          text="Pxander"
          fontFamily='"Geist", "Geist Sans", system-ui, sans-serif'
          fontWeight={600}
          textSize={0.55}
          shapes="mixed"
          cellSize={11}
          dotSize={0.7}
          color="#929292"
          hoverColor="#ffffff"
          backgroundColor="#000000"
          speed={1}
          scale={1}
          contrast={1}
          brightness={0.42}
          flow={0.15}
          direction={0}
          fade={0.35}
          interactive
          splashRadius={48}
          splashStrength={0.45}
          glow={0.35}
          intro
          introDuration={1.8}
          onError={handleWavesError}
        />
      </div>

      <div className="hero__overlay container">
        <span className="hero__tag">MECHANICAL × AI × DESIGN</span>

        <h1 className="hero__title">{profile.name}</h1>
        <p className="hero__title-cn">
          {profile.nickname} · 业余设计师 / AI 设计探索者
        </p>
        <p className="hero__tagline">{profile.shortBio}</p>

        <div className="hero__cta-row">
          <a className="btn btn--primary" href="#contact">
            联系我
            <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn--ghost" href="#projects">
            查看作品
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="向下滚动">
        <span>SCROLL</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}