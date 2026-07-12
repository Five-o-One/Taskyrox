import { Modifycard } from '../components/Card/modify_card'
import { currentTask } from '../state/task_state'

let previousTagMenuOpened = false

export function renderModifyCard() {
  const card = document.querySelector('#Creating-Task')

  if (card) {
    const startRotated = previousTagMenuOpened
    card.outerHTML = Modifycard(currentTask, startRotated)

    requestAnimationFrame(() => {
      const newCard = document.querySelector('#Creating-Task')
      const tagIcon = newCard?.querySelector('#tagIcon') as HTMLElement | null

      if (tagIcon) {
        tagIcon.classList.toggle('rotate-90', false)
      }
    })

    previousTagMenuOpened = currentTask.state.isTagmenuOpened
  }
}
