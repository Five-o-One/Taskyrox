import { ListTask } from '../components/Card/list_task'
import {
  CardCheckEvent,
  CardDeleteEvent,
  CardEditEvent,
  CardOptionEvent,
} from '../events/card_event'
import { tasksState } from '../state/task_state'
import { Card } from '../components/Card/card'

export function renderTaskList() {
  const notDone = document.querySelector('[data-key="not-done-tasks"]')
  const done = document.querySelector('[data-key="done-tasks"]')

  if (notDone) {
    notDone.innerHTML = ListTask(false, tasksState)
  }

  if (done) {
    done.innerHTML = ListTask(true, tasksState)
  }
  CardDeleteEvent()
  CardOptionEvent()
  CardCheckEvent()
  CardEditEvent()
}

export function renderTaskCard(id: number) {
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
  cardWrapper.outerHTML = Card(state, task)

  CardDeleteEvent()
  CardOptionEvent()
  CardCheckEvent()
  CardEditEvent()
}
