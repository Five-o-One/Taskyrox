import { saveUsername, toggleUsernameEditor } from '../core/user_state'

/**
 * Binds the displayed username to open the username editor.
 */
export function usernameEdit_event() {
  const outputs = document.querySelectorAll<HTMLElement>(
    '[data-key="name-output"]',
  )
  outputs.forEach((output) => {
    console.log('output :>> ', output)
    output.addEventListener('click', toggleUsernameEditor)
  })
}

/**
 * Binds the username save button to persist the entered name.
 */
export function usernameSave_event() {
  const saveButtons = document.querySelectorAll<HTMLElement>(
    '[data-key="name-save-button"]',
  )
  const inputs = document.querySelectorAll<HTMLInputElement>(
    '[data-key="name-input"]',
  )
  saveButtons.forEach((saveButton, index) => {
    saveButton?.addEventListener('click', () => {
      const username = inputs[index]?.value ?? ''
      saveUsername(username)
      toggleUsernameEditor()
    })
  })
}
