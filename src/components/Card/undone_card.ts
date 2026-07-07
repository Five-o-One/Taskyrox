import type { Task } from "../../types/task";
import { iconGen } from "../../utils/icon_generator";
import { EditButtonDiv } from "./edit_btn_div";
import { PriorityNavColor } from "./priority_nav_color";
import { ColorPriorityPiece } from "./priority_span_color";

/**
 * Creates an unfinished task card.
 * Checkbox NOT checked
 * @param task contains the task title, description, priority, and state.
 * @returns Unfinished task card HTML.
 */

export function UnDoneCardComponent(task: Task) {
  const isbtnselected = task.state.isOptionOpened;
  return /* html */ `
        <!-- TaskCardComponent -->
          <div
            class="relative w-full h-fit border border-border bg-bg py-3 px-4 rounded-xl overflow-hidden"
          >
            ${PriorityNavColor(task.priority)}
            <!-- checkbox and title ردیف بالا-->
            <div class="flex justify-between items-start">
              <!-- right -->
              <div class="flex items-start gap-4">
              <input class="border border-border w-5 h-5" type="checkbox" />
              <div class="flex flex-col md:flex-row gap-1 md:gap-3">
                  <h3 class="text-sm font-semibold mb-1 text-text">
                  ${task.title}
                  </h3>
                  ${ColorPriorityPiece(task.priority)}
                  </div>
                  </div>
                  <!-- button left -->
                  <button>
                  ${iconGen("menu", "rotate-90 fill-icon")}
                  </button>
                  <div class="absolute left-6 bottom-6 md:bottom-1">
                  ${isbtnselected ? EditButtonDiv() : " "}
                  </div>
            </div>
            <!-- description -->
            <div class="pr-8 mt-4">
              <p class="text-text-secondary font-normal text-xs text-text-secondary">
              ${task.description}
              </p>
            </div>
          </div>
  `;
}
