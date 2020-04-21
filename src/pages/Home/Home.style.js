import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'
import { Logo as GreenThumbLogo } from 'assets'
import HomeIllustrationMobile from 'assets/illustrations/illustration-home-mobile.png'
import HomeIllustrationDesktop from 'assets/illustrations/illustration-home.png'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;

  ${breakpoint.desktop} {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`

export const Logo = styled(GreenThumbLogo)`
 max-width: 166px;
 height: 85px;

  ${breakpoint.desktop} {
    padding-top: 62px;
  }
`

export const HomeContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 40vh;

  ${breakpoint.desktop} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    padding-left: 100px;
  }
`

export const Title = styled.h1`
  color: var(--black);
  font-size: var(--font-mobile-title);
  font-weight: var(--bold-weight);
  text-align: center;

  ${breakpoint.desktop} {
    text-align: left;
    font-size: 66px;
    line-height: 80px;
    padding: 96px 0 28px 0;
  }
`

export const BackgroundIllustration = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${HomeIllustrationMobile});
  background-size: contain;
  background-repeat: no-repeat;

  ${breakpoint.desktop} {
    height: 100%;
    background-image: url(${HomeIllustrationDesktop});
    background-position: left bottom;
  }
`
