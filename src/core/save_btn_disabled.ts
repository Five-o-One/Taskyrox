import { currentTask } from '../state/current_task'

export function isCurrentTaskValid() {
  return (
    currentTask.title.trim() !== '' &&
    currentTask.description.trim() !== '' &&
    currentTask.priority !== ''
  )
}
