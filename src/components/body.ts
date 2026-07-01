import { MainContent } from "./main_content";
import { NavBar } from "./navbar";

export function Body() {
  return `
    <main class="flex flex-row">
    ${NavBar()}
    ${MainContent()}
    </main>
    `;
}
