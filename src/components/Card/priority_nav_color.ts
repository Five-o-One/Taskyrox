import type { priority } from '../../types/task'

/**
 * Creates the priority color bar for a task card.
 * Displays a different color based on the task priority (`LOW`, `MEDIUM`, `HIGH`).
 * @param taskPriority The priority level of the task.
 * @returns Priority color bar HTML.
 */

export function PriorityNavColor(taskPriority: priority, taskId: number) {
  switch (taskPriority) {
    case 'LOW':
      return /* HTML */ `
        <div
          data-key="priority-color-${taskId}"
          class="bg-success absolute top-0 right-0 h-full w-1 rounded-lg"
        ></div>
      `
    case 'MEDIUM':
      return /* HTML */ `
        <div
          data-key="priority-color-${taskId}"
          class="bg-warning absolute top-0 right-0 h-full w-1 rounded-lg"
        ></div>
      `
    case 'HIGH':
      return /* HTML */ `
        <div
          data-key="priority-color-${taskId}"
          class="bg-danger absolute top-0 right-0 h-full w-1 rounded-lg"
        ></div>
      `
  }
}
