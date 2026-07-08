import { renderModifyCard } from '../render/modify_render'
import type { Task } from '../types/task'

const currentTask: Task = {
  id: Date.now(),
  title: '',
  description: '',
  isDone: false,
  priority: '',
  createAt: new Date().toISOString(),
  editAt: new Date().toISOString(),

  state: { isTagmenuOpened: false } as any,
}

export function TagMenu(): void {
  currentTask.state.isTagmenuOpened = !currentTask.state.isTagmenuOpened
  renderModifyCard()
}
