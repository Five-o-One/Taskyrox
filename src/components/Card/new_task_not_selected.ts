import { TestDic } from "../../dic/task";
import { iconGen } from "../../utils/icon_generator";

export function NewTaskComponenet() {
  return /* html */ `
        <!-- EmptyStateComponent -->
      <div
        id="Card"
        class="h-14 w-full p-4 border border-border rounded-xl border-dashed"
      >
        <button class="flex text-primary font-semibold text-sm gap-2">
          ${iconGen("xmark", "rotate-45 w-6 h-6")}
          <span>${TestDic.addingNewTaskTitle}</span>
        </button>
      </div>

  `;
}
