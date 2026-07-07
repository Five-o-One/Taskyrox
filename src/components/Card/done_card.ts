import type { Task } from "../../types/task";
import { iconGen } from "../../utils/icon_generator";
import { EditButtonDiv } from "./edit_btn_div";
import { PriorityNavColor } from "./priority_nav_color";

/**
 * creates a completed task card.
 * checkbox checked
 * @param task contains the task details.
 * @returns completed task card HTML.
 */

export function DoneCardComponent(task: Task) {
  const isbtnselected = task.state.isOptionOpened;
  return `
  <div
  class="relative w-full h-fit border border-border bg-bg py-3 px-4 rounded-xl overflow-hidden"
>
  ${PriorityNavColor(task.priority)}
  <div class="flex justify-between items-start">
    <div class="flex items-center gap-4">
      <input checked class="border border-border w-5 h-5" type="checkbox" />
      <div class="flex flex-col md:flex-row gap-1 md:gap-3">
        <h3 class="text-sm line-through font-semibold mb-1 text-text">
          ${task.title}
        </h3>
      </div>
    </div>
    <button>${iconGen("menu", "rotate-90 fill-icon")}</button>
    <div class="absolute left-10 top-1/2 -translate-y-1/2">
      ${isbtnselected ? EditButtonDiv() : " "}
    </div>
  </div>
</div>
  `
}