import { appState } from '../state/app_state'
import { tasksState } from '../state/task_state'
import type { theme } from '../types/app_state'
import type { Task } from '../types/task'

const loadTask: () => Task[] = () => {
  try {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    return tasks
  } catch (error) {
    console.error(`Failed to parse tasks from localStorage: ${error}`)
    return []
  }
}

/**
 * Hydrates application state from values stored in local storage.
 */
export function appInitialization_event() {
  tasksState.push(...loadTask())
  appState.theme = (localStorage.getItem('theme') as theme) || 'light'
  appState.navbarProfile.avatarUrl = localStorage.getItem('user-img') || ''
  appState.navbarProfile.username = localStorage.getItem('user-name') || ''
}
