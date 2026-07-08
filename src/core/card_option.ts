import { cardOptionRender } from '../render/card_option_render'
import { TasksState } from '../state/task_state'
import type { Task } from '../types/task'

export function cardOption(id: number) {
  const currentTask = TasksState.find((task: Task) => task.id === id)
  if (currentTask) {
    currentTask.state.isOptionOpened = !currentTask.state.isOptionOpened
  }
  cardOptionRender()
}
