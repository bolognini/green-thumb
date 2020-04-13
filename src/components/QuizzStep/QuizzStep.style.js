import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'
import Sun from 'assets/illustrations/sun.png'
import WateringCan from 'assets/illustrations/wateringcan.png'
import Dog from 'assets/illustrations/dog.png'

export const QuizzStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`

export const Illustration = styled.div`
  width: 96px;
  height: 96px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ background }) => {
    if (background === 'sun') {
      return `url(${Sun})`
    }
    if (background === 'wateringCan') {
      return `url(${WateringCan})`
    }
    return `url(${Dog})`
  }};

  ${breakpoint.desktop} {
  }
`

export const Description = styled.h2`
  font-size: 22px;
  line-height: 32px;
  text-align: center;

  b {
    font-weight: var(--bold-weight);
  }
`

export const PreferencesList = styled.ul`
  display: grid;
  grid-template-rows: ${({ petPreference }) => (petPreference ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)')};
  grid-row-gap: 20px;

  li {
    display: flex;
    place-items: center;
    padding: 18px 20px;
    border-radius: 5px;
    background-color: var(--white);
  }

  span {
    font-size: 16px;
    line-height: 34px;
    padding-left: 20px;
  }
`
