import type { Task } from "../types/task";

const STORAGE_KEY = "tasks";

export function saveTask(task: Task) {
    const tasks = getTasks();

    tasks.push({
        ...task,
    });

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );
}

export function getTasks(): Task[] {
    const tasks = localStorage.getItem(STORAGE_KEY);

    if (!tasks) {
        return [];
    }

    return JSON.parse(tasks);
}