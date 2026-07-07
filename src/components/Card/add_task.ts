import { TestDic } from "../../dic/task";
import { iconGen } from "../../utils/icon_generator";


/**
 * 
 * @returns This component creates the UI for adding a new task. 
 * It uses `TestDic` for the button's title and `iconGen` for generating icons with the determined appearance.
 */

export function AddNewTask() {
  return `
      <div
        id="Card"
        class="h-14 w-full p-4 border border-border rounded-lg bg-bg border-dashed"
      >
        <button class="flex text-primary font-semibold text-sm gap-2">
          ${iconGen("xmark", "w-4 h-4 fill-primary rotate-45")}
          <span>${TestDic.addingNewTaskTitle}</span>
        </button>
      </div>
    `;
}
