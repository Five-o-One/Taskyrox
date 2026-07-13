import { AddTaskCard } from '../components/Card/add_task'

export function addTaskCard_render(target: HTMLElement) {
  const modifyTaskCard = target.closest('[data-key="creating-task"]')
  if (modifyTaskCard) {
    modifyTaskCard.outerHTML = AddTaskCard()
  }
}
