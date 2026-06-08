import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  title: string
  /** 區塊標題上方的小標 */
  eyebrow?: string
  children: ReactNode
}

/** 各內容區塊的共用外框：錨點 id、標題、淡入效果。 */
export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <header className="section__head">
            {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
            <h2 id={`${id}-title`} className="section__title">
              {title}
            </h2>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
