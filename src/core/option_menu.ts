import { renderTaskList } from '../render/list_render'
import { tasksState } from '../state/task_state'

export function toggleOptionMenu(id: number) {
  tasksState.forEach((task) => {
    if (task.id === id) {
      task.state.isOptionOpened = !task.state.isOptionOpened
    } else {
      task.state.isOptionOpened = false
    }
  })

  renderTaskList()
}