import { renderTaskList } from '../render/list_render'
import { currentTask } from '../state/current_task'
import { saveTask } from './task_storage'

export function SaveDataBtn(target: HTMLElement): boolean {
  const btn = target.closest('#saveTaskBtn')

  if (!btn) return false

  saveTask({
    ...currentTask,
  })

  renderTaskList();

  return true
}
