import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const skills = t("landing.skills", {
    returnObjects: true,
  }) as unknown as string[];
  const personality = t("landing.personality", {
    returnObjects: true,
  }) as unknown as string[];

  return (
    <section id="top" className="poster">
      <div className="poster__photo" aria-hidden="true" />
      <div className="poster__scrim" aria-hidden="true" />

      <div className="poster__inner">
        {/* 字母由 SVG 組成並對 AT 隱藏，標題以 aria-label 提供可讀名稱 */}
        <h1 className="poster__hireme" aria-label={t("landing.hireMe")}>
          <svg aria-hidden="true"
            fill="#fff"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            id="memory-alpha-h"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3M8 6H10V10H12V6H14V16H12V12H10V16H8V6Z"></path>
            </g>
          </svg>
          <svg aria-hidden="true"
            fill="#fff"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            id="memory-alpha-i"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3M13 6V8H12V14H13V16H9V14H10V8H9V6H13Z"></path>
            </g>
          </svg>
          <svg aria-hidden="true"
            fill="#fff"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            id="memory-alpha-r"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3M8 6H13L13 7L14 7V11L13 11L13 13H14V16H12V14H11V12H10V16H8V6M10 8V10H12V8H10Z"></path>
            </g>
          </svg>
          <svg aria-hidden="true"
            fill="#fff"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            id="memory-alpha-e"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3M8 6H14V8H10V10H14V12H10V14H14V16H8V6Z"></path>
            </g>
          </svg>
          <svg aria-hidden="true"
            fill="#fff"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            id="memory-alpha-m"
            className="poster__hireme-m"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3M7 6H15L15 7L16 7V16H14V8H12V15H10V8H8V16H6V7L7 7L7 6Z"></path>
            </g>
          </svg>
          <svg aria-hidden="true"
            fill="#fff"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            id="memory-alpha-e"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3M8 6H14V8H10V10H14V12H10V14H14V16H8V6Z"></path>
            </g>
          </svg>
        </h1>

        <div className="poster__body">
          <p className="poster__together">{t("landing.together")}</p>

          <p className="poster__name">
            {t("landing.intro")}
            <span className="poster__role">{t("landing.role")}</span>
          </p>

          <p className="poster__apply">
            <span className="poster__apply-text">{t("landing.apply")}</span>
            <span className="poster__apply-badge">{t("landing.openTo")}</span>
          </p>

          <div className="poster__cols">
            <div className="poster__group">
              <h2 className="poster__gt">{t("landing.skillsTitle")}</h2>
              <ul className="poster__list">
                {skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="poster__group poster__group--right">
              <h2 className="poster__gt poster__gt--alt">
                {t("landing.personalityTitle")}
              </h2>
              <ul className="poster__list poster__list--right">
                {personality.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="poster__scroll" aria-label={t("hero.scroll")}>
        <span className="poster__scroll-dot" />
      </a>
    </section>
  );
}
