import { renderTaskList } from '../render/list_render'
import { clickedOnAddEvent } from './card_event'
import { navbarMobileEvent } from './menu_event'
import { themeToggleEvent } from './theme_event'

export default function registry() {
  clickedOnAddEvent()
  themeToggleEvent()
  navbarMobileEvent()
  // Don't add any events after this line
  renderTaskList()
}
