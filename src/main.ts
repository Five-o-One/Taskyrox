import { Body } from './components/body'
import { appInitialization_event } from './events/init'
import eventRegistry_event from './events/REGISTRY'
import { appState } from './state/app_state'

import './styles/global.css'

appInitialization_event()
const app = document.querySelector<HTMLElement>('[data-key="app"]')
if (app) {
  app.classList.add('bg-bg')
  app.setAttribute('data-theme', appState.theme)
  app.innerHTML = Body()
}
eventRegistry_event()
