import { ModifyTaskCard } from '../components/Card/modify_card'
import { currentTask } from '../state/task_state'

export function openNewTaskEditor(target: HTMLElement): boolean {
  const newTaskCard = target.closest('[data-key="new-task-card"]')
  if (!newTaskCard) return false
  newTaskCard.outerHTML = ModifyTaskCard(currentTask)
  return true
}
