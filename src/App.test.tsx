import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { profile } from './data/resume'

describe('App', () => {
  it('顯示姓名', () => {
    render(<App />)
    // 姓名同時出現在 header 與 hero，用 getAllByText
    expect(screen.getAllByText(profile.name).length).toBeGreaterThan(0)
  })

  it('渲染所有主要區塊的錨點', () => {
    const { container } = render(<App />)
    for (const id of ['about', 'skills', 'experience', 'projects', 'contact']) {
      expect(container.querySelector(`#${id}`)).not.toBeNull()
    }
  })

  it('提供 email 與 LinkedIn 連結', () => {
    render(<App />)
    expect(
      screen.getByRole('link', { name: profile.email }),
    ).toHaveAttribute('href', `mailto:${profile.email}`)
    expect(
      screen.getByRole('link', { name: /LinkedIn/ }),
    ).toHaveAttribute('href', profile.linkedin)
  })
})
