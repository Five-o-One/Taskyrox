import type { IconName } from '../utils/icon_generator'

export interface NavBarProfile {
  username: string
  date: string
  avatarUrl: string
  isUsernameEditable: boolean
}
export interface NavBarItem {
  itemId: number
  itemIcon: IconName
  itemLabel: string
  scope?: 'desktop' | 'mobile'
}
