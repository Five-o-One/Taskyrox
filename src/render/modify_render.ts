import { ModifyTaskCard } from '../components/Card/modify_card'
import { currentTask } from '../state/task_state'

let previousTagMenuOpened = false

export function modifyTaskCard_render() {
  const card = document.querySelector('[data-key="creating-task"]')

  if (card) {
    const startRotated = previousTagMenuOpened
    card.outerHTML = ModifyTaskCard(currentTask, startRotated)

    requestAnimationFrame(() => {
      const newCard = document.querySelector('[data-key="creating-task"]')
      const tagIcon = newCard?.querySelector(
        '[data-key="tag-icon"]',
      ) as HTMLElement | null

      if (tagIcon) {
        tagIcon.classList.toggle('rotate-90', currentTask.state.isTagmenuOpened)
      }
    })

    previousTagMenuOpened = currentTask.state.isTagmenuOpened
  }
}
