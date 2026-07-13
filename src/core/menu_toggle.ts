import { mobileMenu_render } from '../render/menu_render'
import { appState } from '../state/app_state'

export function toggleNavbar() {
  appState.isNavbarOpen = !appState.isNavbarOpen
  mobileMenu_render()
}
