import { tasksState } from '../state/task_state'
import { ListTask } from './Card/list_task'

export function MainContent() {
  const tasks = tasksState
  return /* HTML */ ` <div
    class="bg-bg flex h-full w-full flex-col justify-around p-4 md:w-4/5"
  >
    <div id="notDoneTasks" class="h-full w-full p-4">${ListTask(false, tasks)}</div>
    <div id="doneTasks" class="h-full w-full p-4">${ListTask(true, tasks)}</div>
  </div>`
}
