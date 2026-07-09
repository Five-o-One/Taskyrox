import { renderAddTaskCard } from '../render/add_task_render'
import { currentTask } from '../state/task_state'
import { resetCurrentTask } from './reset_current_task'

export function CloseBtn(target: HTMLElement): void {
  currentTask.state.isOptionOpened = false
  resetCurrentTask()
  renderAddTaskCard(target)
}
