import { UsernameZone } from '../components/NavBar/navbar_profile'
import {
  usernameEdit_event,
  usernameSave_event,
} from '../events/username_event'

export function usernameEditor_render() {
  const zone = document.querySelector<HTMLElement>('[data-key="name-zone"]')
  if (!zone) return
  zone.outerHTML = UsernameZone()
  usernameSave_event()
  usernameEdit_event()
}
