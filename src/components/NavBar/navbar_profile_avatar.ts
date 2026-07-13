import { iconGen } from '../../utils/icon_generator'

/**
 * Creates the user avatar for the navigation profile.
 * Displays the user's image if available, otherwise shows a default user icon.
 * @param avatarUrl The user's avatar image URL.
 * @returns Avatar HTML.
 */

export function NavProfileAvatar(
  avatarUrl: string,
  scope: 'desktop' | 'mobile' = 'desktop',
): string {
  const hasAvatar = avatarUrl.trim() !== ''

  const img = hasAvatar
    ? /* HTML */ `<img
        data-key="filled-profile-image-${scope}"
        src="${avatarUrl}"
        alt="profile"
        class="size-14 shrink-0 rounded-full object-cover"
      />`
    : /* HTML */ `
        <div
          data-key="empty-profile-image-${scope}"
          class="flex size-14 shrink-0 items-center justify-center rounded-full"
        >
          ${iconGen('userBold', 'size-7 fill-text-muted')}
        </div>
      `

  return /* HTML */ `
    <div data-key="profile-image-${scope}" class="cursor-pointer">${img}</div>
  `
}
