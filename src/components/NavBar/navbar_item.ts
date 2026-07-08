import type { NavBarItem } from '../../types/navbar'
import { appState } from '../../state/app_state'
import { iconGen } from '../../utils/icon_generator'
export function NavBarItem({
  itemId,
  itemIcon,
  itemLabel,
}: NavBarItem): string {
  const isActive: boolean = appState.openPageId === itemId
  const iconClasses = `size-5 object-contain dark:fill-text ${isActive ? 'fill-primary' : 'fill-text-muted'}`
  return /* HTML */ `
    <div
      id="${itemId}"
      class="${isActive ? 'bg-primary-soft' : ''} flex w-full cursor-pointer flex-row items-center gap-4 rounded-lg py-2 pr-1 select-none"
    >
      ${iconGen(itemIcon, iconClasses)}
      <span
        class="${isActive ? 'text-primary-hover font-bold' : 'text-text-muted font-semibold'} text-sm"
        >${itemLabel}</span
      >
    </div>
  `
}
