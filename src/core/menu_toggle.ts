import { mobileMenu_render } from '../render/menu_render'
import { appState } from '../state/app_state'

/**
 * Toggles the mobile navigation state and updates its presentation.
 */
export function toggleNavbar() {
  appState.isNavbarOpen = !appState.isNavbarOpen
  mobileMenu_render()
}
