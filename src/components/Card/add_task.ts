import { TestDic } from '../../dic/task'
import { iconGen } from '../../utils/icon_generator'

export function AddNewTask() {
  return /* HTML */ `
    <div
      id="NewTaskCard"
      class="border-border bg-bg h-14 w-full rounded-lg border border-dashed p-4"
    >
      <button
        class="text-primary flex cursor-pointer gap-2 text-sm font-semibold select-none"
      >
        ${iconGen('xmark', 'w-4 h-4 fill-primary rotate-45')}
        <span>${TestDic.addingNewTaskTitle}</span>
      </button>
    </div>
  `
}
