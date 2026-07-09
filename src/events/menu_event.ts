import { toggleNavbar } from '../core/menu_toggle'
import { appState } from '../state/app_state'

export function navbarMobileEvent() {
  const menuOpen = document.getElementById('menu-open')
  const menuClose = document.getElementById('menu-close')

  menuOpen?.addEventListener('click', () => {
    if (!appState.isNavbarOpen) toggleNavbar()
  })

  menuClose?.addEventListener('click', () => {
    if (appState.isNavbarOpen) toggleNavbar()
  })
}
