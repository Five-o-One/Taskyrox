import { appState } from "../state/app_state";
import { tasksState } from "../state/task_state";
import type { theme } from "../types/app_state";

export function init() {
    tasksState.push(...JSON.parse(localStorage.getItem('tasks') || '[]'));
    appState.theme = (localStorage.getItem('theme') as theme) || 'light';
}