import { profile } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="聯絡我">
      <Reveal className="contact">
        <p className="contact__lead">
          目前開放新的前端工作機會，歡迎透過以下方式聯絡，我會盡快回覆。
        </p>
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
              下載履歷 PDF
            </a>
          )}
        </div>
      </Reveal>
    </Section>
  )
}
