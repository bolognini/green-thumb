import styled, { keyframes } from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'
import Pick from 'assets/illustrations/pick.png'

export const ShowcaseWrapper = styled.div`
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

export const ShowcaseContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 40px;
    line-height: 49px;
    color: var(--black);
    font-weight: var(--bold-weight);
    text-align: center;
    padding: 0 54px;
    margin-bottom: 28px;

    ${breakpoint.desktop} {
      margin-bottom: 78px;
    }
  }
`

export const Illustration = styled.div`
  width: 146px;
  height: 72px;
  margin: 38px 0 29px 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Pick});

  ${breakpoint.desktop} {
    margin: 69px 0 48px 0;
  }
`

export const ShowcaseList = styled.ul`
  display: flex;
  width: 100vw;

  ${breakpoint.desktop} {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 53px;
  }
`

export const ListCarousel = styled.div`
  overflow: auto;
`
