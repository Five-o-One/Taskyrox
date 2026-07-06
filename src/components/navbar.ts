import { NavBarItem } from "./NavBar/navbar_item";
import { NavBarList } from "./NavBar/navbar_list";
import { NavBarProfile } from "./NavBar/navbar_profile";
import { NavBarThemeToggle } from "./NavBar/navbar_theme_toggle";
export function NavBar() {
  return `
    <navbar class="flex-col justify-around p-4 w-full hidden bg-bg-elevated h-11/12 shadow-lg rounded-lg shadow-icon-muted m-4 md:max-w-1/5 md:flex">
      ${NavBarProfile()}
      ${NavBarList()}
      <div class="flex flex-col gap-2">
      ${NavBarThemeToggle()}
      <div class="w-full h-px mx-auto bg-border bg-linear-to-r from-bg-elevated via-border to-bg-elevated"></div>
      ${NavBarItem({itemIcon:"logout",itemId:7,itemLabel:"خروج"})}
      </div>
    </navbar>
    `;
}
