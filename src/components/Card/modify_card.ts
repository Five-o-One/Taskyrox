import { SelectPriority } from "./select_priority";

export function Modifycard(isselected: boolean) {
  return /* html */ `
          <div
        id="Creating-Task"
        class="w-full h-fit border border-border shadow rounded-xl overflow-hidden"
      >
        <div class="flex flex-col p-4 gap-2">
          <input
            class="border-none outline-none font-semibold text-sm md:text-[1rem] md:font-bold"
            placeholder="نام تسک"
            type="text"
          />
          <textarea
            class="outline-none resize-none text-xs md:text-sm font-normal"
            placeholder="توضیحات"
            name=""
            id=""
          ></textarea>
        </div>
        <div class="p-4 pt-2 pb-6">
          <button
            class="mb-6 flex flex-row justify-center items-center py-1 px-2 border border-border rounded-sm gap-1"
          >
            <img class="rotate-90" src="../src/assets/icons/tag-right.svg" alt="tag-icon" />
            <span class="text-xs font-semibold text-text-secondary"
              >تگها</span
            >
          </button>
          ${isselected ? SelectPriority() : ""}
        </div>
        <div
          class="border-t w-full p-4 gap-1.5 flex flex-row justify-end border-border"
        >
          <button>
            <img
              class="bg-bg-elevated rounded-md w-8 h-8 shadow"
              src="../src/assets/icons/xmark.svg"
              alt="close_Cross"
            />
          </button>
          <button
            disabled
            class="text-xs md:text-sm font-semibold text-primary-soft bg-primary px-4 py-1.5 rounded-md"
          >
            اضافه کردن تسک
          </button>
        </div>
      </div>
    `;
}
