import { iconGen } from '../../utils/icon_generator'

/**
 * Creates the edit and delete buttons for a task card.
 * @returns Task action menu HTML.
 */

export function EditButtonDiv() {
  return /* HTML */ `
    <div
      class="border-border bg-bg flex flex-row gap-2.5 rounded-lg border p-1.5 shadow"
    >
      <div class="cursor-pointer select-none active:scale-90">
        ${iconGen('trash', 'fill-icon')}
      </div>
      <div class="bg-border h-5 w-px rounded-2xl"></div>
      <div class="cursor-pointer select-none active:scale-90">
        ${iconGen('pen', 'fill-icon')}
      </div>
    </div>
  `
}
