export function Modifycard(selectTag: boolean) {
  if (!selectTag) {
    return /* html */ `
    
        <!-- creatin task -->
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
            class="flex flex-row justify-center items-center py-1 px-2 border border-border rounded-sm gap-1"
          >
            <img src="../src/assets/icons/tag-right.svg" alt="tag-icon" />
            <span class="text-xs font-semibold text-text-secondary"
              >تگها</span
            >
          </button>
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
  } else {
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
            class="flex flex-row justify-center items-center py-1 px-2 border border-border rounded-sm gap-1"
          >
            <img class="rotate-90" src="../src/assets/icons/tag-right.svg" alt="tag-icon" />
            <span class="text-xs font-semibold text-text-secondary"
              >تگها</span
            >
          </button>
          <div class="flex w-fit p-2.5 flex-row items-center border border-border rounded-lg gap-4 shadow">
            <span
                class="bg-success-soft items-center text-[10px] font-semibold w-fit text-success py-0.5 px-2 rounded-sm"
                >پایین</span
              >
              <div class="w-px bg-border h-5 rounded-2xl"></div>
              <span
                class="bg-warning-soft items-center text-[10px] font-semibold w-fit text-warning py-0.5 px-2 rounded-sm"
                >متوسط</span
              >
              <div class="w-px bg-border h-5 rounded-2xl"></div>
              <span
                class="bg-danger-soft items-center text-[10px] font-semibold w-fit text-danger py-0.5 px-2 rounded-sm"
                >بالا</span
              >
          </div>
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
}
