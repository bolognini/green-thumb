import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from 'components/GlobalStyle'
import Routes from 'routes/routes'
import * as serviceWorker from './serviceWorker'

render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
