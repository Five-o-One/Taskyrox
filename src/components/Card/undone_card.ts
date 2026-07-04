import type { Task } from "../../types/task";
import { PriorityNavColor } from "./PriorityNavColor";
import { ColorPriorityPiece } from "./PriortiySpanColor";

export function UnDoneCardComponent(task: Task) {
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
                  <h3 class="text-sm font-semibold mb-1">
                  ${task.title}
                  </h3>
                  ${ColorPriorityPiece(task.priority)}
                  </div>
                  </div>
                  <!-- button left -->
                  <button>
                  <img class="rotate-90" src="../src/assets/icons/menu-light.svg" alt="more-Option" />
                  </button>
            </div>
            <!-- description -->
            <div class="pr-8 mt-4">
              <p class="text-text-secondary font-normal text-xs">
              ${task.description}
              </p>
            </div>
          </div>
  `;
}
