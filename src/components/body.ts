import { MainContent } from './main_content'
import { NavBar } from './navbar'
import { NavbarMobileHeader } from './NavBar/navbar_header'

export function Body() {
  return /* HTML */ `
    ${NavbarMobileHeader()}
    <main
      class="bg-bg container mx-auto flex h-screen w-full flex-row items-center justify-center overflow-hidden"
    >
      ${NavBar()} ${MainContent()}
    </main>
  `
}
