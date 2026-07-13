import { taskCard_render } from '../render/list_render'
import { tasksState } from '../state/task_state'

/**
 * Toggles one task action menu while closing all other task menus.
 * @param id The identifier of the task whose menu should be toggled.
 */
export function toggleOptionMenu(id: number) {
  tasksState.forEach((task) => {
    if (task.id === id) {
      task.state.isOptionOpened = !task.state.isOptionOpened
    } else {
      task.state.isOptionOpened = false
    }
  })

  taskCard_render(id)
}
