import { profile } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="關於我">
      <div className="about">
        <Reveal className="about__text">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={120} className="about__facts">
          <dl>
            <div className="about__fact">
              <dt>現職</dt>
              <dd>Frontend Developer</dd>
            </div>
            <div className="about__fact">
              <dt>主力技術</dt>
              <dd>Vue 2 / 3、Nuxt、Pinia</dd>
            </div>
            <div className="about__fact">
              <dt>地點</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="about__fact">
              <dt>狀態</dt>
              <dd>開放新機會</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
