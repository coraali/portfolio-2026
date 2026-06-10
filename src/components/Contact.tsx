import { useTranslation } from "react-i18next";
import { profile } from "../data/resume";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact" eyebrow="Contact" title={t("sections.contact")}>
      <Reveal className="contact">
        <p className="contact__lead">{t("contact.lead")}</p>
        <div className="contact__links">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a
            className="btn btn--ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          {profile.github && (
            <a
              className="btn btn--ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}
          {profile.resumePdf && (
            <a className="btn btn--ghost" href={profile.resumePdf} download>
              {t("contact.resumePdf")}
            </a>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
