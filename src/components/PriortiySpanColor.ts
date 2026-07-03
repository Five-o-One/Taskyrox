import type { priority } from "../types/task";

export function ColorPriorityPiece(taskPrioriy: priority) {
  switch (taskPrioriy) {
    case "HIGH":
      return `
                <span
                class="bg-danger-soft items-center text-[10px] font-semibold w-fit text-danger py-0.5 px-2 rounded-sm"
                >بالا</span
              >
  `;
      break;
    case "MEDIUM":
      return `
                <span
                class="bg-warning-soft items-center text-[10px] font-semibold w-fit text-warning py-0.5 px-2 rounded-sm"
                >متوسط</span
              >
  `;
      break;
    case "LOW":
      return `
                <span
                class="bg-success-soft items-center text-[10px] font-semibold w-fit text-success py-0.5 px-2 rounded-sm"
                >پایین</span
              >
  `;
      break;
  }
}
