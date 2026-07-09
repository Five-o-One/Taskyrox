import { clickedOnAddEvent } from './card_event'
import { navbarMobileEvent } from './menu_event'
import { themeToggleEvent } from './theme_event'

export default function registry() {
  clickedOnAddEvent()
  themeToggleEvent()
  navbarMobileEvent()
}
