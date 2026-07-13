import { Modifycard } from '../components/Card/modify_card'
import { currentTask } from '../state/task_state'

export function AddTask(target: HTMLElement): boolean {
  const btn = target.closest('[data-key="new-task-card"]')
  if (!btn) return false
  btn.outerHTML = Modifycard(currentTask)
  return true
}
// hhhfishfkh
