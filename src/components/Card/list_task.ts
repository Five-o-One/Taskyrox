import {FaDic} from '../../dic/fa'
import type { Task } from '../../types/task'
import { AddNewTask } from './add_task'
import { Card } from './card'

/**
 * Creates the task list section from the provided tasks.
 * Separates tasks into done and not-done groups and shows the correct list based on the selected state.
 * Also displays the add-task section and empty state for the not-done list.
 * @param isDone Determines whether the done or not-done task list should be shown.
 * @param list The full list of tasks.
 * @returns Task list HTML.
 */

const EmptyPage = () => /* HTML */ `
  <div
    class="flex h-full w-full flex-col items-center justify-center gap-4 select-none"
  >
    <img src="/public/images/empty.svg" alt="empty" />
    <div class="flex flex-col items-center justify-center gap-4 text-center">
      <span class="text-text-secondary text-md"
        >${FaDic.emptyStateTitle}</span
      >
      <span class="text-text-muted text-sm"
        >${FaDic.emptyStateDescription}</span 
      >
    </div>
  </div>
`

export function ListTask(isDone: boolean, list: Task[]) {
  const tasks: Task[] = list.filter((t) => !t.isDone)
  const tasksDone: Task[] = list.filter((t) => t.isDone)
  if (!isDone) {
    return /* HTML */ `<div class="flex h-full w-full flex-col">
      <div class="mb-4 flex flex-col space-y-4">
        <span class="text-text text-lg font-bold"
          >${FaDic.titleListNotDone}</span
        >
        <span class="text-text-secondary text-sm"
          >${FaDic.subTittleNotDone(tasks.length)}</span
        >
        ${AddNewTask()}
      </div>

      ${tasks.length !== 0 ? `<div class="space-y-2 overflow-auto max-h-52"> ${tasks.map((task) => Card('NotDone', task)).join('')} </div>` : EmptyPage()}
    </div>`
  } else {
    return /* HTML */ tasksDone.length !== 0
      ? `<div class="flex flex-col w-full h-full">
        <div class="flex flex-col mb-4 space-y-4">
        <span class="font-bold text-lg text-text">${FaDic.titleListDone}</span>
        <span class="text-sm text-text-secondary">${FaDic.subTittleDone(tasksDone.length)}</span>
        </div>
        <div class="space-y-2 overflow-auto max-h-52">
    ${tasksDone.map((task) => `${Card('Done', task)}`).join('')}
        </div>
        </div>`
      : ''
  }
}
