import { ModifyTaskCard } from '../components/Card/modify_card'
import { currentTask } from '../state/task_state'

/**
 * Replaces the clicked new-task card with the task editor.
 * @param target The element that received the click.
 * @returns Whether a new-task card was found and opened.
 */
export function openNewTaskEditor(target: HTMLElement): boolean {
  const newTaskCard = target.closest('[data-key="new-task-card"]')
  if (!newTaskCard) return false
  newTaskCard.outerHTML = ModifyTaskCard(currentTask)
  return true
}
