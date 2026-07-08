import { Body } from './components/body'
import { themeToggleEvent } from './events/theme_event'

import './styles/global.css'

const app = document.getElementById('app') as HTMLElement
if (app) {
  app.innerHTML = Body()
}
themeToggleEvent()
