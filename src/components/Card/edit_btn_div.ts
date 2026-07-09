import { iconGen } from '../../utils/icon_generator'

export function EditButtonDiv(id: number) {
  return /* HTML */ `
    <div
      data-key="option-${id}"
      class="border-border bg-bg flex flex-row gap-2.5 rounded-lg border p-1.5 shadow"
    >
      <div
        data-key="remove-${id}"
        class="cursor-pointer select-none active:scale-90"
      >
        ${iconGen('trash', 'fill-icon')}
      </div>
      <div class="bg-border h-5 w-px rounded-2xl"></div>
      <div
        data-key="edit-${id}"
        class="cursor-pointer select-none active:scale-90"
      >
        ${iconGen('pen', 'fill-icon')}
      </div>
    </div>
  `
}
