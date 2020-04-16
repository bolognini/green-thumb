import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'

export const QuizzWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--quizz-background);

  ${breakpoint.desktop} {
  }
`

export const QuizzContent = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 24px;
`

export const ButtonContainer = styled.div`
  display: grid;
  grid-row-gap: 31px;
`
