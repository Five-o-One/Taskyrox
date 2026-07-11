import { renderModifyCard } from '../render/modify_render'
import { currentTask } from '../state/task_state'

export function TagMenu(): void {
  currentTask.state.isTagmenuOpened = !currentTask.state.isTagmenuOpened
  renderModifyCard()
}
