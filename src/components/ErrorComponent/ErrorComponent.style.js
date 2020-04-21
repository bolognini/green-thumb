import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'

export const ErrorWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ErrorContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  h4 {
    font-size: 22px;
    line-height: 32px;
    color: var(--dark-green);
    margin-right: 16px;

    ${breakpoint.xsmall} {
      font-size: 35px;
      line-height: 43px;
    }
  }

  svg {
    transition: 0.1s ease-out;
    cursor: pointer;

    &:hover {
      path {
        fill: var(--coral);
        transition: 0.1s ease-in;
      }
    }
  }
`

export const Caption = styled.span`
  display: none;
  font-size: 14px;
  line-height: 25px;
  text-align: center;

  ${breakpoint.desktop} {
    display: inline;
  }
`

export const MobileCaption = styled(Caption)`
  display: inline;

  ${breakpoint.desktop} {
    display: none;
  }
`
