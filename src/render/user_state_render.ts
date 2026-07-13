import { usernameZone } from '../components/NavBar/navbar_profile'
import {
  changeUserNameState,
  changeUserNameStateSave,
} from '../events/username_event'

export function changeUserStateRender() {
  const zone = document.querySelector<HTMLElement>('[data-key="name-zone"]')
  if (!zone) return
  zone.outerHTML = usernameZone()
  changeUserNameStateSave()
  changeUserNameState()
}
