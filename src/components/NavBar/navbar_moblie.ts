import { NavBarList } from './navbar_list'
import { NavBarThemeToggle } from './navbar_theme_toggle'
import { NavBarItem } from './navbar_item'

/**
 * Creates the mobile version of the navigation bar.
 * Displays the mobile menu overlay, navigation items, theme toggle, and logout item.
 * @returns Mobile navigation bar HTML.
 */

export function NavbarMobile(): string {
  return /* HTML */ `
    <div
      id="menu-overlay"
      class="bg-overlay pointer-events-none fixed inset-0 z-40 opacity-0 transition-opacity duration-500"
    ></div>

    <aside
      id="navbar-main"
      class="bg-sidebar border-border-muted fixed inset-y-0 right-0 z-50 flex h-full w-72 translate-x-full transform flex-col gap-6 border-l p-5 shadow-2xl transition-transform duration-300"
    >
      <div class="flex items-center justify-between">
        <span class="text-text text-lg font-bold">کوئرا لیست</span>
        <button
          id="menu-close"
          class="text-icon active:bg-surface-active rounded-full p-2 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <nav class="">${NavBarList()}</nav>
        <div class="space-y-7">
          ${NavBarThemeToggle()}
          <div
            class="bg-border from-bg-elevated via-border to-bg-elevated mx-auto h-px w-full bg-linear-to-r"
          ></div>
          ${NavBarItem({ itemIcon: 'logout', itemId: 7, itemLabel: 'خروج' })}
        </div>
      </div>
    </aside>
  `
}
