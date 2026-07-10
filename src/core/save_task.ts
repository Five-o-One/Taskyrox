import { renderTaskList } from '../render/list_render'
import { currentTask, tasksState } from '../state/task_state'
import type { Task } from '../types/task'
import { resetCurrentTask } from './reset_current_task'
import { isCurrentTaskValid } from './save_btn_disabled'
import { saveTask } from './task_storage'

export function SaveDataBtn() {
  if (!isCurrentTaskValid()) {
    return false
  }

  const taskToSave: Task = {
    ...currentTask,
    state: { ...currentTask.state },
  }

  tasksState.push(taskToSave)
  saveTask(taskToSave)

  renderTaskList()
  resetCurrentTask()

  return true
}
