import { UsernameZone } from '../components/NavBar/navbar_profile'
import {
  usernameEdit_event,
  usernameSave_event,
} from '../events/username_event'

/**
 * Re-renders the username area and binds its current interaction events.
 */
export function usernameEditor_render() {
  const zones = document.querySelectorAll<HTMLElement>('[data-key="name-zone"]')
  if (!zones) return
  zones.forEach((zone) => {
    zone.outerHTML = UsernameZone()
    usernameSave_event()
    usernameEdit_event()
  })
}
