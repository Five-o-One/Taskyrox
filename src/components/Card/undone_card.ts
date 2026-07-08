import type { Task } from '../../types/task'
import { iconGen } from '../../utils/icon_generator'
import { EditButtonDiv } from './edit_btn_div'
import { PriorityNavColor } from './priority_nav_color'
import { ColorPriorityPiece } from './priority_span_color'

export function UnDoneCardComponent(task: Task) {
  const isbtnselected = task.state.isOptionOpened
  return /* HTML */ `
    <!-- TaskCardComponent -->
    <div
      class="border-border bg-bg relative h-fit w-full overflow-hidden rounded-xl border px-4 py-3"
    >
      ${PriorityNavColor(task.priority)}
      <!-- checkbox and title ردیف بالا-->
      <div class="flex items-start justify-between">
        <!-- right -->
        <div class="flex items-start gap-4">
          <input class="border-border h-5 w-5 border" type="checkbox" />
          <div class="flex flex-col gap-1 md:flex-row md:gap-3">
            <h3 class="text-text mb-1 text-sm font-semibold">${task.title}</h3>
            ${ColorPriorityPiece(task.priority)}
          </div>
        </div>
        <!-- button left -->
        <button>${iconGen('menu', 'rotate-90 fill-icon')}</button>
        <div class="absolute bottom-6 left-6 md:bottom-1">
          ${isbtnselected ? EditButtonDiv() : ' '}
        </div>
      </div>
      <!-- description -->
      <div class="mt-4 pr-8">
        <p class="text-text-secondary text-xs font-normal">
          ${task.description}
        </p>
      </div>
    </div>
  `
}
