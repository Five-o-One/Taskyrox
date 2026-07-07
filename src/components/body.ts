import { appState } from "../state/app_state";
import { MainContent } from "./main_content";
import { NavBar } from "./navbar";

export function Body() {
  return `
    <main id="body" data-theme="${appState.theme}" class="flex flex-row container mx-auto overflow-hidden w-full h-screen bg-bg justify-center items-center">
    ${NavBar()}
    ${MainContent()}
    </main>
    `
}
