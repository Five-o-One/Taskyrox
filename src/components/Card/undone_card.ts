import type { Task } from '../../types/task'
import { generateIcon } from '../../utils/icon_generator'
import { TaskActions } from './edit_btn_div'
import { TaskPriorityBar } from './priority_nav_color'
import { TaskPriorityBadge } from './priority_span_color'

/**
 * Creates an unfinished task card.
 * Checkbox NOT checked
 * @param task contains the task title, description, priority, and state.
 * @returns Unfinished task card HTML.
 */
export function UndoneTaskCard(task: Task) {
  const isOptionMenuOpen = task.state.isOptionOpened
  const description = task.description !== ''
  return /* HTML */ `
    <!-- TaskCardComponent -->
    <div
      data-key="task-card-${task.id}"
      class="border-border bg-bg relative h-fit w-full overflow-hidden rounded-xl border px-4 py-3"
    >
      ${TaskPriorityBar(task.priority, task.id)}
      <!-- checkbox and title ردیف بالا-->
      <div class="flex items-start justify-between">
        <!-- right -->
        <div class="flex items-start gap-4">
          <input
            data-key="check-${task.id}"
            class="border-border h-5 w-5 border"
            type="checkbox"
          />
          <div class="flex flex-col gap-1 md:flex-row md:gap-3">
            <h3 class="text-text mb-1 text-sm font-semibold">${task.title}</h3>
            ${TaskPriorityBadge(task.priority)}
          </div>
        </div>
        <!-- button left -->
        <button data-key="option-${task.id}">
          ${generateIcon('menu', 'rotate-90 fill-icon')}
        </button>
        <div class="absolute bottom-6 left-6 md:bottom-1">
          ${isOptionMenuOpen ? TaskActions(task.id) : ' '}
        </div>
      </div>
      <!-- description -->
      <div class="${description ? '' : 'hidden'} mt-4 pr-8">
        <p class="text-text-secondary text-xs font-normal">
          ${task.description}
        </p>
      </div>
    </div>
  `
}
