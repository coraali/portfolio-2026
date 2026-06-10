import { useTranslation } from "react-i18next";
import { useResume } from "../hooks/useResume";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useTranslation();
  const { experiences } = useResume();

  return (
    <Section id="experience" eyebrow="Experience" title={t("sections.experience")}>
      <ol className="timeline">
        {experiences.map((exp, i) => (
          <Reveal key={`${exp.company}-${exp.period}`} delay={i * 60}>
            <li className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3 className="timeline__role">
                    {exp.role}
                    {exp.current && (
                      <span className="badge">{t("experience.current")}</span>
                    )}
                  </h3>
                  <span className="timeline__period">{exp.period}</span>
                </div>
                <p className="timeline__company">{exp.company}</p>
                {exp.summary && (
                  <p className="timeline__summary">{exp.summary}</p>
                )}
                {exp.highlights.length > 0 && (
                  <ul className="timeline__highlights">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
                {exp.tags && (
                  <ul className="timeline__tags">
                    {exp.tags.map((tag) => (
                      <li key={tag} className="tag tag--sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
