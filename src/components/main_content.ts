import type { Task } from "../types/task";
import { TaskCard } from "./TaskCardComponent";

export function MainContent() {
  const task: Task = {
    description: "سلام",
    isDone: false,
    id: 1,
    title: "شبنختیشخهبت",
    priority: "MEDIUM",
  };
  return `
    <div class="w-full h-screen p-4 bg-primary md:w-4/5">${TaskCard(task)}</div>`;
}
