import { Body } from './components/body'
import { themeToggleEvent } from './events/theme_event'
import { appState } from './state/app_state'

import './styles/global.css'
import type { theme } from './types/app_state'

const app = document.getElementById('app') as HTMLElement
app.classList.add('bg-bg')
appState.theme = (localStorage.getItem('theme') as theme) || 'light'
app.setAttribute('data-theme', appState.theme)
if (app) {
  app.innerHTML = Body()
}
themeToggleEvent()
