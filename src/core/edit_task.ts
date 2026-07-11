import { renderEditCard } from '../render/edit_render'
import { tasksState, currentTask } from '../state/task_state'

export function EditTask(id: number): void {
  const task = tasksState.find((t) => t.id === id)
  if (!task) return

  currentTask.id = task.id
  currentTask.title = task.title
  currentTask.description = task.description
  currentTask.priority = task.priority
  currentTask.isDone = task.isDone
  currentTask.createAt = task.createAt
  currentTask.editAt = new Date().toISOString()
  currentTask.state.isTagmenuOpened = false
  currentTask.state.isOptionOpened = false

  task.state.isOptionOpened = false

  renderEditCard(id)
}
