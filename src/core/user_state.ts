import { changeUserStateRender } from '../render/user_state_render'
import { appState } from '../state/app_state'

export function changeUserState() {
  appState.navbarProfile.isUsernameEditable =
    !appState.navbarProfile.isUsernameEditable

  changeUserStateRender()
}

export function saveUsername(username: string) {
  appState.navbarProfile.username = username
  localStorage.setItem('user-name', username)
}
