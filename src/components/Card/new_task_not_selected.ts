export function NewTaskComponenet() {
  return /* html */ `
        <!-- EmptyStateComponent -->
      <div
        id="Card"
        class="h-14 w-full p-4 border border-border rounded-xl border-dashed"
      >
        <button class="flex text-primary font-semibold text-sm gap-2">
          <img class="w-6 h-6" src="../../src/assets/icons/add.svg" alt="Plus-Pic" />
          <span> افزودن وظیفه جدید </span>
        </button>
      </div>

  `;
}
