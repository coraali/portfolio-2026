import { useTranslation } from "react-i18next";
import { useResume } from "../hooks/useResume";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Projects() {
  const { t } = useTranslation();
  const { projects } = useResume();

  return (
    <Section id="projects" eyebrow="Projects" title={t("sections.projects")}>
      <div className="projects">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <article
              className={`project-card${
                project.featured ? " project-card--featured" : ""
              }`}
            >
              {project.featured && (
                <span className="project-card__flag">
                  {t("projects.featuredFlag")}
                </span>
              )}
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag tag--sm">
                    {tag}
                  </li>
                ))}
              </ul>

              {(project.link || project.repo) && (
                <div className="project-card__links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {t("projects.livePreview")}
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      {t("projects.source")}
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
