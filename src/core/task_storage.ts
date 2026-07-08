import type { Task } from "../types/task";

const STORAGE_KEY = "tasks";

export function SaveTasks (task : Task){
    const tasks = getTask();
    tasks.push(task);
    localStorage.setItem(STORAGE_KEY , JSON.stringify(tasks))
}

export function getTask(): Task[]{
    const tasks = localStorage.getItem(STORAGE_KEY);
    if(!tasks) {
        return[];
    }
    return JSON.parse(tasks);
}