import { changeUserState, saveUsername } from '../core/user_state'

export function changeUserNameState() {
  const output = document.querySelector<HTMLElement>('[data-key="name-output"]')
  output?.addEventListener('click', changeUserState)
}

export function changeUserNameStateSave() {
  const save = document.querySelector<HTMLElement>(
    '[data-key="name-save-button"]',
  )
  const input = document.querySelector<HTMLInputElement>(
    '[data-key="name-input"]',
  )
  save?.addEventListener('click', () => {
    const username = input?.value ?? ''
    saveUsername(username)
    changeUserState()
  })
}
