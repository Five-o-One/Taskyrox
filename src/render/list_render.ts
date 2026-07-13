import { TaskList } from '../components/Card/list_task'
import {
  taskCheck_event,
  taskDelete_event,
  taskEdit_event,
  taskOptions_event,
} from '../events/card_event'
import { tasksState } from '../state/task_state'
import { TaskCard } from '../components/Card/card'

export function taskList_render() {
  const notDone = document.querySelector('[data-key="not-done-tasks"]')
  const done = document.querySelector('[data-key="done-tasks"]')

  if (notDone) {
    notDone.innerHTML = TaskList(false, tasksState)
  }

  if (done) {
    done.innerHTML = TaskList(true, tasksState)
  }
  taskDelete_event()
  taskOptions_event()
  taskCheck_event()
  taskEdit_event()
}

export function taskCard_render(id: number) {
  const task = tasksState.find((taskItem) => taskItem.id === id)
  if (!task) {
    return
  }

  const cardWrapper = document.querySelector<HTMLElement>(
    `[data-key="task-card-${id}"]`,
  )
  if (!cardWrapper) {
    return
  }

  const state = task.isDone ? 'Done' : 'NotDone'
  cardWrapper.outerHTML = TaskCard(state, task)

  taskDelete_event()
  taskOptions_event()
  taskCheck_event()
  taskEdit_event()
}
