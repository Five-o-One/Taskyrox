import { FaDic } from '../../dic/fa'
import { generateIcon } from '../../utils/icon_generator'

/**
 * This component must be deleted.
 */

export function UnselectedTaskCard() {
  return /* HTML */ `
    <!-- EmptyStateComponent -->
    <div
      data-key="empty-task-card"
      class="border-border h-14 w-full rounded-xl border border-dashed p-4"
    >
      <button class="text-primary flex gap-2 text-sm font-semibold">
        ${generateIcon('xmark', 'rotate-45 w-6 h-6')}
        <span>${FaDic.addingNewTaskTitle}</span>
      </button>
    </div>
  `
}
