import type { Task } from '../../types/task'
import { iconGen } from '../../utils/icon_generator'
import { EditButtonDiv } from './edit_btn_div'
import { PriorityNavColor } from './priority_nav_color'

/**
 * Creates a completed task card.
 * @param task Shows the task as completed with a checked checkbox and a strikethrough title.
 * @returns completed task card HTML.
 */

export function DoneCardComponent(task: Task) {
  const isbtnselected = task.state.isOptionOpened
  return /* HTML */ `
    <div
      class="border-border bg-bg relative h-fit w-full overflow-hidden rounded-xl border px-4 py-3"
    >
      ${PriorityNavColor(task.priority)}
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-4">
          <input checked class="border-border h-5 w-5 border" type="checkbox" />
          <div class="flex flex-col gap-1 md:flex-row md:gap-3">
            <h3 class="text-text mb-1 text-sm font-semibold line-through">
              ${task.title}
            </h3>
          </div>
        </div>
        <button>${iconGen('menu', 'rotate-90 fill-icon')}</button>
        <div class="absolute top-1/2 left-10 -translate-y-1/2">
          ${isbtnselected ? EditButtonDiv() : ' '}
        </div>
      </div>
    </div>
  `
}
