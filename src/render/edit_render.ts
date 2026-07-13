import { Modifycard } from '../components/Card/modify_card'
import { currentTask } from '../state/task_state'

export function renderEditCard(id: number) {
  const cardWrapper = document.querySelector<HTMLElement>(
    `[data-key="task-card-${id}"]`,
  )
  if (!cardWrapper) return

  cardWrapper.outerHTML = Modifycard(currentTask)
}
