import type { priority, Task } from './task'

export type TaskCardState = '' | 'Edit' | 'Done' | 'NotDone'
export interface CardState {
  cardState?: TaskCardState
  isTagMenuOpened?: boolean
  isOptionOpened?: boolean
  btnDisabled?: boolean
  prioritySelected?: priority
}
