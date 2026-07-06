import { NavBarItem } from "./NavBar/navbar_listitem";
import { NavBarProfile } from "./NavBar/navbar_profile";
import { NavBarThemeToggle } from "./NavBar/navbar_theme_toggle";
export function NavBar() {
  return `
    <navbar class="flex-col justify-around w-0 hidden h-screen p-4 bg-bg shadow md:w-1/5 md:flex">
      ${NavBarProfile()}
      ${NavBarItem()}
      ${NavBarThemeToggle()}
    </navbar>
    `;
}
