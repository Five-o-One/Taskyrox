import { AddTask } from '../core/add_task'
import { CloseBtn } from '../core/close_caard'
import { PrSelector } from '../core/priority'
import { removeCard } from '../core/remove_card'
import { SaveDataBtn } from '../core/save_task'
import { TagMenu } from '../core/tag_menu'
import { currentTask } from '../state/task_state'

let isCardEventsBound = false

function handleTaskInput(event: Event) {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement

  if (target.id === 'taskTitle') {
    currentTask.title = target.value
  }

  if (target.id === 'taskDescription') {
    currentTask.description = target.value
  }
}

function handleCardClick(event: MouseEvent) {
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

  if (target.closest('#saveTaskBtn')) {
    SaveDataBtn()
  }
}

export function clickedOnAddEvent() {
  if (isCardEventsBound) {
    return
  }

  isCardEventsBound = true
  document.addEventListener('input', handleTaskInput)
  document.addEventListener('click', handleCardClick)
}

export function CardDeleteEvent() {
  document
    .querySelectorAll<HTMLElement>('[data-key^="remove-"]')
    .forEach((btn) => {
      btn.addEventListener('click', (e: Event) => {
        //todo
        // const target = e.currentTarget
        // removeCard(e)
        console.log(e.currentTarget)
      })
    })
}
