import type { NavBarItem } from "../../types/navbar_item";
export function NavBarMainItem({
  itemId,
  isActive,
  itemIcon,
  itemLabel,
}: NavBarItem): string {
  return `
  <div id="${itemId}" class="w-full flex flex-row items-center gap-4 py-2 pr-1  rounded-lg ${isActive ? "bg-primary-soft" : ""}">
    <svg src="${itemIcon}" alt="${itemLabel}" class="size-5 object-contain dark:fill-text ${isActive ? "fill-primary" : "fill-text-muted"}" />
    <span class="text-sm ${isActive ? "text-primary-hover font-bold" : "text-text-muted font-semibold"}">${itemLabel}</span>
  </div>
  `;
}
