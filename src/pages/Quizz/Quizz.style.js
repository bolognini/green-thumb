import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'

export const QuizzWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  min-height: 100vh;
  background-color: var(--quizz-background);

  ${breakpoint.desktop} {
    display: grid;
    grid-template-columns: 200px 11fr;
  }
`

export const QuizzContent = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 0 24px 24px 24px;

  ${breakpoint.desktop} {
    margin-left: -200px;
    max-width: 700px;
  }
`

export const ButtonContainer = styled.div`
  display: grid;
  grid-row-gap: 31px;

  ${breakpoint.desktop} {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: ${({ petPreference }) => (petPreference ? '0 102px' : '0 24px')};
  }
`
