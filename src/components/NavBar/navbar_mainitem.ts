export function NavBarMainItem(
  itemId: string,
  itemIconDefault: string,
  itemIconActive: string,
  itemLabel: string,
  isActive: boolean,
): string {
  return `
  <li data-nav-id="${itemId}" class="w-full flex flex-row items-center gap-4 py-2 pr-1  rounded-lg ${isActive ? "bg-primary-soft dark:bg-primary-soft" : ""}">
    <img src="${isActive ? itemIconActive : itemIconDefault}" alt="${itemLabel}" class="size-5 object-contain"/>
    <span class="text-sm  dark:text-text ${isActive ? "text-primary-hover font-bold" : "text-text-muted font-semibold"}">${itemLabel}</span>
  </li>
  `;
}
