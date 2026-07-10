import { FaDic } from '../../dic/fa'
import type { NavBarItem } from '../../types/navbar'
import { NavBarItem as Item } from './navbar_item'

/**
 * Creates the main navigation item list.
 * Used to display the middle section of the sidebar navigation.
 * Renders all navbar items using the predefined navbar items array and `NavBarItem`.
 * @returns Navigation item list HTML.
 */

const items: NavBarItem[] = [
  { itemIcon: 'home', itemId: 0, itemLabel: FaDic.navbarHomeTitle},
  { itemIcon: 'checklist', itemId: 1, itemLabel: FaDic.navbarTasksTitle},
  { itemIcon: 'calendar', itemId: 2, itemLabel: FaDic.navbarCalendarTitle},
  { itemIcon: 'square', itemId: 3, itemLabel: FaDic.navbarReportsTitle},
  { itemIcon: 'settings', itemId: 4, itemLabel: FaDic.navbarSettingsTitle},
  { itemIcon: 'info', itemId: 5, itemLabel: FaDic.navbarSupportTitle},
  { itemIcon: 'user', itemId: 6, itemLabel: FaDic.navbarProfileTitle},
]
export function NavBarList(): string {
  return /* HTML */ `
    <div>
      <ul class="flex w-full flex-col gap-2">
        ${items
          .map((item) => {
            return `<li>${Item(item)}</li>`
          })
          .join('')}
      </ul>
    </div>
  `
}
