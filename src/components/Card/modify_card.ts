import { isCurrentTaskValid } from '../../core/save_btn_disabled'
import { FaDic } from '../../dic/fa'
import type { Task } from '../../types/task'
import { generateIcon } from '../../utils/icon_generator'
import { TaskPriorityBadge } from './priority_span_color'
import { PrioritySelector } from './select_priority'

/**
 * Creates an edit form for a task.
 * Displays the task title, description, priority selector, close button, and save button.
 * @param task The task object that contains the task title, description, priority, and state.
 * @returns Task edit form HTML.
 * The save button is disabled.
 */
export function ModifyTaskCard(task: Task, startRotated = false) {
  const isSelected = task.state.isTagmenuOpened
  const disabled = !isCurrentTaskValid()
  const iconWrapperClass = `transition-transform duration-300 ease-in-out origin-center${startRotated ? ' rotate-90' : ''}`

  return /* HTML */ `
    <div
      data-key="creating-task"
      class="border-border h-fit w-full overflow-hidden rounded-xl border shadow"
    >
      <div class="flex flex-col gap-2 p-4">
        <input
          data-key="task-title"
          class="text-text border-none text-sm font-semibold outline-none md:text-[1rem] md:font-bold"
          placeholder="${FaDic.taskTitlePlaceholder}"
          type="text"
          value="${task.title}"
        />
        <textarea
          class="resize-none text-xs font-normal outline-none md:text-sm"
          placeholder="${FaDic.taskDescriptionPlaceholder}"
          name=""
          data-key="task-description"
        >
${task.description}</textarea>
      </div>
      <div class="p-4 pt-2 pb-6">
        <button
          data-key="tag-menu-button"
          class="border-border mb-6 flex cursor-pointer flex-row items-center justify-center gap-1 rounded-sm border px-2 py-1 active:scale-90"
        >
          <div data-key="tag-icon" class="${iconWrapperClass}">
            ${generateIcon('tag', 'shrink-0')}
          </div>
          <span class="text-text-secondary text-xs font-semibold"
            >${task.priority ? TaskPriorityBadge(task.priority) : FaDic.tagTitle}</span
          >
        </button>
        ${isSelected ? PrioritySelector() : ''}
      </div>
      <div
        class="border-border flex w-full flex-row justify-end gap-1.5 border-t p-4"
      >
        <button
          data-key="close-modify-card-button"
          class="cursor-pointer active:scale-90"
        >
          ${generateIcon('xmark', 'bg-bg-elevated rounded-md w-8 h-8 shadow')}
        </button>
        <button
          ${disabled ? 'disabled' : ''}
          data-key="save-task-button"
          class="text-primary-soft bg-primary disabled:bg-bg-elevated disabled:text-text-disabled cursor-pointer rounded-md px-4 py-1.5 text-xs font-semibold active:scale-90 disabled:cursor-not-allowed disabled:active:scale-100 md:text-sm"
        >
          ${FaDic.saveTitle}
        </button>
      </div>
    </div>
  `
}
