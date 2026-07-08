import { themeToggle } from '../core/theme_toggle'

export function themeToggleEvent() {
  const lightRadio = document.getElementById('theme-light') as HTMLInputElement
  const darkRadio = document.getElementById('theme-dark') as HTMLInputElement

  lightRadio?.addEventListener('change', () => {
    if (lightRadio.checked) {
      themeToggle()
    }
  })

  darkRadio?.addEventListener('change', () => {
    if (darkRadio.checked) {
      themeToggle()
    }
  })
}
