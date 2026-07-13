import { FaDic } from '../../dic/fa'
import { appState } from '../../state/app_state'
import { NavBarProfileAvatar } from './navbar_profile_avatar'

/**
 * Creates the profile section of the navigation bar.
 * Displays the user's avatar, name, and current date using `appState.navbarProfile`.
 * @returns Navigation profile HTML.
 */

export const UsernameZone = () => {
  const { username, isUsernameEditable } = appState.navbarProfile
  let out = isUsernameEditable
    ? /* HTML */ `<div
        class="border-border has-focus:border-primary flex flex-row rounded-lg border px-4 py-2"
      >
        <input
          data-key="name-input"
          type="text"
          minlength="3"
          maxlength="20"
          class="w-full rounded-lg outline-0"
        />
        <button
          data-key="name-save-button"
          class="bg-primary-soft text-primary cursor-pointer rounded-lg px-2 py-1 text-sm font-normal"
        >
          ${FaDic.saveTitle}
        </button>
      </div>`
    : /* HTML */ `<span data-key="name-output"
        >${FaDic.navbarGreeting} ${username}</span
      >`
  return /* HTML */ `<div
    class="text-text flex flex-row flex-nowrap text-lg font-extrabold"
    data-key="name-zone"
  >
    ${out}
  </div>`
}

export function NavBarProfile(scope: 'desktop' | 'mobile' = 'desktop'): string {
  const { avatarUrl, date } = appState.navbarProfile
  return /* HTML */ `
    <div class="flex w-full flex-row gap-3">
      ${NavBarProfileAvatar(avatarUrl, scope)}
      <div class="flex flex-col gap-1">
        ${UsernameZone()}
        <span class="text-text-secondary text-sm font-semibold">${date}</span>
      </div>
    </div>
  `
}
