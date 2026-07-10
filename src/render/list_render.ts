import { ListTask } from '../components/Card/list_task'
import { CardDeleteEvent, CardOptionEvent } from '../events/card_event'
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
  CardDeleteEvent()
  CardOptionEvent()
}
