import { currentTask } from '../state/task_state'

export function resetCurrentTask() {
  currentTask.id = Date.now()
  currentTask.title = ''
  currentTask.description = ''
  currentTask.priority = ''
  currentTask.isDone = false
  currentTask.createAt = new Date().toISOString()
  currentTask.editAt = new Date().toISOString()

  currentTask.state.isTagmenuOpened = false
}
