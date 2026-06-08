import { useEffect, useState } from 'react'
import type { Theme } from '../hooks/useTheme'
import { profile } from '../data/resume'
import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

const NAV_LINKS = [
  { href: '#about', label: '關於' },
  { href: '#skills', label: '技能' },
  { href: '#experience', label: '經歷' },
  { href: '#projects', label: '專案' },
  { href: '#contact', label: '聯絡' },
]

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // 捲動超過一點點後，header 加上陰影與底色
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand">
          {profile.name}
          <span className="site-header__brand-en">{profile.nameEn}</span>
        </a>

        <nav
          className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
          aria-label="主選單"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-nav__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? '關閉選單' : '開啟選單'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`nav-toggle__bar${menuOpen ? ' is-open' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  )
}
