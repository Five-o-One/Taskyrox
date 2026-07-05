import { ColorPriorityPiece } from "./PriortiySpanColor";

export function SelectPriority() {
  return /* html */ `
    <div class="flex w-fit p-2.5 flex-row items-center border border-border rounded-lg gap-4 shadow">
              <div class="cursor-pointer active:scale-90 select-none">${ColorPriorityPiece("LOW")}</div>
              <div class="w-px bg-border h-5 rounded-2xl"></div>
              <div class="cursor-pointer active:scale-90 select-none">${ColorPriorityPiece("MEDIUM")}</div>
              <div class="w-px bg-border h-5 rounded-2xl"></div>
              <div class="cursor-pointer active:scale-90 select-none">${ColorPriorityPiece("HIGH")}</div>
          </div>
    `;
}
