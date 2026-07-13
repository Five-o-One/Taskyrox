import { theme_render } from '../render/theme_render'
import { appState } from '../state/app_state'
import type { theme } from '../types/app_state'

export function themeToggle(state: theme) {
  appState.theme = state

  theme_render()
}
