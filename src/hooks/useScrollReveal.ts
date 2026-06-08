import { useEffect, useRef, useState } from 'react'

/**
 * 元素捲動進入視窗時回傳 isVisible = true，用來觸發進場動畫。
 * 底層用 IntersectionObserver，效能比監聽 scroll 事件好很多。
 * 若使用者設定「減少動態效果」，會直接視為可見、不播動畫。
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // 出現一次後就不再觀察
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
