export function profileImgRender(base64: string) {
  const userImages = document.querySelectorAll<HTMLElement>(
    '[data-key^="profile-image-"]',
  )

  userImages.forEach((userImage) => {
    const scope = userImage.dataset.key?.replace('profile-image-', '')
    const existingImage = userImage.querySelector(
      `[data-key="filled-profile-image-${scope}"]`,
    ) as HTMLImageElement | null
    const placeholder = userImage.querySelector(
      `[data-key="empty-profile-image-${scope}"]`,
    ) as HTMLDivElement | null

    if (existingImage) {
      existingImage.src = base64
      return
    }

    if (placeholder) {
      placeholder.remove()
    }

    userImage.insertAdjacentHTML(
      'beforeend',
      `<img data-key="filled-profile-image-${scope}" src="${base64}" alt="profile" class="size-14 shrink-0 rounded-full object-cover"/>`,
    )
  })
}
