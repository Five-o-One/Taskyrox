import type { AppState } from '../types/app_state'
import { getTodayPersianDate } from '../core/date'

/**
 * @type {AppState}
 * @description Global application state manager.
 * Acts as the Single Source of Truth (SSOT) for the entire Taskyrox application.
 *
 * @property {number} openPageId - Tracks the active view.
 * @property {Object} navbarProfile - Contains user-related display data.
 * @property {string} theme - Current visual mode.
 * @property {boolean} isNavbarOpen - Toggle for mobile navigation.
 */
export const appState: AppState = {
  /**
   * Unique ID for the current page.
   * @default 0
   */
  openPageId: 0,

  /** User profile information for the UI */
  navbarProfile: {
    /** @default '' - User avatar image source */
    avatarUrl: '',
    /** @default '' - Persian formatted date string */
    date: '',
    /** @default '' - Authenticated username */
    username: '',
  },

  /**
   * Application visual theme.
   * @type {'light' | 'dark'}
   * @default 'light'
   */
  theme: 'light',

  /**
   * Mobile sidebar visibility status.
   * @default false
   */
  isNavbarOpen: false,
}

appState.navbarProfile.date = getTodayPersianDate()
