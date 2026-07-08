import type { Task } from '../types/task'

export const currentTask: Task = {
  id: Date.now(),
  title: '',
  description: '',
  isDone: false,
  priority: '',
  createAt: new Date().toISOString(),
  editAt: new Date().toISOString(),

  state: { isTagMenuOpened: false },
}
