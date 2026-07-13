import { FaDic } from '../../dic/fa'
import { generateIcon } from '../../utils/icon_generator'

/**
 * Creates the compact card used to start adding a new task.
 * @returns Add-task card HTML.
 */
export function AddTaskCard() {
  return /* HTML */ `
    <div
      data-key="new-task-card"
      class="border-border bg-bg h-14 w-full cursor-pointer rounded-lg border border-dashed p-4"
    >
      <button class="text-primary flex gap-2 text-sm font-semibold select-none">
        ${generateIcon('xmark', 'w-4 h-4 fill-primary rotate-45')}
        <span>${FaDic.addingNewTaskTitle}</span>
      </button>
    </div>
  `
}
