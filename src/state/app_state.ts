import type { AppState } from '../types/app_state'

export const appState: AppState = {
  openPageId: 0,
  navbarProfile: {
    avatarUrl: '',
    date: '',
    username: '',
  },
  theme: 'light',
  isNavbarOpen: false,
}
