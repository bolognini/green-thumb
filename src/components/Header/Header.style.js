import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'
import { Logo as GreenThumbLogo } from 'assets'

export const Wrapper = styled.header`
  position: relative;
  padding-top: 24px;

  ${breakpoint.desktop} {
    align-self: start;
    margin-top: 160px;
    padding-top: 0;
    position: sticky;
    top: 160px;

    &::before {
      content: '';
      position: absolute;
      top: 160px;
      left: 105px;
      display: block;
      width: 2px;
      height: 400px;
      background-color: var(--alpha-green);
    }
  }
`

export const Logo = styled(GreenThumbLogo)`
 max-width: 166px;

  ${breakpoint.desktop} {
    max-width: 208px;
    transform: rotate(-90deg);
  }
`
