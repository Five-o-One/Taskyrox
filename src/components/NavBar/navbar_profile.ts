import { FaDic } from '../../dic/fa'
import { appState } from '../../state/app_state'
import { NavProfileAvatar } from './navbar_profile_avatar'

/**
 * Creates the profile section of the navigation bar.
 * Displays the user's avatar, name, and current date using `appState.navbarProfile`.
 * @returns Navigation profile HTML.
 */

export function NavBarProfile(): string {
  const { avatarUrl, username, date } = appState.navbarProfile
  return /* HTML */ `
    <div class="flex max-w-58 flex-row gap-3">
      ${NavProfileAvatar(avatarUrl)}
      <div class="flex flex-col gap-1">
        <p class="text-text text-lg font-extrabold">
          ${FaDic.navbarGreeting} ${username}
        </p>
        <span class="text-text-secondary text-sm font-semibold">${date}</span>
      </div>
    </div>
  `
}
