import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const breakpoint = {
  xsmall: '@media (min-width: 360px)',
  small: '@media (min-width: 768px)',
  medium: '@media (min-width: 992px)',
  large: '@media (min-width: 1280px)'
}


export const Styles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
  }
`

export const GlobalStyle = () => <Styles />
