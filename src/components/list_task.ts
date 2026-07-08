import { TestDic } from '../dic/task'
import type { Task } from '../types/task'
import { AddNewTask } from './Card/add_task'
import { Card } from './Card/card'

const EmptyPage = () => /* HTML */ `
  <div
    class="flex h-full w-full flex-col items-center justify-center gap-4 select-none"
  >
    <img src="/public/images/empty.svg" alt="empty" />
    <div class="flex flex-col items-center justify-center gap-4 text-center">
      <span class="text-text-secondary text-md"
        >چه کارهایی امروز برای انجام داری؟</span
      >
      <span class="text-text-muted text-sm"
        >میتونی الان تسک‌هاتو اینجا بنویسی و برنامه ریزی رو شروع کنی!</span
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
          >${TestDic.titleListNotDone}</span
        >
        <span class="text-text-secondary text-sm"
          >${TestDic.subTittleNotDone(tasks.length)}</span
        >
        ${AddNewTask()}
      </div>

      ${tasks.length !== 0 ? `<div class="space-y-2 overflow-auto max-h-52"> ${tasks.map((task) => Card('NotDone', task)).join('')} </div>` : EmptyPage()}
    </div>`
  } else {
    return /* HTML */ tasksDone.length !== 0
      ? `<div class="flex flex-col w-full h-full">
        <div class="flex flex-col mb-4 space-y-4">
        <span class="font-bold text-lg text-text">${TestDic.titleListDone}</span>
        <span class="text-sm text-text-secondary">${TestDic.subTittleDone(tasksDone.length)}</span>
        </div>
        <div class="space-y-2 overflow-auto max-h-52">
    ${tasksDone.map((task) => `${Card('Done', task)}`).join('')}
        </div>
        </div>`
      : ''
  }
}
