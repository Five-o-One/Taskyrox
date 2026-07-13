import { FaDic } from '../../dic/fa'
import type { priority } from '../../types/task'

/**
 * Creates the priority label for a task.
 * Displays a different label and color based on the task priority (`HIGH`, `MEDIUM`, `LOW`).
 * @param taskPriority The priority level of the task.
 * @returns Priority label HTML.
 */
export function TaskPriorityBadge(taskPriority: priority) {
  switch (taskPriority) {
    case 'HIGH':
      return /* HTML */ `
        <span
          class="bg-danger-soft text-danger w-fit items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold"
          >${FaDic.highPriorityTitle}</span
        >
      `
    case 'MEDIUM':
      return /* HTML */ `
        <span
          class="bg-warning-soft text-warning w-fit items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold"
          >${FaDic.mediumPriorityTitle}</span
        >
      `
    case 'LOW':
      return /* HTML */ `
        <span
          class="bg-success-soft text-success w-fit items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold"
          >${FaDic.lowPriorityTitle}</span
        >
      `
  }
}
