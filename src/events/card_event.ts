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
import { isCurrentTaskValid } from '../core/save_btn_disabled'
import { getTaskValidationMessages } from '../core/validate_task'
import {
  showValidationTooltip_render,
  hideValidationTooltip_render,
} from '../render/error_tooltip_render'

let isCardEventsBound = false

/**
 * Synchronizes task title and description inputs with the current task state,
 * and keeps the save button's disabled state in sync as the user types.
 * @param event The delegated document input event.
 */
function taskInput_event(event: Event) {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  const saveBtn = document.querySelector<HTMLButtonElement>(
    '[data-key="save-task-button"]',
  )

  if (target.dataset.key === 'task-title') {
    currentTask.title = target.value
  }

  if (target.dataset.key === 'task-description') {
    currentTask.description = target.value
  }

  if (saveBtn) {
    const isValid = isCurrentTaskValid()

    if (isValid) {
      saveBtn.disabled = false
    } else {
      saveBtn.disabled = true
    }
  }
}

/**
 * Routes delegated task-card clicks to the matching task action.
 * Blocks saving and shows the validation tooltip when required fields are missing.
 * @param event The delegated document click event.
 */
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

  const saveBtn = target.closest(
    '[data-key="save-task-button"]',
  ) as HTMLElement | null

  if (saveBtn) {
    const messages = getTaskValidationMessages()

    if (messages.length > 0) {
      showValidationTooltip_render(saveBtn, messages)
      return
    }

    saveCurrentTask()
  }
}

/**
 * Shows the validation tooltip above the save button while the pointer hovers over it.
 * @param event The delegated document mouseover event.
 */
function taskSaveMouseOver_event(event: MouseEvent) {
  const target = event.target as HTMLElement
  const saveBtn = target.closest(
    '[data-key="save-task-button"]',
  ) as HTMLElement | null
  if (!saveBtn) return

  showValidationTooltip_render(saveBtn, getTaskValidationMessages())
}

/**
 * Hides the validation tooltip when the pointer leaves the save button.
 * @param event The delegated document mouseout event.
 */
function taskSaveMouseOut_event(event: MouseEvent) {
  const target = event.target as HTMLElement
  if (!target.closest('[data-key="save-task-button"]')) return

  hideValidationTooltip_render()
}

/**
 * Shows the validation tooltip when the save button is touched on mobile devices.
 * @param event The delegated document touchstart event.
 */
export function taskSaveTouchStart_event(event: TouchEvent) {
  const target = event.target as HTMLElement
  const saveBtn = target.closest(
    '[data-key="save-task-button"]',
  ) as HTMLElement | null
  if (!saveBtn) return

  showValidationTooltip_render(saveBtn, getTaskValidationMessages())
}

/**
 * Hides the validation tooltip when the page or any container scrolls,
 * since the tooltip's position becomes stale relative to the save button.
 */
export function taskSaveScroll_event() {
  hideValidationTooltip_render()
}

/**
 * Registers delegated task editor interactions once for the document.
 */
export function taskCardInteractions_event() {
  if (isCardEventsBound) {
    return
  }

  isCardEventsBound = true
  document.addEventListener('input', taskInput_event)
  document.addEventListener('click', taskCardClick_event)
  document.addEventListener('mouseover', taskSaveMouseOver_event)
  document.addEventListener('mouseout', taskSaveMouseOut_event)
  document.addEventListener('scroll', taskSaveScroll_event, true)
  document.addEventListener('touchstart', taskSaveTouchStart_event)
}

/**
 * Binds delete actions to all currently rendered task cards.
 */
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

/**
 * Binds option-menu toggles to all currently rendered task cards.
 */
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

/**
 * Binds completion toggles to all currently rendered task checkboxes.
 */
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

/**
 * Binds edit actions to all currently rendered task cards.
 */
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
