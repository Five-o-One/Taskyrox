import { Modifycard } from '../components/Card/modify_card'
import { currentTask } from '../state/current_task'


export function renderModifyCard() {
  const card = document.querySelector('#Creating-Task')

  if (card) {
    card.outerHTML = Modifycard(currentTask)
  }
}
