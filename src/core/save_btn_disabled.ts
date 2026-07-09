import { currentTask } from '../state/task_state'

export function isCurrentTaskValid() {
  return (
    currentTask.title.trim() !== '' &&
    currentTask.description.trim() !== '' &&
    currentTask.priority !== ''
  )
}
