/**
 * This function contains a header which is shown only in mobile.
 * @returns the header that contains menu button and logo.
 */

import { FaDic } from '../../dic/fa'

export function NavbarMobileHeader(): string {
  return /* HTML */ `
    <div
      class="bg-bg-elevated flex w-full items-center gap-4 rounded-lg p-4 md:hidden lg:hidden"
    >
      <div data-key="menu-open" class="flex flex-col gap-1">
        <span class="bg-icon h-0.5 w-6 rounded-full"></span>
        <span class="bg-icon h-0.5 w-6 rounded-full"></span>
        <span class="bg-icon h-0.5 w-6 rounded-full"></span>
      </div>
      <span class="text-text flex-1 text-center text-lg font-semibold"
        >${FaDic.appName}</span
      >
    </div>
  `
}
