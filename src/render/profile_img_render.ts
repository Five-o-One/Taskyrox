export function profileImgRender(base64: string) {
  const userImage = document.getElementById('imageProfile')

  if (userImage) {
    const existingImage = userImage.querySelector(
      '#filledImageProfile',
    ) as HTMLImageElement | null
    const placeholder = userImage.querySelector(
      '#emptyImageProfile',
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
      `<img id="filledImageProfile" src="${base64}" alt="profile" class="size-14 shrink-0 rounded-full object-cover"/>`,
    )
  }
}
