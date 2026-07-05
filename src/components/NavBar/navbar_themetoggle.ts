export function NavThemeToggle(): string {
  return `
  <div class="flex flex-row w-full bg-surface p-1 rounded-lg gap-0.5">
    <label class="flex flex-row items-center gap-1.5 w-full py-1.5 rounded-md bg-bg dark:bg-none cursor-pointer">
      <input type="radio" name="theme" id="theme-light" class="hidden" checked />

      <svg class="size-4 text-text" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" fill="currentColor"/>
        <path
          d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <span class="text-sm font-semibold text-text">
        روشن
      </span>
    </label>

    <label class="flex flex-row items-center gap-1.5 w-full py-1.5 rounded-md cursor-pointer dark:bg-surface bg-none">
      <input type="radio" name="theme" id="theme-dark" class="hidden" />

      <svg class="size-4 text-text-muted" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
          fill="currentColor"
        />
      </svg>

      <span class="text-sm font-semibold text-text-muted">
        تاریک
      </span>
    </label>
  </div>
  `;
}
