import { profileImg as imgCore } from '../core/profile_img'
async function fileToBase64(file: File): Promise<string> {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
        return
      }

      reject(new Error('Failed to read file as base64'))
    }

    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

export function ProfileImgEvent() {
  const profileImages = document.querySelectorAll<HTMLElement>(
    '[data-key^="profile-image-"]',
  )

  profileImages.forEach((profileImg) => {
    profileImg.addEventListener('click', async () => {
      const profileAvatar = await window.showOpenFilePicker()
      const file = await profileAvatar[0].getFile()
      const base64 = await fileToBase64(file)
      imgCore(base64)
    })
  })
}
