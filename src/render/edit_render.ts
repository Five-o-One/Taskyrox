import { ModifyTaskCard } from '../components/Card/modify_card'
import { currentTask } from '../state/task_state'

/**
 * Replaces a task card with an editor populated from the current task state.
 * @param id The identifier of the task card to replace.
 */
export function editTaskCard_render(id: number) {
  const cardWrapper = document.querySelector<HTMLElement>(
    `[data-key="task-card-${id}"]`,
  )
  if (!cardWrapper) return

  cardWrapper.outerHTML = ModifyTaskCard(currentTask)
}
