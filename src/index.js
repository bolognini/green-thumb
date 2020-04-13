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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
