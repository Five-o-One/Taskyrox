import { AddNewTask } from '../components/Card/add_task'

export function renderAddTaskCard(target: HTMLElement) {
  const ModifyCard = target.closest('[data-key="creating-task"]')
  if (ModifyCard) {
    ModifyCard.outerHTML = AddNewTask()
  }
}
