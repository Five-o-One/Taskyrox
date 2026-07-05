import type { Task } from "../../types/task";
import { DoneCardComponent } from "./done_card";
import { UnDoneCardComponent } from "./undone_card";

export function TaskCard(task: Task) {
  return `
    ${task.isDone ? DoneCardComponent(task) : UnDoneCardComponent(task)}
      `;
}
