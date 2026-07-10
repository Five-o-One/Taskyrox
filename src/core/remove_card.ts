import { renderTaskList } from '../render/list_render'
import { tasksState } from '../state/task_state'
import { saveTasks } from './task_storage'

export function removeCard(id: number) {
  const newTasks = tasksState.filter((task) => task.id !== id)
  tasksState.length = 0
  tasksState.push(...newTasks)
  saveTasks(newTasks)
  renderTaskList()
}
