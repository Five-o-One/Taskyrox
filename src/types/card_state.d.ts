import type { priority, Task } from './task'

export type TaskCardState = '' | 'Edit' | 'Done' | 'NotDone'
export interface CardState {
  cardState: TaskCardState
  prioritySelected: priority
  btnDisabled: boolean
  isOptionOpened: boolean
  isTagmenuOpened: boolean
}
