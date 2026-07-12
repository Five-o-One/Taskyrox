import { profileImgRender } from '../render/profile_img_render'
import { appState } from '../state/app_state'

export function profileImg(base64: string) {
  appState.navbarProfile.avatarUrl = base64
  localStorage.setItem('user-img', base64)
  profileImgRender(base64)
}
