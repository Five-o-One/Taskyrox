export function TaskCard(
  bgColor: string,
  txtColor: string,
  Titletxt: string,
  DescTxt: string,
) {
  return `
  <!-- TaskCardComponent -->
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
          <div class="flex items-start gap-4">
            <input class="border border-borderColor w-5 h-5" type="checkbox" />
            <div class="flex flex-col md:flex-row gap-1 md:gap-3">
              <h3 class="text-sm font-YekanBakh font-semibold mb-1">
              ${Titletxt}
              </h3>
              <span
                class="bg-${txtColor} items-center text-[10px] font-YekanBakh font-semibold w-fit text-${bgColor} py-0.5 px-2 rounded-sm"
                >بالا</span
              >
            </div>
          </div>
          <!-- button left -->
          <button>
            <img src="./src/assets/Frame 33317.svg" alt="more-Option" />
          </button>
        </div>
        <!-- description -->
        <div class="pr-8 mt-4">
          <p class="text-gray-500 font-YekanBakh font-normal text-xs">
          ${DescTxt}
          </p>
        </div>
      </div>
    `;
}
