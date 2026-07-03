export function EmptyComponent() {
  return `
        <!-- EmptyStateComponent -->
      <div
        id="Card"
        class="h-14 w-full max-w-80 md:max-w-186 p-4 border border-[#CCCCCC] rounded-[10px] border-dashed"
      >
        <button class="flex text-primary font-semibold text-sm gap-2">
          <img class="w-6 h-6" src="./src/assets/add.png" alt="Plus-Pic" />
          <span class="font-YekanBakh"> افزودن وظیفه جدید </span>
        </button>
      </div>
    `;
}
