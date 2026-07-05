import { NavBarItem } from "./NavBar/navbar_listitem";
import { NavThemeToggle } from "./NavBar/navbar_themetoggle";
export function NavBar() {
  return `
    <navbar class="w-0 hidden h-screen p-4 bg-blue-400 md:w-1/5 md:block">
      ${NavBarItem()}
      ${NavThemeToggle()}
    </navbar>
    `;
}
