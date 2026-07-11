import { AddNewTask } from '../components/Card/add_task'

export function renderAddTaskCard(target: HTMLElement) {
  const ModifyCard = target.closest('#Creating-Task')
  if (ModifyCard) {
    ModifyCard.outerHTML = AddNewTask()
  }
}
