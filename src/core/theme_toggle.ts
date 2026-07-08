import { themeRender } from '../render/theme_render'
import { appState } from '../state/app_state'

export function themeToggle() {
  appState.theme = appState.theme === 'dark' ? 'light' : 'dark'

  themeRender()
}
