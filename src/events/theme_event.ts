import { themeToggle } from '../core/theme_toggle'

export function themeToggleEvent() {
  document.querySelectorAll<HTMLInputElement>('input[name="theme"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      if (!radio.checked) return

      const mode = radio.dataset.themeOption === 'dark' ? 'dark' : 'light'
      themeToggle(mode)
    })
  })
}
