import { modifyTaskCard_render } from '../render/modify_render'
import { currentTask } from '../state/task_state'
import type { Task } from '../types/task'

export function selectTaskPriority(priority: Task['priority']) {
  currentTask.priority = priority
  currentTask.state.isTagmenuOpened = false
  modifyTaskCard_render()
}

export function selectPriorityFromTarget(target: HTMLElement): boolean {
  const priorities: { selector: string; value: Task['priority'] }[] = [
    { selector: '[data-key="priority-low-button"]', value: 'LOW' },
    { selector: '[data-key="priority-medium-button"]', value: 'MEDIUM' },
    { selector: '[data-key="priority-high-button"]', value: 'HIGH' },
  ]
  for (const priority of priorities) {
    if (target.closest(priority.selector)) {
      selectTaskPriority(priority.value)
      return true
    }
  }
  return false
}
