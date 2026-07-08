import { TestDic } from "../../dic/task";
import type { Task } from "../../types/task";
import { iconGen } from "../../utils/icon_generator";
import { ColorPriorityPiece } from "./priority_span_color";
import { SelectPriority } from "./select_priority";

export function Modifycard(task: Task) {
  const isselected = task.state.isTagmenuOpened;
  return /* html */ `
          <div
        id="Creating-Task"
        class="w-full h-fit border border-border shadow rounded-xl overflow-hidden"
      >
        <div class="flex flex-col p-4 gap-2">
          <input
            class="border-none outline-none font-semibold text-sm md:text-[1rem] md:font-bold text-text"
            placeholder="نام تسک"
            type="text"
            value="${task.title}"
          />
          <textarea
            class="outline-none resize-none text-xs md:text-sm font-normal"
            placeholder="توضیحات"
            name=""
            id=""
          >${task.description}</textarea>
        </div>
        <div class="p-4 pt-2 pb-6">
          <button
            id="TagMenuBtn"
            class="cursor-pointer active:scale-90 mb-6 flex flex-row justify-center items-center py-1 px-2 border border-border rounded-sm gap-1"
          >
          ${isselected ? iconGen("tag", "rotate-90") : iconGen("tag", "")}
            <span class="text-xs font-semibold text-text-secondary"
              >${task.priority ? ColorPriorityPiece(task.priority) : TestDic.tagTitle}</span
            >
          </button>
          ${isselected ? SelectPriority() : ""}
        </div>
        <div
          class="border-t w-full p-4 gap-1.5 flex flex-row justify-end border-border"
        >
          <button id="closeModifyCardBtn" class="cursor-pointer active:scale-90">
            ${iconGen("xmark", "bg-bg-elevated rounded-md w-8 h-8 shadow")}
          </button>
          <button
            disabled
            class="text-xs md:text-sm font-semibold text-primary-soft bg-primary px-4 py-1.5 rounded-md"
          >
          ${TestDic.saveTitle}
          </button>
        </div>
      </div>
    `;
}
