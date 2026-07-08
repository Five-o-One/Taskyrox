import { ListTask } from './Card/list_task'

export function MainContent() {
  return /* HTML */ ` <div
    class="bg-bg flex h-full w-full flex-col justify-around p-4 md:w-4/5"
  >
    <div class="h-full w-full p-4">${ListTask(false, [])}</div>
    <div class="h-full w-full p-4">${ListTask(true, [])}</div>
  </div>`
}
