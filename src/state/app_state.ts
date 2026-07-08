import type { AppState } from '../types/app_state'
import { getTodayPersianDate } from '../core/date'
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

appState.navbarProfile.date = getTodayPersianDate()
