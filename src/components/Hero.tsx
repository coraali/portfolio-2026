import { useTranslation } from "react-i18next";
import { profile } from "../data/resume";
import { useResume } from "../hooks/useResume";

export default function Hero() {
  const { t } = useTranslation();
  const { tagline } = useResume();

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__greeting">{t("hero.greeting")}</p>
        <h1 className="hero__name">
          {profile.name}
          <span className="hero__name-en">{profile.nameEn}</span>
        </h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            {t("hero.ctaProjects")}
          </a>
          <a href="#contact" className="btn btn--ghost">
            {t("hero.ctaContact")}
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label={t("hero.scroll")}>
        <span className="hero__scroll-dot" />
      </a>
    </section>
  );
}
