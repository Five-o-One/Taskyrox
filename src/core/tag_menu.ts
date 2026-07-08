import { renderModifyCard } from '../render/modify_render'
import { currentTask } from '../state/current_task'



export function TagMenu(): void {
  currentTask.state.isTagmenuOpened = !currentTask.state.isTagmenuOpened
  renderModifyCard()
}
