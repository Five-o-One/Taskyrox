import { toggleNavbar } from '../core/menu_toggle'

export function navbarMobileEvent() {
  // پیدا کردن دکمه همبرگری با آیدی که در کامپوننت دادی
  const menuOpen = document.getElementById('menu-open')
  const menuClose = document.getElementById('menu-close')

  menuOpen?.addEventListener('click', () => {
    toggleNavbar()
  })

  menuClose?.addEventListener('click', () => {
    toggleNavbar()
  })
}
