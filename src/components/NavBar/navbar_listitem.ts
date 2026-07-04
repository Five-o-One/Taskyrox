import type { NavBarItem } from "../../types/navbar_item";
import { NavBarMainItem } from "./navbar_mainitem";
const items: NavBarItem[] = [
  { itemIcon: "", itemId: "0", itemLabel: "home" },
  { itemIcon: "", itemId: "1", itemLabel: "home" },
  { itemIcon: "", itemId: "2", itemLabel: "home" },
  { itemIcon: "", itemId: "3", itemLabel: "home" },
  { itemIcon: "", itemId: "4", itemLabel: "home" },
  { itemIcon: "", itemId: "5", itemLabel: "home" },
  { itemIcon: "", itemId: "6", itemLabel: "home" },
];
export function NavBarItem(): string {
  return `
  <div>
    <ul class="flex flex-col gap-2 w-full">
      ${items
        .map((item) => {
          return `<li>${NavBarMainItem(item)}</li>`;
        })
        .join("")}
    </ul>
  </div>
          `;
}
