import { renderModifyCard } from '../render/modify_render'
import { currentTask } from '../state/task_state'
import type { Task } from '../types/task'

export function SelectPrBtn(priority: Task['priority']) {
  currentTask.priority = priority
  currentTask.state.isTagmenuOpened = false
  renderModifyCard()
}

export function PrSelector(target: HTMLElement): boolean {
  const priorities: { selector: string; value: Task['priority'] }[] = [
    { selector: '[data-key="priority-low-button"]', value: 'LOW' },
    { selector: '[data-key="priority-medium-button"]', value: 'MEDIUM' },
    { selector: '[data-key="priority-high-button"]', value: 'HIGH' },
  ]
  for (const priority of priorities) {
    if (target.closest(priority.selector)) {
      SelectPrBtn(priority.value)
      return true
    }
  }
  return false
}
