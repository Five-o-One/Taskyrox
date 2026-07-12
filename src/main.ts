import { Body } from './components/body'
import { init } from './events/init'
import registry from './events/REGISTRY'
import { appState } from './state/app_state'

import './styles/global.css'

init()
const app = document.getElementById('app') as HTMLElement
app.classList.add('bg-bg')
app.setAttribute('data-theme', appState.theme)
if (app) {
  app.innerHTML = Body()
}
registry()
