import { iconGen } from "../../utils/icon_generator";

export function EditButtonDiv() {
  return /* html */ `
            <div class="border border-border rounded-lg gap-2.5 shadow flex flex-row bg-bg p-1.5 ">
            <div class="cursor-pointer active:scale-90 select-none">${iconGen("trash", "fill-icon")}</div>      
            <div class="w-px bg-border h-5 rounded-2xl"></div>
            <div class="cursor-pointer active:scale-90 select-none">${iconGen("pen", "fill-icon")}</div>      
            </div>
`;
}
