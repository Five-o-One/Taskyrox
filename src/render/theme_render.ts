import { appState } from '../state/app_state'

export function themeRender() {
  const app = document.querySelector<HTMLElement>('[data-key="app"]')
  if (app) {
    app.setAttribute('data-theme', appState.theme)
    localStorage.setItem('theme', appState.theme)
  }
}
