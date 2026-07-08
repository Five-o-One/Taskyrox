import { renderAddTaskCard } from "../render/add_task_render";
import type { Task } from "../types/task";

const currentTask: Task = {
  id: Date.now(),
  title: "",
  description: "",
  isDone: false,
  priority: "",
  createAt: new Date().toISOString(),
  editAt: new Date().toISOString(),

  state: { isTagmenuOpened: false } as any,
};

export function CloseBtn(target: HTMLElement): void {
  currentTask.state.isOptionOpened = false;
  renderAddTaskCard(target);
}
