import { AddTask } from '../core/add_task'
import { CloseBtn } from '../core/close_caard'
import { toggleOptionMenu } from '../core/option_menu'
import { PrSelector } from '../core/priority'
import { removeCard } from '../core/remove_card'
import { SaveDataBtn } from '../core/save_task'
import { TagMenu } from '../core/tag_menu'
import { toggleTask } from '../core/toggle_task'
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
        e.preventDefault()
        //todo
        const target = e.currentTarget as HTMLElement
        const id = Number(target.dataset.key!.replace('remove-', ''))
        removeCard(id)
      })
    })
}
export function CardOptionEvent() {
  document
    .querySelectorAll<HTMLElement>('[data-key^="option-"]')
    .forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const target = e.currentTarget as HTMLElement

        const id = Number(target.dataset.key!.replace('option-', ''))

        toggleOptionMenu(id)
      })
    })
}

export function CardCheckEvent() {
  document
    .querySelectorAll<HTMLElement>('[data-key^="check-"]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        const target = e.currentTarget as HTMLElement;

        const id = Number(target.dataset.key!.replace("check-", ""));

        toggleTask(id);
      });
    });
}