import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__greeting">嗨，我是</p>
        <h1 className="hero__name">
          {profile.name}
          <span className="hero__name-en">{profile.nameEn}</span>
        </h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            看專案
          </a>
          <a href="#contact" className="btn btn--ghost">
            聯絡我
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="往下捲動">
        <span className="hero__scroll-dot" />
      </a>
    </section>
  );
}
