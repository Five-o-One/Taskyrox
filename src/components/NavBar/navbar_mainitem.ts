import type { NavBarItem } from "../../types/navbar_item";
import { navbarState } from "../../state/navbar_state";
import { iconGen } from "../../utils/icon_generator";
export function NavBarMainItem({
  itemId,
  itemIcon,
  itemLabel,
}: NavBarItem): string {
  const isActive: boolean = navbarState.openPageId === itemId;
  const iconClasses = `size-5 object-contain dark:fill-text ${isActive ? "fill-primary" : "fill-text-muted"}`;
  return `
  <div id="${itemId}" class="w-full flex flex-row items-center gap-4 py-2 pr-1  rounded-lg ${isActive ? "bg-primary-soft" : ""}">
    ${iconGen(itemIcon as Parameters<typeof iconGen>[0], iconClasses)}
    <span class="text-sm ${isActive ? "text-primary-hover font-bold" : "text-text-muted font-semibold"}">${itemLabel}</span>
  </div>
  `;
}
