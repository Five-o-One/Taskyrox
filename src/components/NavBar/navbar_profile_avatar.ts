import { iconGen } from '../../utils/icon_generator'

/**
 * Creates the user avatar for the navigation profile.
 * Displays the user's image if available, otherwise shows a default user icon.
 * @param avatarUrl The user's avatar image URL.
 * @returns Avatar HTML.
 */

export function NavProfileAvatar(avatarUrl: string): string {
  const hasAvatar = avatarUrl.trim() !== ''

  const img = hasAvatar
    ? /* HTML */ `<img
        id="filledImageProfile"
        src="${avatarUrl}"
        alt="profile"
        class="size-14 shrink-0 rounded-full object-cover"
      />`
    : /* HTML */ `
        <div
          id="emptyImageProfile"
          class="flex size-14 shrink-0 items-center justify-center rounded-full"
        >
          ${iconGen('userBold', 'size-7 fill-text-muted')}
        </div>
      `

  return /* HTML */ `
    <div id="imageProfile" class="cursor-pointer">${img}</div>
  `
}
