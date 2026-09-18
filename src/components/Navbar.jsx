import GlassSurface from './GlassSurface.jsx';
import { navLinks } from '../data/profile.js';

export default function Navbar() {
  return (
    <GlassSurface
      width="100%"
      height={72}
      borderRadius={0}
      displace={3}
      distortionScale={-120}
      redOffset={4}
      greenOffset={10}
      blueOffset={18}
      brightness={55}
      opacity={0.85}
      blur={14}
      backgroundOpacity={0.18}
      saturation={1.4}
      mixBlendMode="difference"
      className="nav-glass"
    >
      <div className="nav">
        <a href="#top" className="nav__brand" aria-label="Pxander">
          Pxander<span className="nav__brand-dot" aria-hidden="true" />
        </a>

        <ul className="nav__links">
          {navLinks.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="nav__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav__cta">
          GET IN TOUCH
          <span className="nav__cta-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </GlassSurface>
  );
}