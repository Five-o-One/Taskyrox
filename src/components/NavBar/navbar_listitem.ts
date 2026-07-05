import type { NavBarItem } from "../../types/navbar_item";
import { NavBarMainItem } from "./navbar_mainitem";
const items: NavBarItem[] = [
  { itemIcon: "", itemId: "0", itemLabel: "خانه" },
  { itemIcon: "", itemId: "1", itemLabel: "تسک ها" },
  { itemIcon: "", itemId: "2", itemLabel: "تقویم" },
  { itemIcon: "", itemId: "3", itemLabel: "گزارشات" },
  { itemIcon: "", itemId: "4", itemLabel: "تنظیمات" },
  { itemIcon: "", itemId: "5", itemLabel: "پشتیبانی" },
  { itemIcon: "", itemId: "6", itemLabel: "پروفایل" },



  
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
