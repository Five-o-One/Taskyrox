import type { IconName } from "../utils/icon_generator";

export interface NavBarProfile {
  username: string;
  date: string;
  avatarUrl: string;
}
export interface NavBarItem {
  itemId: number;
  itemIcon: IconName;
  itemLabel: string;
}
