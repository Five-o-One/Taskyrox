import { FaDic } from '../../dic/fa'
import { iconGen } from '../../utils/icon_generator'

/**
 *
 * @returns This component creates the UI for adding a new task.
 * It uses `FaDic` for the button's title and `iconGen` for generating icons with the determined appearance.
 */

export function AddNewTask() {
  return /* HTML */ `
    <div
      data-key="new-task-card"
      class="border-border bg-bg h-14 w-full cursor-pointer rounded-lg border border-dashed p-4"
    >
      <button class="text-primary flex gap-2 text-sm font-semibold select-none">
        ${iconGen('xmark', 'w-4 h-4 fill-primary rotate-45')}
        <span>${FaDic.addingNewTaskTitle}</span>
      </button>
    </div>
  `
}
