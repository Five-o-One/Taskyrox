import { iconGen } from '../../utils/icon_generator'

export function NavProfileAvatar(avatarUrl: string): string {
  if (avatarUrl != '') {
    return /* HTML */ `<img
      src="${avatarUrl}"
      alt="profile"
      class="size-14 shrink-0 rounded-full object-cover"
    />`
  }

  return /* HTML */ `
    <div class="flex size-14 shrink-0 items-center justify-center rounded-full">
      ${iconGen('userBold', 'size-7 fill-text-muted')}
    </div>
  `
}
