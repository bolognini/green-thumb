import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'
import { Logo as GreenThumbLogo } from 'assets'

export const Wrapper = styled.header``

export const Logo = styled(GreenThumbLogo)`
 max-width: 166px;

  ${breakpoint.desktop} {
    padding-top: 62px;
  }
`
