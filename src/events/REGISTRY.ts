import { clickedOnAddEvent } from './card_event'
import { CardOptionBtnEvent } from './card_option_btn_event'
import { themeToggleEvent } from './theme_event'

export default function registry() {
  clickedOnAddEvent()
  themeToggleEvent()
  CardOptionBtnEvent()
}
