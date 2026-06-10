import { useTranslation } from "react-i18next";
import { useResume } from "../hooks/useResume";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  const { t } = useTranslation();
  const { skillGroups } = useResume();

  return (
    <Section id="skills" eyebrow="Skills" title={t("sections.skills")}>
      <div className="skills">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 80} className="skill-card">
            <h3 className="skill-card__title">{group.category}</h3>
            {group.note && <p className="skill-card__note">{group.note}</p>}
            <ul className="skill-card__list">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
