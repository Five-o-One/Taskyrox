import { appState } from "../../state/app_state";
export function NavBarProfile(): string {
  const { avatarUrl, username, date } = appState.navbarProfile;
  return `
  <div class="max-w-58 flex flex-row gap-3">
    <img src="${avatarUrl}" alt="profile" class="size-14 rounded-full object-contain">
    <div class="flex flex-col gap-1">
      <p class="text-text text-lg font-extrabold">سلام ${username}</p>
      <span class="text-text-secondary text-sm font-semibold">${date}</span>
    </div>
  </div>
  `;
}
