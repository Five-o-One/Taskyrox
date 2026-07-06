import type { NavBarItem } from "../../types/navbar";
import { NavBarItem as Item } from "./navbar_item";
const items: NavBarItem[] = [
  { itemIcon: "home", itemId: 0, itemLabel: "خانه" },
  { itemIcon: "checklist", itemId: 1, itemLabel: "تسک ها" },
  { itemIcon: "calendar", itemId: 2, itemLabel: "تقویم" },
  { itemIcon: "square", itemId: 3, itemLabel: "گزارشات" },
  { itemIcon: "settings", itemId: 4, itemLabel: "تنظیمات" },
  { itemIcon: "info", itemId: 5, itemLabel: "پشتیبانی" },
  { itemIcon: "user", itemId: 6, itemLabel: "پروفایل" },
];
export function NavBarList(): string {
  return `
  <div>
    <ul class="flex flex-col gap-2 w-full">
      ${items
        .map((item) => {
          return `<li>${Item(item)}</li>`;
        })
        .join("")}
    </ul>
  </div>
          `;
}
