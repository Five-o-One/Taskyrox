import { appState } from '../state/app_state'
import { tasksState } from '../state/task_state'
import type { theme } from '../types/app_state'

export function appInitialization_event() {
  tasksState.push(...JSON.parse(localStorage.getItem('tasks') || '[]'))
  appState.theme = (localStorage.getItem('theme') as theme) || 'light'
  appState.navbarProfile.avatarUrl = localStorage.getItem('user-img') || ''
  appState.navbarProfile.username = localStorage.getItem('user-name') || ''
}
