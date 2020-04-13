import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'

export const QuizzWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  min-height: 100vh;
  padding: 24px;
  background-color: var(--quizz-background);

  ${breakpoint.desktop} {
  }
`
