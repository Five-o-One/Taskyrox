import { saveUsername, toggleUsernameEditor } from '../core/user_state'

/**
 * Binds the displayed username to open the username editor.
 */
export function usernameEdit_event() {
  const output = document.querySelector<HTMLElement>('[data-key="name-output"]')
  output?.addEventListener('click', toggleUsernameEditor)
}

/**
 * Binds the username save button to persist the entered name.
 */
export function usernameSave_event() {
  const saveButton = document.querySelector<HTMLElement>(
    '[data-key="name-save-button"]',
  )
  const input = document.querySelector<HTMLInputElement>(
    '[data-key="name-input"]',
  )
  saveButton?.addEventListener('click', () => {
    const username = input?.value ?? ''
    saveUsername(username)
    toggleUsernameEditor()
  })
}
