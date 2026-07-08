import { currentTask } from "../state/current_task";
import { SaveTasks } from "./task_storage";


export function SaveDataBtn(target: HTMLElement): boolean {
  const btn = target.closest("#saveTaskBtn");

  if (!btn) return false;

  SaveTasks(currentTask);

  return true;
}