import { toggleNavbar } from '../core/menu_toggle'
import { appState } from '../state/app_state'

/**
 * Binds the mobile navigation open and close controls.
 */
export function mobileMenuToggle_event() {
  const menuOpen = document.querySelector<HTMLElement>('[data-key="menu-open"]')
  const menuClose = document.querySelector<HTMLElement>(
    '[data-key="menu-close"]',
  )

  menuOpen?.addEventListener('click', () => {
    if (!appState.isNavbarOpen) toggleNavbar()
  })

  menuClose?.addEventListener('click', () => {
    if (appState.isNavbarOpen) toggleNavbar()
  })
}
