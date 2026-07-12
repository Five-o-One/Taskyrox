import { MainContent } from './main_content'
import { NavBar } from './navbar'
import { NavbarMobileHeader } from './NavBar/navbar_header'
import { NavbarMobile } from './NavBar/navbar_moblie'

/**
 * The initial structure is shown here.
 * @returns the whole components.
 */

export function Body() {
  return /* HTML */ `
    ${NavbarMobileHeader()}
    <main
      class="bg-bg container mx-auto flex h-screen w-full flex-row items-center justify-center"
    >
      ${NavbarMobile()} ${NavBar()} ${MainContent()}
    </main>
  `
}
