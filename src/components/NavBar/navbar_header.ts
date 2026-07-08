export function NavbarMobileHeader(): string {
  return /* HTML */ `
    <div
      class="bg-bg-elevated flex w-full items-center gap-4 rounded-lg p-4 md:hidden lg:hidden"
    >
      <div id="menu-toggle" class="flex flex-col space-y-2">
        <div class="bg-text h-px w-5"></div>
        <div class="bg-text h-px w-5"></div>
        <div class="bg-text h-px w-5"></div>
      </div>
      <span class="text-text flex-1 text-center text-lg font-semibold"
        >کوئرا لیست</span
      >
    </div>
  `
}
