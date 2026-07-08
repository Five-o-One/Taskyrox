import { MainContent } from './main_content'
import { NavBar } from './navbar'

export function Body() {
  return /* HTML */ `
    <main
      class="bg-bg container mx-auto flex h-screen w-full flex-row items-center justify-center overflow-hidden"
    >
      ${NavBar()} ${MainContent()}
    </main>
  `
}
