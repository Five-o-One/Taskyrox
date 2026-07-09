import { renderTaskList } from '../render/list_render'
import { tasksState } from '../state/task_state'
import type { Task } from '../types/task'
import { resetCurrentTask } from './reset_current_task'
import { saveTask } from './task_storage'

export function SaveDataBtn(currentTask: Task) {
  tasksState.push(currentTask)
  saveTask({
    ...currentTask,
  })

  renderTaskList()
  resetCurrentTask()
}
