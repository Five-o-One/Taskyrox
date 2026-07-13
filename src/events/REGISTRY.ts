import { taskList_render } from '../render/list_render'
import { taskCardInteractions_event } from './card_event'
import { mobileMenuToggle_event } from './menu_event'
import { profileImageSelection_event } from './profile_img_event'
import { themeToggle_event } from './theme_event'
import { usernameEdit_event } from './username_event'

/**
 * Registers application-level event handlers and performs the first task render.
 */
export default function eventRegistry_event() {
  taskCardInteractions_event()
  themeToggle_event()
  mobileMenuToggle_event()
  profileImageSelection_event()
  usernameEdit_event()
  // Don't add any events after this line
  taskList_render()
}
