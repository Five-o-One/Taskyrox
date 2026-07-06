import type { priority, Task } from "./task";


export type TaskCardState = "" | "Edit" | "Done" | "NotDone";
export interface CardState {
  cardState: TaskCardState;
  isTagmenuOpened: boolean;
  isOptionOpened: boolean;
  btnDisabled: boolean;
  prioritySelected: priority;
}
