import type { Task } from '../types/task'

const STORAGE_KEY = 'tasks'

/**
 * Appends one task to the collection stored in local storage.
 * @param task The task to persist.
 */
export function saveTask(task: Task) {
  const tasks = getTasks()

  tasks.push({
    ...task,
    state: { ...task.state },
  })

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

/**
 * Reads and validates the task collection from local storage.
 * @returns The stored tasks, or an empty array when unavailable or invalid.
 */
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

/**
 * Replaces the task collection stored in local storage.
 * @param tasks The complete task collection to persist.
 */
export function saveTasks(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, '')
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}
