import { TestDic } from '../../dic/task'
import type { priority } from '../../types/task'

export function ColorPriorityPiece(taskPriority: priority) {
  switch (taskPriority) {
    case 'HIGH':
      return /* HTML */ `
        <span
          class="bg-danger-soft text-danger w-fit items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold"
          >${TestDic.highPriorityTitle}</span
        >
      `
    case 'MEDIUM':
      return /* HTML */ `
        <span
          class="bg-warning-soft text-warning w-fit items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold"
          >${TestDic.mediumPriorityTitle}</span
        >
      `
    case 'LOW':
      return /* HTML */ `
        <span
          class="bg-success-soft text-success w-fit items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold"
          >${TestDic.lowPriorityTitle}</span
        >
      `
  }
}
