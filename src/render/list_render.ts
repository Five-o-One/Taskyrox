import { ListTask } from '../components/Card/list_task'
import { getTasks } from '../core/task_storage'

export function renderTaskList() {
  const taskList = document.querySelector("#taskList");//listtaskneed to be changed

  if (!taskList) return;

  const tasks = getTasks();

  taskList.innerHTML = ListTask(false, tasks);
}