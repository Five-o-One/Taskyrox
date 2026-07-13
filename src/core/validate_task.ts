import { currentTask } from '../state/task_state'

/**
 * Returns validation messages for any required task fields that are missing.
 * @returns The list of validation messages, empty when the task is valid.
 */
export function getTaskValidationMessages(): string[] {
  const messages: string[] = []

  if (currentTask.title.trim() === '') {
    messages.push('عنوان تسک را وارد کنید')
  }

  if (currentTask.priority === '') {
    messages.push('یک اولویت انتخاب کنید')
  }

  return messages
}
