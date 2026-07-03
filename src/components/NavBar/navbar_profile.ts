export function NavProfile(
  name: string,
  date: string,
  avatarUrl: string,
): string {
  return `
  <div class="max-w-58 flex flex-row gap-3">
    <img src="${avatarUrl}" alt="profile" class="size-14 rounded-full object-contain">
    <div class="flex flex-col gap-1">
      <p class="text-text dark:text-text text-lg font-extrabold">سلام ${name}</p>
      <span class="text-text-secondary dark:text-text-secondary text-sm font-semibold">${date}</span>
    </div>
  </div>
  `;
}
