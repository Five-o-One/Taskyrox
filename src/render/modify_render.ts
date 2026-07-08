import { Modifycard } from '../components/Card/modify_card'
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

export function renderModifyCard() {
  const card = document.querySelector('#Creating-Task')

  if (card) {
    card.outerHTML = Modifycard(currentTask)
  }
}
