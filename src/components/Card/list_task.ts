import { FaDic } from '../../dic/fa'
import type { Task } from '../../types/task'
import { AddNewTask } from './add_task'
import { Card } from './card'
import ImgEmpty from '../../../public/images/empty.svg'

/**
 * Render task list HTML for the current view.
 *
 * - When `isDone` is false, shows the not-done task list or an empty state.
 * - When `isDone` is true, shows completed tasks.
 *
 * @param isDone Whether the done tasks view is active.
 * @param list All tasks from the application state.
 * @returns HTML string for the task list section.
 */

const EmptyPage = () => /* HTML */ `
  <div
    class="relative flex h-full w-full flex-col items-center justify-center select-none lg:-top-10"
  >
    <button
      id="NewTaskCard"
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

const NotDoneTaskList = (tasks: Task[]) => /* HTML */ `
  <div class="flex h-full max-h-full w-full flex-col">
    <div class="mb-4 flex flex-col space-y-4">
      <span class="text-text text-lg font-bold">${FaDic.titleListNotDone}</span>
      <span class="text-text-secondary text-sm"
        >${FaDic.subTittleNotDone(tasks.length)}</span
      >
      ${AddNewTask()}
    </div>

    <div class="space-y-2 overflow-auto">
      ${tasks.map((task) => Card('NotDone', task)).join('')}
    </div>
  </div>
`

const DoneTaskList = (tasksDone: Task[]) => /* HTML */ `
  <div class="flex h-full max-h-full w-full flex-col">
    <div class="mb-4 flex flex-col space-y-4">
      <span class="text-text text-lg font-bold">${FaDic.titleListDone}</span>
      <span class="text-text-secondary text-sm"
        >${FaDic.subTittleDone(tasksDone.length)}</span
      >
    </div>

    <div class="space-y-2 overflow-auto">
      ${tasksDone.map((task) => Card('Done', task)).join('')}
    </div>
  </div>
`

export function ListTask(isDone: boolean, list: Task[]) {
  const tasks: Task[] = list.filter((t) => !t.isDone)
  const tasksDone: Task[] = list.filter((t) => t.isDone)

  if (isDone) {
    return tasksDone.length !== 0 ? DoneTaskList(tasksDone) : ''
  }

  return tasks.length === 0
    ? `<div class="flex h-full max-h-full w-full flex-col">${EmptyPage()}</div>`
    : NotDoneTaskList(tasks)
}
