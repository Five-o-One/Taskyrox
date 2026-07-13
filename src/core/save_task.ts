import { taskList_render } from '../render/list_render'
import { currentTask, tasksState } from '../state/task_state'
import type { Task } from '../types/task'
import { resetCurrentTask } from './reset_current_task'
import { isCurrentTaskValid } from './save_btn_disabled'
import { saveTasks } from './task_storage'

export function saveCurrentTask() {
  if (!isCurrentTaskValid()) {
    return false
  }

  const taskToSave: Task = {
    ...currentTask,
    state: { ...currentTask.state },
  }
  const existingIndex = tasksState.findIndex(
    (task) => task.id === taskToSave.id,
  )
  if (existingIndex !== -1) {
    tasksState[existingIndex] = taskToSave
  } else {
    tasksState.push(taskToSave)
  }
  saveTasks(tasksState)

  taskList_render()
  resetCurrentTask()

  return true
}
