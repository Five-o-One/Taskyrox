import {
  convertFileToBase64,
  saveProfileImage,
} from '../core/profile_img'

export function profileImageSelection_event() {
  const profileImages = document.querySelectorAll<HTMLElement>(
    '[data-key^="profile-image-"]',
  )

  profileImages.forEach((profileImage) => {
    profileImage.addEventListener('click', async () => {
      const profileAvatar = await window.showOpenFilePicker()
      const file = await profileAvatar[0].getFile()
      const base64 = await convertFileToBase64(file)
      saveProfileImage(base64)
    })
  })
}
