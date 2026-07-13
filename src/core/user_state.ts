import { usernameEditor_render } from '../render/user_state_render'
import { appState } from '../state/app_state'

export function toggleUsernameEditor() {
  appState.navbarProfile.isUsernameEditable =
    !appState.navbarProfile.isUsernameEditable

  usernameEditor_render()
}

export function saveUsername(username: string) {
  appState.navbarProfile.username = username
  localStorage.setItem('user-name', username)
}
