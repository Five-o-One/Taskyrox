import type { priority, Task } from "./task";

export interface TaskState {
  tasks: Task[];
  isDone: boolean;
  istagselected: boolean;
  isoptionselected: boolean;
  iseditbtnselected: boolean;
  isbtndisabled: boolean;
  titleEdit: string;
  descEdit: string;
  priorityselected: priority;
}
