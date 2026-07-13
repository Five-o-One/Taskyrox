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
      <div data-key="menu-open" class="flex flex-col space-y-2">
        <div class="bg-text h-px w-5"></div>
        <div class="bg-text h-px w-5"></div>
        <div class="bg-text h-px w-5"></div>
      </div>
      <span class="text-text flex-1 text-center text-lg font-semibold"
        >${FaDic.appName}</span
      >
    </div>
  `
}
