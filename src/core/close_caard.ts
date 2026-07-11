import { renderAddTaskCard } from '../render/add_task_render'
import { currentTask, tasksState } from '../state/task_state'
import { resetCurrentTask } from './reset_current_task'
import { renderTaskList } from '../render/list_render'

export function CloseBtn(target: HTMLElement): void {
  const isEditingExistingTask = tasksState.some(
    (task) => task.id === currentTask.id,
  )

  currentTask.state.isOptionOpened = false
  resetCurrentTask()

  if (isEditingExistingTask) {
    renderTaskList()
    return
  }

  renderAddTaskCard(target)
}
