import { menuRender } from '../render/menu_render'
import { appState } from '../state/app_state'

export function toggleNavbar() {
  appState.isNavbarOpen = !appState.isNavbarOpen
  menuRender()
}
