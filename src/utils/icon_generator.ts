import calendar from '../assets/icons/calendar-light.svg?raw'
import calendarBold from '../assets/icons/calendar-bold.svg?raw'
import checklist from '../assets/icons/checklist-light.svg?raw'
import checklistBold from '../assets/icons/checklist-bold.svg?raw'
import home from '../assets/icons/home-light.svg?raw'
import homeBold from '../assets/icons/home-bold.svg?raw'
import info from '../assets/icons/info-light.svg?raw'
import infoBold from '../assets/icons/info-bold.svg?raw'
import logout from '../assets/icons/logout-light.svg?raw'
import logoutBold from '../assets/icons/logout-bold.svg?raw'
import menu from '../assets/icons/menu-light.svg?raw'
import menuBold from '../assets/icons/menu-bold.svg?raw'
import moon from '../assets/icons/moon-light.svg?raw'
import moonBold from '../assets/icons/moon-bold.svg?raw'
import pen from '../assets/icons/pen-light.svg?raw'
import penBold from '../assets/icons/pen-bold.svg?raw'
import settings from '../assets/icons/settings-light.svg?raw'
import settingsBold from '../assets/icons/settings-bold.svg?raw'
import square from '../assets/icons/square-light.svg?raw'
import squareBold from '../assets/icons/square-bold.svg?raw'
import sun from '../assets/icons/sun-light.svg?raw'
import sunBold from '../assets/icons/sun-bold.svg?raw'
import tag from '../assets/icons/tag-right.svg?raw'
import trash from '../assets/icons/trash_light.svg?raw'
import user from '../assets/icons/user-light.svg?raw'
import userBold from '../assets/icons/user-bold.svg?raw'
import xmark from '../assets/icons/xmark.svg?raw'

const icons = {
    calendar,
    calendarBold,
    checklist,
    checklistBold,
    home,
    homeBold,
    info,
    infoBold,
    logout,
    logoutBold,
    menu,
    menuBold,
    moon,
    moonBold,
    pen,
    penBold,
    settings,
    settingsBold,
    square,
    squareBold,
    sun,
    sunBold,
    tag,
    trash,
    user,
    userBold,
    xmark
} as const

type IconName = keyof typeof icons
export function iconGen(n: IconName, c: string): string {
    return icons[n].replace('<svg', `<svg class="${c}"`)
}