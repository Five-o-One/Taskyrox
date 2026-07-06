import type { Task } from "../types/task";
import { iconGen } from "../utils/icon_generator";
import { ListTask } from "./listTask";

//! test data
const testData : Task[] = [
  { id: 1, title: "Task 1", description: "First test task", isDone: false, priority: "HIGH" },
  { id: 2, title: "Task 2", description: "Second test task", isDone: false, priority: "MEDIUM" },
  { id: 3, title: "Task 3", description: "Third test task", isDone: false, priority: "LOW" },
  { id: 4, title: "Task 4", description: "Fourth test task", isDone: true, priority: "HIGH" },
  { id: 5, title: "Task 5", description: "Fifth test task", isDone: true, priority: "MEDIUM" }
]
//! test data end

export function MainContent() {
  return `
    <div class="flex flex-col w-full h-screen p-4 bg-bg md:w-4/5">
    <div class="w-full h-full p-4 overflow-auto">${ListTask(false , testData)}</div>
    <div class="w-full h-full p-4 overflow-auto">${ListTask(true , testData)}</div>
    </div>`;
}
