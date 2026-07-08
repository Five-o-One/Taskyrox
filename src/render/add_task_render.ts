import { AddNewTask } from '../components/Card/add_task'

export function renderAddTaskCard(target: HTMLElement) {
  const Modifycard = target.closest('#Creating-Task')
  if (Modifycard) {
    Modifycard.outerHTML = AddNewTask()
  }
}
