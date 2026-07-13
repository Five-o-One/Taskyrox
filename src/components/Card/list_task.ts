import { FaDic } from '../../dic/fa'
import type { Task } from '../../types/task'
import { AddTaskCard } from './add_task'
import { TaskCard } from './card'
import ImgEmpty from '../../assets/images/empty.svg'

/**
 * Creates the empty state shown when there are no incomplete tasks.
 * @returns Empty task-list HTML.
 */
const EmptyTaskList = () => /* HTML */ `
  <div
    class="relative flex h-full w-full flex-col items-center justify-center select-none"
  >
    <button
      data-key="new-task-card"
      type="button"
      class="border-border bg-bg hover:border-primary flex w-full max-w-sm flex-col items-center justify-center gap-4 rounded-3xl border border-dashed p-6 transition"
    >
      <img
        src="${ImgEmpty}"
        alt="Create a new task"
        class="h-40 w-40 object-contain"
      />
      <div class="flex flex-col items-center gap-2 text-center">
        <span class="text-text-secondary text-base font-semibold"
          >${FaDic.emptyStateTitle}</span
        >
        <span class="text-text-secondary text-sm"
          >${FaDic.emptyStateDescription}</span
        >
      </div>
    </button>
  </div>
`

/**
 * Creates the incomplete-task section.
 * @param tasks The incomplete tasks to display.
 * @returns Incomplete task-list HTML.
 */
const UndoneTaskList = (tasks: Task[]) => /* HTML */ `
  <div class="flex h-full max-h-full w-full flex-col">
    <div class="mb-4 flex flex-col space-y-4">
      <span class="text-text text-lg font-bold">${FaDic.titleListNotDone}</span>
      <span class="text-text-secondary text-sm"
        >${FaDic.getUndoneTaskSummary(tasks.length)}</span
      >
      ${AddTaskCard()}
    </div>

    <div class="space-y-2 overflow-auto">
      ${tasks.map((task) => TaskCard('NotDone', task)).join('')}
    </div>
  </div>
`

/**
 * Creates the completed-task section.
 * @param tasksDone The completed tasks to display.
 * @returns Completed task-list HTML.
 */
const DoneTaskList = (tasksDone: Task[]) => /* HTML */ `
  <div class="flex h-full max-h-full w-full flex-col">
    <div class="mb-4 flex flex-col space-y-4">
      <span class="text-text text-lg font-bold">${FaDic.titleListDone}</span>
      <span class="text-text-secondary text-sm"
        >${FaDic.getDoneTaskSummary(tasksDone.length)}</span
      >
    </div>

    <div class="space-y-2 overflow-auto">
      ${tasksDone.map((task) => TaskCard('Done', task)).join('')}
    </div>
  </div>
`

/**
 * Creates the requested completed or incomplete task-list view.
 * @param isDone Whether the completed-task view should be returned.
 * @param list All tasks from application state.
 * @returns Task-list HTML for the requested view.
 */
export function TaskList(isDone: boolean, list: Task[]) {
  const undoneTasks: Task[] = list.filter((task) => !task.isDone)
  const doneTasks: Task[] = list.filter((task) => task.isDone)

  if (isDone) {
    return doneTasks.length !== 0 ? DoneTaskList(doneTasks) : ''
  }

  return undoneTasks.length === 0
    ? `<div class="flex h-full max-h-full w-full flex-col">${EmptyTaskList()}</div>`
    : UndoneTaskList(undoneTasks)
}
