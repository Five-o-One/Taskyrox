import { appState } from '../state/app_state'

export function themeRender() {
  const app = document.getElementById('app') as HTMLElement
  if (app) {
    app.setAttribute('data-theme', appState.theme)
    localStorage.setItem('theme', appState.theme)
  }
}
