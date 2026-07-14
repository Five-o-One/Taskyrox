import { FaDic } from '../dic/fa'
import { NavBarPage } from './NavBar/navbar_page'

export function MainContent() {
  return /* HTML */ `
    <main class="h-full w-full flex-1">
      ${NavBarPage(FaDic.navbarCalendarTitle)}
    </main>
  `
}