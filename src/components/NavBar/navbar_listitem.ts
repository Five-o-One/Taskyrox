import type { NavBarItem } from "../../types/navbar_item";
import { NavBarMainItem } from "./navbar_mainitem";
const items: NavBarItem[] = [
  { itemIcon: "home", itemId: "0", itemLabel: "خانه" },
  { itemIcon: "checklist", itemId: "1", itemLabel: "تسک ها" },
  { itemIcon: "calendar", itemId: "2", itemLabel: "تقویم" },
  { itemIcon: "info", itemId: "3", itemLabel: "گزارشات" },
  { itemIcon: "settings", itemId: "4", itemLabel: "تنظیمات" },
  { itemIcon: "user", itemId: "5", itemLabel: "پشتیبانی" },
  { itemIcon: "userBold", itemId: "6", itemLabel: "پروفایل" },
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
