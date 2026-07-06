import { NavBarProfile } from "./navbar";
export type theme = "dark" | "light";
export interface AppState {
  navbarProfile: NavBarProfile;
  openPageId: number;
  theme: theme;
  isNavbarOpen: boolean;
}
