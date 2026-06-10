import '@testing-library/jest-dom'
// 初始化 i18n，讓測試環境的元件能正常使用翻譯
import '../i18n'

// jsdom 沒有實作 matchMedia / IntersectionObserver，這裡補上假的版本，
// 讓使用它們的元件在測試環境也能正常 render。
window.matchMedia =
  window.matchMedia ||
  ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }))

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
// @ts-expect-error 測試環境用的精簡版
window.IntersectionObserver = MockIntersectionObserver
