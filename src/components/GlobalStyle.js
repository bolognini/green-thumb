import React from 'react'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

export const breakpoint = {
  xsmall: '@media (min-width: 360px)',
  small: '@media (min-width: 768px)',
  desktop: '@media (min-width: 1280px)'
}


export const Styles = createGlobalStyle`
  ${reset}
  :root {
    --green: #7BAF9E;
    --dark-green: #15573F;
    --black: #0C261C;
    --coral: #FD9872;
    --red: #F71D1D;
    --grey: #6E6E6E;
    --quiz-background: #F6F6F6;
    --form-background: #979797;
    --placeholder-color: #D0D0D0;
    --price-text: #D6D6D6;
    --white: #FFF;

    --font-mobile-title: 35px;
    --font-mobile-subtitle: 22px;
    --font-mobile-caption: 14px;
    --font-mobile-button: 16px;

    --line-height-mobile-title: 43px;
    --line-height-mobile-subtitle: 32px;
    --line-height-mobile-caption: 25px;
    --line-height-mobile-button: 20px;

    --light-weight: 300;
    --bold-weight: 700;

    font-family: 'Montserrat', sans-serif;
    font-weight: var(--light-weight);
  }

  * {
    box-sizing: border-box;
  }
`

export const GlobalStyle = () => <Styles />
