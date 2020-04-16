import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'
import Sun from 'assets/illustrations/sun.png'
import WateringCan from 'assets/illustrations/wateringcan.png'
import Dog from 'assets/illustrations/dog.png'

export const QuizzStepWrapper = styled.div`
  display: ${({ active }) => (active ? 'flex' : 'none')};
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
  place-items: center;
  padding: 31px 0 37px;

  span {
    font-size: 16px;
    line-height: 34px;
    padding-left: 20px;
  }
`

export const PreferenceItem = styled.li`
  display: flex;
  width: 100%;
  place-items: center;
  padding: 18px 20px;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0px 7px 14px 1px rgba(0,0,0,0.1);
  transition: 0.1s ease-in;
  cursor: pointer;

  ${({ selected, background }) => selected && `
    color: white;
    font-weight: 700;
    background-color: ${background === 'wateringCan' ? 'var(--green)' : 'var(--coral)'};

    svg {
      g, path {
        fill: var(--white);
      }
    }
  `}

  &:hover {
    color: var(--white);
    font-weight: 700;
    background-color: ${({ background }) => (background === 'wateringCan' ? 'var(--green)' : 'var(--coral)')};
    transition: 0.1s ease-out;

    svg {
      g, path {
        fill: var(--white);
      }
    }
  }
`
