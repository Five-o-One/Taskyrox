import { ColorPriorityPiece } from './priority_span_color'

/**
 * Creates the priority selection menu for a task.
 * Shows low, medium, and high priority options.
 * Used in the edit form when the user wants to select or change the task priority.
 * @returns Priority selection menu HTML.
 */

export function SelectPriority() {
  return /* HTML */ `
    <div
      class="border-border flex w-fit flex-row items-center gap-4 rounded-lg border p-2.5 shadow"
    >
      <div
        data-key="priority-low-button"
        class="cursor-pointer select-none active:scale-90"
      >
        ${ColorPriorityPiece('LOW')}
      </div>
      <div class="bg-border h-5 w-px rounded-2xl"></div>
      <div
        data-key="priority-medium-button"
        class="cursor-pointer select-none active:scale-90"
      >
        ${ColorPriorityPiece('MEDIUM')}
      </div>
      <div class="bg-border h-5 w-px rounded-2xl"></div>
      <div
        data-key="priority-high-button"
        class="cursor-pointer select-none active:scale-90"
      >
        ${ColorPriorityPiece('HIGH')}
      </div>
    </div>
  `
}
