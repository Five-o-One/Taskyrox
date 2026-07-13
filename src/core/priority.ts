import { modifyTaskCard_render } from '../render/modify_render'
import { currentTask } from '../state/task_state'
import type { Task } from '../types/task'

/**
 * Assigns a priority to the current task and closes the priority menu.
 * @param priority The priority value to assign.
 */
export function selectTaskPriority(priority: Task['priority']) {
  currentTask.priority = priority
  currentTask.state.isTagmenuOpened = false
  modifyTaskCard_render()
}

/**
 * Resolves a priority option from a clicked element and applies it.
 * @param target The clicked element or one of its descendants.
 * @returns Whether the target matched a priority option.
 */
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
