import { modifyTaskCard_render } from '../render/modify_render'
import { currentTask } from '../state/task_state'

/**
 * Toggles the current task's priority selector and refreshes the editor.
 */
export function togglePriorityMenu(): void {
  currentTask.state.isTagmenuOpened = !currentTask.state.isTagmenuOpened
  modifyTaskCard_render()
}
