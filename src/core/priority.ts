import { renderModifyCard } from '../render/modify_render'
import { currentTask } from '../state/current_task'
import type { priority, Task } from '../types/task'

export function SelectPrBtn(priority: Task['priority']) {
  currentTask.priority = priority
  currentTask.state.isTagmenuOpened = false
  renderModifyCard()
}

export function PrSelector(target: HTMLElement): boolean {
  const priorities: { id: string; value: Task['priority'] }[] = [
    { id: '#lowPriorityBtn', value: 'LOW' },
    { id: '#mediumPriorityBtn', value: 'MEDIUM' },
    { id: '#highPriorityBtn', value: 'HIGH' },
  ]
  for (const priority of priorities) {
    if (target.closest(priority.id)) {
      SelectPrBtn(priority.value)
      return true
    }
  }
  return false
}
