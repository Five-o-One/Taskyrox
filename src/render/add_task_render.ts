import { AddTaskCard } from '../components/Card/add_task'

/**
 * Replaces the active task editor with the add-task card.
 * @param target The element used to locate the active editor.
 */
export function addTaskCard_render(target: HTMLElement) {
  const modifyTaskCard = target.closest('[data-key="creating-task"]')
  if (modifyTaskCard) {
    modifyTaskCard.outerHTML = AddTaskCard()
  }
}
