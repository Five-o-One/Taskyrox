import { renderModifyCard } from '../render/modify_render'
import type { Task } from '../types/task'

const currentTask: Task = {
  id: Date.now(),
  title: '',
  description: '',
  isDone: false,
  priority: '',
  createAt: new Date().toISOString(),
  editAt: new Date().toISOString(),

  state: { isTagmenuOpened: false } as any,
}

export function SelectPrBtn(priority: Task['priority']) {
  currentTask.priority = priority
  currentTask.state.isTagmenuOpened = false
  renderModifyCard()
}

export function PrSelector(target: HTMLElement): boolean {
  const priorities = [
    { id: '#lowPriorityBtn', value: 'LOW' },
    { id: '#mediumPriorityBtn', value: 'MEDIUM' },
    { id: '#highPriorityBtn', value: 'HIGH' },
  ] as const
  for (const priority of priorities) {
    if (target.closest(priority.id)) {
      SelectPrBtn(priority.value)
      return true
    }
  }
  return false
}
