import { TestDic } from '../../dic/task'
import { iconGen } from '../../utils/icon_generator'

export function NewTaskComponenet() {
  return /* HTML */ `
    <!-- EmptyStateComponent -->
    <div
      id="Card"
      class="border-border h-14 w-full rounded-xl border border-dashed p-4"
    >
      <button class="text-primary flex gap-2 text-sm font-semibold">
        ${iconGen('xmark', 'rotate-45 w-6 h-6')}
        <span>${TestDic.addingNewTaskTitle}</span>
      </button>
    </div>
  `
}
