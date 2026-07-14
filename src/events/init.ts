/*
  Taskyrox: a small client-side task manager application.
  It persists tasks, theme, and basic profile info in localStorage
  and hydrates application state on startup.
*/
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
  // Print ASCII art and team name to console on init
  console.log(
    `
    
▀█▀ ▄▀█ █▀ █▄▀ █▄█ █▀█ █▀█ ▀▄▀
░█░ █▀█ ▄█ █░█ ░█░ █▀▄ █▄█ █░█

    TASKYROX ... 5.0.1 TEAM
    `,
  )
  tasksState.push(...loadTask())
  appState.theme = (localStorage.getItem('theme') as theme) || 'light'
  appState.navbarProfile.avatarUrl = localStorage.getItem('user-img') || ''
  appState.navbarProfile.username = localStorage.getItem('user-name') || ''
}
