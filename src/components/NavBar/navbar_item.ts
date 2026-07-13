import type { NavBarItem } from '../../types/navbar'
import { appState } from '../../state/app_state'
import { iconGen } from '../../utils/icon_generator'

/**
 * Creates a single navbar item.
 * Displays the item icon and label, and applies active or inactive styles based on `appState`.
 * @param itemId The unique key of the navbar item.
 * @param itemIcon The icon name of the navbar item.
 * @param itemLabel The display label of the navbar item.
 * @returns Navigation bar item HTML.
 */

export function NavBarItem({
  itemId,
  itemIcon,
  itemLabel,
  scope = 'desktop',
}: NavBarItem): string {
  const isActive: boolean = appState.openPageId === itemId
  return /* HTML */ `
    <div
      data-key="navbar-item-${scope}-${itemId}"
      class="group ${isActive ? 'bg-primary-soft' : ''} flex w-full cursor-pointer flex-row items-center gap-4 rounded-lg py-2 pr-1 select-none"
    >
      ${iconGen(itemIcon, `size-5 object-contain ${isActive ? 'fill-primary' : 'fill-text-muted'}  duration-300 transition-discrete ease-in group-hover:-translate-y-2 group-hover:rotate-45`)}
      <span
        class="${isActive ? 'text-primary-hover font-bold' : 'text-text-muted font-semibold'} text-sm"
        >${itemLabel}</span
      >
    </div>
  `
}
