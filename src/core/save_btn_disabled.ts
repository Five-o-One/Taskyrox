import { currentTask } from '../state/task_state'

/**
 * Checks whether the current task contains all required values.
 * @returns Whether the current task can be saved.
 */
export function isCurrentTaskValid() {
  return currentTask.title.trim() !== '' && currentTask.priority !== ''
}
