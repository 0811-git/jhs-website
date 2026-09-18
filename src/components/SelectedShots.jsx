import SectionTitle from './SectionTitle.jsx';
import useReveal from '../hooks/useReveal.js';
import DriftWall from './DriftWall.jsx';
import { shots } from '../data/profile.js';

const items = shots.map(s => ({
  image: s.src,
  title: s.alt
}));

export default function SelectedShots() {
  const [ref, visible] = useReveal();

  return (
    <section id="shots" className="section shots">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <SectionTitle en="Selected Shots" cn="摄影选辑 · drift wall" />

        <div className="shots__intro">
          <p>鼠标移动会让整面墙微微倾斜；停在某张照片上，它会从黑灰色里亮起来向前浮起。</p>
          <p className="shots__hint">— Hover &amp; drift</p>
        </div>

        <div className="shots__wall">
          <DriftWall
            items={items}
            columns={3}
            tileWidth={300}
            tileHeight={190}
            gap={16}
            radius={12}
            tilt={14}
            turn={-12}
            perspective={1100}
            depth={100}
            speed={32}
            direction="up"
            variance={0.55}
            parallax={0.55}
            lift={70}
            fade={0.55}
            dim={0.45}
            grayscale
            overlayColor="#000000"
          />
        </div>
      </div>
    </section>
  );
}