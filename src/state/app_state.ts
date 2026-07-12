import type { AppState } from '../types/app_state'
import { getTodayPersianDate } from '../core/date'
export const appState: AppState = {
  openPageId: 0,
  navbarProfile: {
    avatarUrl: '',
    // avatarUrl: 'https://i.pravatar.cc/300',

    date: '',
    username: 'Fo1',
  },
  theme: 'light',
  isNavbarOpen: false,
}

appState.navbarProfile.date = getTodayPersianDate()
