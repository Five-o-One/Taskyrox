import { CardOption } from '../core/card_option'

export function CardOptionBtnEvent() {
  const optionBtns = document.querySelectorAll(
    '[id^="option-btn-"]',
  ) as NodeListOf<HTMLButtonElement>
  optionBtns.forEach((btn) => {
    btn.addEventListener('click', (e: Event) => {
      const target = e.currentTarget as HTMLElement
      const id = target.id.split('-')[2]
      const optionBtn = document.querySelector(
        `#option-btn-${id}`,
      ) as HTMLDivElement
      if (optionBtn) {
        CardOption(id ? parseInt(id) : 0)
      }
    })
  })
}
