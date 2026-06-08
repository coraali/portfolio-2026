import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  /** 延遲毫秒數，讓多個元素依序出現 */
  delay?: number
  className?: string
}

/** 包住任何內容，捲到畫面內時淡入上移。 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? ' reveal--visible' : ''}${
        className ? ` ${className}` : ''
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
