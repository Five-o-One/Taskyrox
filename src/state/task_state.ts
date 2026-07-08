import { getTask } from '../core/task_storage'
import type { Task } from '../types/task'

export const TasksState: Task[] = getTask()
