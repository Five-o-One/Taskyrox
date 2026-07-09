import { AddTask } from '../core/add_task'
import { CloseBtn } from '../core/close_caard'
import { PrSelector } from '../core/priority'
import { SaveDataBtn } from '../core/save_task'
import { TagMenu } from '../core/tag_menu'
import { currentTask } from '../state/task_state'

export function clickedOnAddEvent() {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (AddTask(target)) {
      return
    }
    if (target.closest('#TagMenuBtn')) {
      TagMenu()
      return
    }
    if (target.closest('#closeModifyCardBtn')) {
      CloseBtn(target)
      return
    }
    if (PrSelector(target)) {
      return
    }
    document.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement

      if (target.id === 'taskTitle') {
        currentTask.title = target.value
      }

      if (target.id === 'taskDescription') {
        currentTask.description = target.value
      }
    })
    if (target.closest("#saveTaskBtn")) {
      SaveDataBtn(currentTask)
      return
    }
  })
}
