import { tasksState } from '../state/task_state'
import { ListTask } from './Card/list_task'
import { NavBarProfile } from './NavBar/navbar_profile'

/**
 * This function contains the main content.
 */

export function MainContent() {
  const tasks = tasksState
  return /* HTML */ ` <div
    class="bg-bg flex h-full w-full scrollbar-none flex-col justify-around overflow-y-auto p-4 md:w-4/5"
  >
    <div class="mb-16 block md:hidden">${NavBarProfile()}</div>
    <div id="notDoneTasks" class="w-full p-4">${ListTask(false, tasks)}</div>
    <div id="doneTasks" class="w-full p-4">${ListTask(true, tasks)}</div>
  </div>`
}
