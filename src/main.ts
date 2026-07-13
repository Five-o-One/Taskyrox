import { Body } from './components/body'
import { init } from './events/init'
import registry from './events/REGISTRY'
import { appState } from './state/app_state'

import './styles/global.css'

init()
const app = document.querySelector<HTMLElement>('[data-key="app"]')
if (app) {
  app.classList.add('bg-bg')
  app.setAttribute('data-theme', appState.theme)
  app.innerHTML = Body()
}
registry()
