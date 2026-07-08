import { iconGen } from "../../utils/icon_generator";

export function NavbarMobileHeader(): string {
  return `
  <div class="w-full flex items-center gap-4 p-4 m-4 bg-bg-elevated rounded-lg md:hidden">
    <div class="size-6 cursor-pointer">
      ${iconGen("menu", "size-6 fill-text rotate-90")}
    </div>
    <span class="text-lg font-semibold text-text flex-1 text-center">کوئرا لیست</span>
  </div>
  `;
}
