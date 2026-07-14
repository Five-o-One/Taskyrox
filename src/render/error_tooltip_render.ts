const TOOLTIP_ID = 'task-validation-tooltip'

/**
 * Creates and positions a validation tooltip directly above the given anchor.
 * @param anchor The element the tooltip should appear above (the save button).
 * @param messages The list of validation messages to display.
 */
export function showValidationTooltip_render(
  anchor: HTMLElement,
  messages: string[],
) {
  hideValidationTooltip_render()

  if (messages.length === 0) return

  const tooltip = document.createElement('div')
  tooltip.id = TOOLTIP_ID
  tooltip.setAttribute(
    'class',
    'bg-danger rounded-lg px-3 py-2 fixed z-100 shadow-lg pointer-events-none space-y-1',
  )
  tooltip.innerHTML = messages
    .map(
      (msg) =>
        `<div class="text-danger-soft text-xs font-semibold">${msg}</div>`,
    )
    .join('')

  document.body.appendChild(tooltip)

  const anchorRect = anchor.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()

  tooltip.style.top = `${anchorRect.top - tooltipRect.height - 8}px`
  tooltip.style.left = `${anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2}px`
}

/**
 * Removes the validation tooltip from the document, if present.
 */
export function hideValidationTooltip_render() {
  document.getElementById(TOOLTIP_ID)?.remove()
}
