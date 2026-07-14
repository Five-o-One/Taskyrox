import { usernameEditor_render } from '../render/user_state_render'
import { appState } from '../state/app_state'

/**
 * Toggles username editing mode and refreshes the username area.
 */
export function toggleUsernameEditor() {
  appState.navbarProfile.isUsernameEditable =
    !appState.navbarProfile.isUsernameEditable

  usernameEditor_render()
}

/**
 * Updates and persists the user's display name.
 * @param username The display name to save.
 */
export function saveUsername(username: string) {
  if (username === null || username === '') return
  appState.navbarProfile.username = username
  localStorage.setItem('user-name', username)
}
