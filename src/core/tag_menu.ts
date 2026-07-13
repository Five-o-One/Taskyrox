import { modifyTaskCard_render } from '../render/modify_render'
import { currentTask } from '../state/task_state'

export function togglePriorityMenu(): void {
  currentTask.state.isTagmenuOpened = !currentTask.state.isTagmenuOpened
  modifyTaskCard_render()
}
