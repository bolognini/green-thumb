import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  min-height: 100vh;
  background-color: var(--quiz-background);

  ${breakpoint.desktop} {
    display: grid;
    grid-template-columns: 200px 11fr;
    padding-bottom: 53px;
  }
`

export const NotFoundContent = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ForbiddenArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  h4 {
    font-size: 22px;
    line-height: 32px;
    color: var(--dark-green);
    margin: 0;

    ${breakpoint.xsmall} {
      font-size: 35px;
      line-height: 43px;
      margin-right: 16px;
    }
  }

  a {
    display: flex;
    justify-content: center;
  }

  svg {
    width: 50%;
    height: 50%;
    transition: 0.1s ease-out;
    cursor: pointer;

    ${breakpoint.xsmall} {
      width: 100%;
      height: 100%;
    }

    &:hover {
      path {
        fill: var(--coral);
        transition: 0.1s ease-in;
      }
    }
  }
`

export const Caption = styled.span`
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  padding: 0 24px;
`
