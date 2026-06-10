import { useTranslation } from "react-i18next";
import { useResume } from "../hooks/useResume";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useTranslation();
  const { about } = useResume();

  return (
    <Section id="about" eyebrow="About" title={t("sections.about")}>
      <div className="about">
        <Reveal className="about__text">
          {about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={120} className="about__facts">
          <dl>
            <div className="about__fact">
              <dt>{t("about.roleLabel")}</dt>
              <dd>{t("about.roleValue")}</dd>
            </div>
            <div className="about__fact">
              <dt>{t("about.stackLabel")}</dt>
              <dd>{t("about.stackValue")}</dd>
            </div>
            <div className="about__fact">
              <dt>{t("about.locationLabel")}</dt>
              <dd>{t("about.locationValue")}</dd>
            </div>
            <div className="about__fact">
              <dt>{t("about.statusLabel")}</dt>
              <dd>{t("about.statusValue")}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
