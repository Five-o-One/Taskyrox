import { openNewTaskEditor } from '../core/add_task'
import { closeTaskEditor } from '../core/close_caard'
import { toggleOptionMenu } from '../core/option_menu'
import { selectPriorityFromTarget } from '../core/priority'
import { removeTask } from '../core/remove_card'
import { saveCurrentTask } from '../core/save_task'
import { togglePriorityMenu } from '../core/tag_menu'
import { toggleTask } from '../core/toggle_task'
import { currentTask } from '../state/task_state'
import { editTask } from '../core/edit_task'
let isCardEventsBound = false

function taskInput_event(event: Event) {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement

  if (target.dataset.key === 'task-title') {
    currentTask.title = target.value
  }

  if (target.dataset.key === 'task-description') {
    currentTask.description = target.value
  }
}

function taskCardClick_event(event: MouseEvent) {
  const target = event.target as HTMLElement

  if (openNewTaskEditor(target)) {
    return
  }

  if (target.closest('[data-key="tag-menu-button"]')) {
    togglePriorityMenu()
    return
  }

  if (target.closest('[data-key="close-modify-card-button"]')) {
    closeTaskEditor(target)
    return
  }

  if (selectPriorityFromTarget(target)) {
    return
  }

  if (target.closest('[data-key="save-task-button"]')) {
    saveCurrentTask()
  }
}

export function taskCardInteractions_event() {
  if (isCardEventsBound) {
    return
  }

  isCardEventsBound = true
  document.addEventListener('input', taskInput_event)
  document.addEventListener('click', taskCardClick_event)
}

export function taskDelete_event() {
  document
    .querySelectorAll<HTMLElement>('[data-key^="remove-"]')
    .forEach((btn) => {
      btn.addEventListener('click', (event: Event) => {
        event.preventDefault()
        //todo
        const target = event.currentTarget as HTMLElement
        const id = Number(target.dataset.key!.replace('remove-', ''))
        removeTask(id)
      })
    })
}
export function taskOptions_event() {
  document
    .querySelectorAll<HTMLElement>('[data-key^="option-"]')
    .forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault()
        const target = event.currentTarget as HTMLElement

        const id = Number(target.dataset.key!.replace('option-', ''))

        toggleOptionMenu(id)
      })
    })
}

export function taskCheck_event() {
  document
    .querySelectorAll<HTMLElement>('[data-key^="check-"]')
    .forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        const target = event.currentTarget as HTMLElement

        const id = Number(target.dataset.key!.replace('check-', ''))

        toggleTask(id)
      })
    })
}

export function taskEdit_event() {
  document
    .querySelectorAll<HTMLElement>('[data-key^="edit-"]')
    .forEach((btn) => {
      btn.addEventListener('click', (event: Event) => {
        event.preventDefault()
        const target = event.currentTarget as HTMLElement
        const id = Number(target.dataset.key!.replace('edit-', ''))
        editTask(id)
      })
    })
}
