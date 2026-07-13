import { generateIcon } from '../../utils/icon_generator'

/**
 * Creates the edit and delete buttons for a task card.
 * @param id The identifier used in the action control data keys.
 * @returns Task action menu HTML.
 */
export function TaskActions(id: number) {
  return /* HTML */ `
    <div
      class="border-border bg-bg flex flex-row gap-2.5 rounded-lg border p-1.5 shadow"
    >
      <div
        data-key="remove-${id}"
        class="cursor-pointer select-none active:scale-90"
      >
        ${generateIcon('trash', 'fill-icon')}
      </div>
      <div class="bg-border h-5 w-px rounded-2xl"></div>
      <div
        data-key="edit-${id}"
        class="cursor-pointer select-none active:scale-90"
      >
        ${generateIcon('pen', 'fill-icon')}
      </div>
    </div>
  `
}
