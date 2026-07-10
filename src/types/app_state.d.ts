import { NavBarProfile } from './navbar'

/**
 * Visual modes available in the system.
 */
export type theme = 'dark' | 'light'

/**
 * Global state contract for Taskyrox.
 */
export interface AppState {
  /**
   * Sidebar profile section data.
   * @see {@link NavBarProfile}
   */
  navbarProfile: NavBarProfile

  /**
   * Unique index of the active view.
   * @default 0
   * @example 0 (Home), 1 (Tasks), 2 (Calendar)
   */
  openPageId: number

  /**
   * Current color theme preference.
   * @default 'light'
   */
  theme: theme

  /**
   * Toggle for mobile sidebar visibility.
   * @default false
   */
  isNavbarOpen: boolean
}
