import { ColorPriorityPiece } from './priority_span_color'

export function SelectPriority() {
  return /* HTML */ `
    <div
      class="border-border flex w-fit flex-row items-center gap-4 rounded-lg border p-2.5 shadow"
    >
      <div
        id="lowPriorityBtn"
        class="cursor-pointer select-none active:scale-90"
      >
        ${ColorPriorityPiece('LOW')}
      </div>
      <div class="bg-border h-5 w-px rounded-2xl"></div>
      <div
        id="mediumPriorityBtn"
        class="cursor-pointer select-none active:scale-90"
      >
        ${ColorPriorityPiece('MEDIUM')}
      </div>
      <div class="bg-border h-5 w-px rounded-2xl"></div>
      <div
        id="highPriorityBtn"
        class="cursor-pointer select-none active:scale-90"
      >
        ${ColorPriorityPiece('HIGH')}
      </div>
    </div>
  `
}
