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
                      <svg aria-hidden="true"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
                            fill="currentColor"
                          ></path>{" "}
                        </g>
                      </svg>
                    </a>
                  )}
                </div>
              )}
              {(project.link || project.website) && (
                <div className="project-card__links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {t("projects.livePreview")}
                    </a>
                  )}
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noreferrer">
                      {t("projects.website")}
                      <svg aria-hidden="true"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
                            fill="currentColor"
                          ></path>{" "}
                        </g>
                      </svg>
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
