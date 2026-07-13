import { themeToggle } from '../core/theme_toggle'

export function themeToggle_event() {
  document
    .querySelectorAll<HTMLInputElement>('input[name="theme"]')
    .forEach((themeOption) => {
      themeOption.addEventListener('change', () => {
        if (!themeOption.checked) return

        const mode =
          themeOption.dataset.themeOption === 'dark' ? 'dark' : 'light'
        themeToggle(mode)
      })
    })
}
