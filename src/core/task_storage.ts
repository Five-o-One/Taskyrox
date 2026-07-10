import type { Task } from '../types/task'

const STORAGE_KEY = 'tasks'

export function saveTask(task: Task) {
  const tasks = getTasks()

  tasks.push({
    ...task,
    state: { ...task.state },
  })

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export function getTasks(): Task[] {
  const tasks = localStorage.getItem(STORAGE_KEY)

  if (!tasks) {
    return []
  }

  try {
    const parsedTasks = JSON.parse(tasks) as Task[]
    return Array.isArray(parsedTasks) ? parsedTasks : []
  } catch {
    return []
  }
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, '')
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}
