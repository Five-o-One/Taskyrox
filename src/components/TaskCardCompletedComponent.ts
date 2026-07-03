export function CompletedTask(titleTxt: string, bgColor: string) {
  return `
      <div
        class="relative w-full max-w-80 md:max-w-186 border border-borderColor py-3 px-4 rounded-xl overflow-hidden"
      >
        <div
          id="priorityColorID"
          class="absolute top-0 right-0 bg-${bgColor} h-full w-1 rounded-lg"
        ></div>
        <!-- checkbox and title ردیف بالا-->
        <div class="flex justify-between items-start">
          <!-- right -->
          <div class="flex items-center gap-4">
            <input checked class="border border-borderColor w-5 h-5" type="checkbox" />
            <div class="flex flex-col md:flex-row gap-1 md:gap-3">
              <h3
                class="text-sm line-through font-YekanBakh font-semibold mb-1"
              >${titleTxt}</h3>
            </div>
          </div>
          <!-- button left -->
          <button>
            <img src="./src/assets/Frame 33317.svg" alt="more-Option" />
          </button>
        </div>
      </div>
  `;
}
