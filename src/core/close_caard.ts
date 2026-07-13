import { addTaskCard_render } from '../render/add_task_render'
import { currentTask, tasksState } from '../state/task_state'
import { resetCurrentTask } from './reset_current_task'
import { taskList_render } from '../render/list_render'

export function closeTaskEditor(target: HTMLElement): void {
  const isEditingExistingTask = tasksState.some(
    (task) => task.id === currentTask.id,
  )

  currentTask.state.isOptionOpened = false
  resetCurrentTask()

  if (isEditingExistingTask) {
    taskList_render()
    return
  }

  addTaskCard_render(target)
}
