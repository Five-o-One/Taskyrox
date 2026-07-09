import { MainContent } from './main_content'
import { NavBar } from './navbar'
import { NavbarMobileHeader } from './NavBar/navbar_header'
import { NavbarMobile } from './NavBar/navbar_moblie'

export function Body() {
  return /* HTML */ `
    ${NavbarMobileHeader()}
    <main
      class="bg-bg container mx-auto flex h-screen w-full flex-row items-center justify-center overflow-hidden"
    >
      ${NavbarMobile()} ${NavBar()} ${MainContent()}
    </main>
  `
}
