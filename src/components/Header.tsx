import { useEffect, useState } from "react";
import type { Theme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";
import { profile } from "../data/resume";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { href: "#about", key: "nav.about" },
  { href: "#skills", key: "nav.skills" },
  { href: "#experience", key: "nav.experience" },
  { href: "#projects", key: "nav.projects" },
  { href: "#contact", key: "nav.contact" },
];

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  // 捲動超過一點點後，header 加上陰影與底色
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
    >
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand">
          {profile.name}
          <span className="site-header__brand-en">{profile.nameEn}</span>
        </a>

        <nav
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          aria-label={t("nav_aria")}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-nav__link"
              onClick={() => setMenuOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <LangToggle />
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? t("menu.close") : t("menu.open")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`nav-toggle__bar${menuOpen ? " is-open" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
