import { appState } from '../state/app_state'

/**
 * Applies and persists the active application theme.
 */
export function theme_render() {
  const app = document.querySelector<HTMLElement>('[data-key="app"]')
  if (app) {
    app.setAttribute('data-theme', appState.theme)
    localStorage.setItem('theme', appState.theme)
  }
}
