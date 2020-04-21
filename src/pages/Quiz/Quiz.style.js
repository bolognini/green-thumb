import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  min-height: calc(100vh - 160px);
  background-color: var(--quiz-background);

  ${breakpoint.desktop} {
    display: grid;
    grid-template-columns: 200px 11fr;
  }
`

export const QuizContent = styled.div`
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
