import type { CardState } from '../types/card_state'
import { ListTask } from './Card/list_task'

export function MainContent() {
  const state: CardState = {
    btnDisabled: false,
    cardState: 'Done',
    isOptionOpened: false,
    isTagMenuOpened: false,
    prioritySelected: 'LOW',
  }
  return /* HTML */ ` <div
    class="bg-bg flex h-full w-full flex-col justify-around p-4 md:w-4/5"
  >
    <div class="h-full w-full p-4">
      ${ListTask(false, [{ id: 1, title: 'Task 1', description: 'Description for Task 1', isDone: false, priority: 'HIGH', createAt: new Date().toString(), editAt: '', state }])}
    </div>
    <div class="h-full w-full p-4">${ListTask(true, [])}</div>
  </div>`
}
