import { taskList_render } from '../render/list_render'
import { tasksState } from '../state/task_state'
import { saveTasks } from './task_storage'

/**
 * Toggles a task's completion state and persists the change.
 * @param id The identifier of the task to update.
 */
export function toggleTask(id: number) {
  const task = tasksState.find((task) => task.id === id)

  if (!task) return

  task.isDone = !task.isDone

  saveTasks(tasksState)

  taskList_render()
}
