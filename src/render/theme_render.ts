import { appState } from '../state/app_state'

export function themeRender() {
  const body = document.getElementById('body') as HTMLElement
  if (body) {
    body.setAttribute('data-theme', appState.theme)
  }
}
