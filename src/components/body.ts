import { MainContent } from './main_content'
import { NavBar } from './navbar'
import { NavbarMobileHeader } from './NavBar/navbar_header'
import { NavbarMobile } from './NavBar/navbar_moblie'
import { NavBarPage } from './NavBar/navbar_page'

/**
 * The initial structure is shown here.
 * @returns the whole components.
 */

export function Body() {
  return /* HTML */ `
    ${NavBarPage('خونه')}
  `
}
