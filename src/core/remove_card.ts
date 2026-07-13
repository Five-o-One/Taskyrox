import { taskList_render } from '../render/list_render'
import { tasksState } from '../state/task_state'
import { saveTasks } from './task_storage'

export function removeTask(id: number) {
  const newTasks = tasksState.filter((task) => task.id !== id)
  tasksState.length = 0
  tasksState.push(...newTasks)
  saveTasks(newTasks)
  taskList_render()
}
