import { MainContent } from "./main_content";
import { NavBar } from "./navbar";

export function Body() {
  return `
    <main data-theme="light" class="flex flex-row container mx-auto overflow-hidden w-full h-screen bg-bg justify-center items-center">
    ${NavBar()}
    ${MainContent()}
    </main>
    `;
}
