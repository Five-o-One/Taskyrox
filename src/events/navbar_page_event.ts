import { appState } from '../state/app_state'

export function navbarPageEvent() {
  document.querySelectorAll('[id]').forEach((item) => {
    item.addEventListener('click', () => {
      const pageId = Number(item.id)

      if (Number.isNaN(pageId)) return

      appState.openPageId = pageId

      console.log(appState.openPageId)
    })
  })
}