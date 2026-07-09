import type { CardState } from '../types/card_state'
import type { Task } from '../types/task';

export let tasks: Task[] = [];

export const cardState: CardState = {
  cardState: '',
  isTagmenuOpened: false,
  isOptionOpened: false,
  btnDisabled: false,
  prioritySelected: '',
}
