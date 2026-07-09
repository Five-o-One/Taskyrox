import { isCurrentTaskValid } from '../../core/save_btn_disabled'
import { TestDic } from '../../dic/task'
import type { Task } from '../../types/task'
import { iconGen } from '../../utils/icon_generator'
import { ColorPriorityPiece } from './priority_span_color'
import { SelectPriority } from './select_priority'

export function Modifycard(task: Task) {
  const isselected = task.state.isTagmenuOpened
  const disabled = !isCurrentTaskValid();
  return /* HTML */ `
    <div
      id="Creating-Task"
      class="border-border h-fit w-full overflow-hidden rounded-xl border shadow"
    >
      <div class="flex flex-col gap-2 p-4">
        <input
          id="taskTitle"
          class="text-text border-none text-sm font-semibold outline-none md:text-[1rem] md:font-bold"
          placeholder="نام تسک"
          type="text"
          value="${task.title}"
        />
        <textarea
          class="resize-none text-xs font-normal outline-none md:text-sm"
          placeholder="توضیحات"
          name=""
          id="taskDescription"
        >
${task.description}</textarea>
      </div>
      <div class="p-4 pt-2 pb-6">
        <button
          id="TagMenuBtn"
          class="border-border mb-6 flex cursor-pointer flex-row items-center justify-center gap-1 rounded-sm border px-2 py-1 active:scale-90"
        >
          ${isselected ? iconGen('tag', 'rotate-90') : iconGen('tag', '')}
          <span class="text-text-secondary text-xs font-semibold"
            >${task.priority ? ColorPriorityPiece(task.priority) : TestDic.tagTitle}</span
          >
        </button>
        ${isselected ? SelectPriority() : ''}
      </div>
      <div
        class="border-border flex w-full flex-row justify-end gap-1.5 border-t p-4"
      >
        <button id="closeModifyCardBtn" class="cursor-pointer active:scale-90">
          ${iconGen('xmark', 'bg-bg-elevated rounded-md w-8 h-8 shadow')}
        </button>
        <button
          ${disabled ? "disabled" : ""}
          id = "saveTaskBtn"
          class="cursor-pointer active:scale-90 text-primary-soft bg-primary rounded-md px-4 py-1.5 text-xs font-semibold md:text-sm"
        >
          ${TestDic.saveTitle}
        </button>
      </div>
    </div>
  `
}
