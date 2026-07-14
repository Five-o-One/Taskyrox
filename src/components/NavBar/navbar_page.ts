import { FaDic } from '../../dic/fa'
import type { NavBarItem } from '../../types/navbar'

/**
 * Creates an under construction page for unavailable navbar sections.
 * Displays the selected page title with a placeholder message.
 * @param itemLabel Selected navbar item label.
 * @returns Under construction page HTML.
 */

export function NavBarPage(
  itemLabel: NavBarItem['itemLabel'],
): string {
  return /* HTML */ `
    <section
      class="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden bg-[url('/UnderConstruction_Background.png')] bg-cover bg-center bg-no-repeat"
    >
      <div class="absolute inset-0 bg-white/30"></div>

      <div
        class="relative z-10 mx-4 flex w-full max-w-xl flex-col items-center gap-5 rounded-3xl border border-white/60 bg-white/75 px-6 py-8 text-center shadow-xl backdrop-blur-md md:px-10 md:py-12"
      >
        <h1 class="text-text text-3xl font-extrabold md:text-4xl">
          ${FaDic.navbarPageTitle} ${itemLabel}
        </h1>

        <span
          class="bg-primary-soft text-primary rounded-full px-4 py-2 text-sm font-bold"
        >
          ${FaDic.navbarPageStatus}
        </span>

        <p
          class="text-text-secondary max-w-md whitespace-pre-line text-base leading-8"
        >
          ${FaDic.navbarPageDescription}
        </p>
      </div>
    </section>
  `
}