import { profile } from '../data/resume'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {year} {profile.name} ({profile.nameEn})
        </p>
        <p className="site-footer__note">以 React + Vite 打造 · 部署於 Vercel</p>
      </div>
    </footer>
  )
}
