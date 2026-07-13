import { FaDic } from '../dic/fa'
import { NavBarItem } from './NavBar/navbar_item'
import { NavBarList } from './NavBar/navbar_list'
import { NavBarProfile } from './NavBar/navbar_profile'
import { NavBarThemeToggle } from './NavBar/navbar_theme_toggle'

/**
 * Creates the main navigation sidebar.
 * Displays the user profile, navigation list, theme toggle, and logout item.
 * @returns Navigation bar HTML.
 */
export function NavBar() {
  return /* HTML */ `
    <navbar
      class="bg-bg-elevated m-4 hidden h-11/12 w-full flex-col justify-around rounded-lg p-4 shadow-md md:flex md:max-w-2/5 lg:max-w-1/5"
    >
      ${NavBarProfile('desktop')} ${NavBarList('desktop')}
      <div class="flex flex-col gap-2">
        ${NavBarThemeToggle('desktop')}
        <div
          class="bg-border from-bg-elevated via-border to-bg-elevated mx-auto h-px w-full bg-linear-to-r"
        ></div>
        ${NavBarItem({ itemIcon: 'logout', itemId: 7, itemLabel: FaDic.logoutTitle, scope: 'desktop' })}
      </div>
    </navbar>
  `
}
