import { appState } from '../state/app_state'

export function menuRender() {
  const sidebar = document.querySelector<HTMLElement>(
    '[data-key="navbar-main"]',
  )
  const overlay = document.querySelector<HTMLElement>(
    '[data-key="menu-overlay"]',
  )

  if (!sidebar || !overlay) return

  if (appState.isNavbarOpen) {
    overlay.classList.remove('pointer-events-none')

    setTimeout(() => {
      sidebar.classList.remove('translate-x-full')
      sidebar.classList.add('translate-x-0')
      overlay.classList.add('opacity-100')
    }, 10)
  } else {
    sidebar.classList.remove('translate-x-0')
    sidebar.classList.add('translate-x-full')
    overlay.classList.remove('opacity-100')

    setTimeout(() => {
      overlay.classList.add('pointer-events-none')
    }, 300)
  }
}
