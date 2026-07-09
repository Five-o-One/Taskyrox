import { ListTask } from '../components/Card/list_task'
import { tasksState } from '../state/task_state'

export function renderTaskList() {
  const notDone = document.querySelector('#notDoneTasks')
  const done = document.querySelector('#doneTasks')

  if (notDone) {
    notDone.innerHTML = ListTask(false, tasksState)
  }

  if (done) {
    done.innerHTML = ListTask(true, tasksState)
  }
}
