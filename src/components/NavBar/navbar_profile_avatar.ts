import { iconGen } from "../../utils/icon_generator";

export function NavProfileAvatar(avatarUrl: string): string {
  if (avatarUrl != "") {
    return `<img src="${avatarUrl}" alt="profile" class="size-14 rounded-full object-cover shrink-0" />`;
  }

  return `
  <div class="size-14 rounded-full flex items-center justify-center shrink-0">
    ${iconGen("userBold", "size-7 fill-text-muted")}
  </div>
  `;
}
