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
  justify-self: start;

  ${breakpoint.desktop} {
    width: calc(100% - 208px);
  }

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
      font-size: 65px;
      line-height: 79px;
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
    width: 226px;
    height: 112px;
  }
`

export const ShowcaseList = styled.ul`
  display: flex;
  width: 100vw;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 20px;

  li {
    scroll-snap-align: start;
  }

  ${breakpoint.desktop} {
    width: 100%;
    display: grid;
    grid-template-columns: ${({ fallback }) => (fallback ? 'none' : 'repeat(3, 1fr)')};
    grid-row-gap: 53px;
  }
`

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateX(30%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`

export const ListCarousel = styled.div`
  min-height: 366px;
  overflow: auto;
  padding-bottom: 24px;
  animation: ${animation} 1s cubic-bezier(0.65, 0.05, 0.36, 1);
`
