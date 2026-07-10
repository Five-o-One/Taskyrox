import { Modifycard } from '../components/Card/modify_card'
import { currentTask } from '../state/task_state'

export function renderModifyCard() {
  const card = document.querySelector('#Creating-Task')

  if (card) {
    card.outerHTML = Modifycard(currentTask)
  }
}
