import { profileImage_render } from '../render/profile_img_render'
import { appState } from '../state/app_state'

export async function convertFileToBase64(file: File): Promise<string> {
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

export function saveProfileImage(base64: string) {
  appState.navbarProfile.avatarUrl = base64
  localStorage.setItem('user-img', base64)
  profileImage_render(base64)
}
