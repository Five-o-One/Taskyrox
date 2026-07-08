import type { priority } from '../../types/task'

export function PriorityNavColor(taskPriority: priority) {
  switch (taskPriority) {
    case 'LOW':
      return /* HTML */ `
        <div
          id="priorityColorID"
          class="bg-success absolute top-0 right-0 h-full w-1 rounded-lg"
        ></div>
      `
    case 'MEDIUM':
      return /* HTML */ `
        <div
          id="priorityColorID"
          class="bg-warning absolute top-0 right-0 h-full w-1 rounded-lg"
        ></div>
      `
    case 'HIGH':
      return /* HTML */ `
        <div
          id="priorityColorID"
          class="bg-danger absolute top-0 right-0 h-full w-1 rounded-lg"
        ></div>
      `
  }
}
