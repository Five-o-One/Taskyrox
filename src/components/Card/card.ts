import type { Task } from '../../types/task'
import type { TaskCardState } from '../../types/card_state'
import { DoneTaskCard } from './done_card'
import { ModifyTaskCard } from './modify_card'
import { UndoneTaskCard } from './undone_card'

/**
 * This component selects the correct task card component based on the current card state.
 * @param state States the current card state (Done, NotDone, or Edit).
 * @param task The task information.
 * @returns HTML string for the selected task card component.
 */
export function TaskCard(state: TaskCardState, task: Task) {
  switch (state) {
    case 'Done':
      return /* HTML */ ` ${DoneTaskCard(task)} `
    case 'NotDone':
      return `
      ${UndoneTaskCard(task)}
      `
    default:
      return `
      ${ModifyTaskCard(task)}
      `
  }
}
