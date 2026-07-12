import { isCurrentTaskValid } from '../../core/save_btn_disabled'
import { FaDic } from '../../dic/fa'
import type { Task } from '../../types/task'
import { iconGen } from '../../utils/icon_generator'
import { ColorPriorityPiece } from './priority_span_color'
import { SelectPriority } from './select_priority'

/**
 * Creates an edit form for a task.
 * Displays the task title, description, priority selector, close button, and save button.
 * @param task The task object that contains the task title, description, priority, and state.
 * @returns Task edit form HTML.
 * The save button is disabled.
 */

export function Modifycard(task: Task, startRotated = false) {
  const isSelected = task.state.isTagmenuOpened
  const disabled = !isCurrentTaskValid()
  const iconWrapperClass = `transition-transform duration-300 ease-in-out origin-center${startRotated ? ' rotate-90' : ''}`

  return /* HTML */ `
    <div
      id="Creating-Task"
      class="border-border h-fit w-full overflow-hidden rounded-xl border shadow"
    >
      <div class="flex flex-col gap-2 p-4">
        <input
          id="taskTitle"
          class="text-text border-none text-sm font-semibold outline-none md:text-[1rem] md:font-bold"
          placeholder="${FaDic.taskTitlePlaceholder}"
          type="text"
          value="${task.title}"
        />
        <textarea
          class="resize-none text-xs font-normal outline-none md:text-sm"
          placeholder="${FaDic.taskDescriptionPlaceholder}"
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
          <div id="tagIcon" class="${iconWrapperClass}">
            ${iconGen('tag', 'shrink-0')}
          </div>
          <span class="text-text-secondary text-xs font-semibold"
            >${task.priority ? ColorPriorityPiece(task.priority) : FaDic.tagTitle}</span
          >
        </button>
        ${isSelected ? SelectPriority() : ''}
      </div>
      <div
        class="border-border flex w-full flex-row justify-end gap-1.5 border-t p-4"
      >
        <button id="closeModifyCardBtn" class="cursor-pointer active:scale-90">
          ${iconGen('xmark', 'bg-bg-elevated rounded-md w-8 h-8 shadow')}
        </button>
        <button
          ${disabled ? 'disabled' : ''}
          id="saveTaskBtn"
          class="text-primary-soft bg-primary cursor-pointer rounded-md px-4 py-1.5 text-xs font-semibold active:scale-90 md:text-sm"
        >
          ${FaDic.saveTitle}
        </button>
      </div>
    </div>
  `
}
