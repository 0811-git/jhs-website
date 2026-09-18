import SectionTitle from './SectionTitle.jsx';
import useReveal from '../hooks/useReveal.js';
import TiltedCard from './TiltedCard.jsx';

export default function FeaturedShot() {
  const [ref, visible] = useReveal();

  return (
    <section id="featured" className="section section--dark">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <SectionTitle en="Featured Shot" cn="焦点 · Tilted Card" />

        <div className="featured__layout">
          <div className="featured__card">
            <TiltedCard
              imageSrc={`${import.meta.env.BASE_URL}photos/shot-rain.jpg`}
              altText="雨夜街道的水洼反光"
              captionText="Reflections on Wet Asphalt · 北仑 · 雨后"
              containerHeight="clamp(420px, 56vh, 620px)"
              containerWidth="100%"
              imageHeight="clamp(420px, 56vh, 620px)"
              imageWidth="100%"
              rotateAmplitude={14}
              scaleOnHover={1.06}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent={false}
            />
          </div>

          <div className="featured__caption">
            <p className="featured__caption-eyebrow">— Hover the photo</p>
            <h3 className="featured__caption-title">雨夜 · Reflections on Wet Asphalt</h3>
            <p className="featured__caption-desc">
              雨刚停，街灯把颜色揉进水洼里；蹲下来取景，让远处的建筑虚成光斑。
              <br />
              这一张是某个周末晚上出门踩水时随手拍的。
            </p>
            <ul className="featured__caption-meta">
              <li><span>设备</span> Nikon D90</li>
              <li><span>后期</span> Lightroom</li>
              <li><span>时间</span> 雨后 21:00</li>
              <li><span>地点</span> 北仑 · 某条街角</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}