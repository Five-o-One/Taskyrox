import { iconGen } from "../../utils/icon_generator";

export function NavbarMobileHeader(): string {
  return `
  <div class="w-full right-4 flex items-center gap-4 md:hidden">
    <div class="size-6">
      ${iconGen("info", "fill-text-text cursor-pointer md:hidden")}
    </div>

    <span class=" text-lg font-semibold text-[#141414] md:hidden">
      کوئرا لیست
    </span>
  </div>
  `;
}
