import { taskList_render } from '../render/list_render'
import { tasksState } from '../state/task_state'
import { saveTasks } from './task_storage'

export function toggleTask(id: number) {
  const task = tasksState.find((task) => task.id === id)

  if (!task) return

  task.isDone = !task.isDone

  saveTasks(tasksState)

  taskList_render()
}
