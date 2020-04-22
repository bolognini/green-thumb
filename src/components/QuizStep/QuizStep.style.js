import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'
import Sun from 'assets/illustrations/sun.png'
import WateringCan from 'assets/illustrations/wateringcan.png'
import Dog from 'assets/illustrations/dog.png'

export const QuizStepWrapper = styled.div`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  place-items: center;
`

export const Illustration = styled.div`
  width: 96px;
  height: 96px;
  margin-bottom: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
    width: 126px;
    height: 126px;
    margin-bottom: 30px;
  }
`

export const Description = styled.h2`
  font-size: 22px;
  line-height: 32px;
  text-align: center;

  b {
    font-weight: var(--bold-weight);
  }

  ${breakpoint.desktop} {
    font-size: 30px;
    line-height: 45px;
    padding: ${({ petPreference }) => (petPreference ? '0' : '0 92px')};
    margin-bottom: ${({ petPreference }) => (petPreference ? '20px' : '65px')};
  }
`

export const Caption = styled.span`
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  padding-top: 12px;

  b {
    font-weight: var(--bold-weight);
  }

  ${breakpoint.desktop} {
    margin-bottom: 40px;
  }
`

export const PreferencesList = styled.ul`
  display: grid;
  grid-template-rows: ${({ petPreference }) => (petPreference ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)')};
  grid-row-gap: 20px;
  place-items: center;
  padding: 31px 0 37px;
  width: 100%;

  span {
    font-size: 16px;
    line-height: 34px;
    padding-left: 20px;
  }

  ${breakpoint.desktop} {
    grid-template-rows: none;
    grid-template-columns: ${({ petPreference }) => (petPreference ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)')};
    grid-column-gap: ${({ petPreference }) => (petPreference ? '30px' : '20px')};
    padding: 0 0 37px 0;

    ${({ petPreference }) => petPreference && `
      li:nth-child(odd) {
        justify-self: end;
      }
      
      li:nth-child(even) {
        justify-self: start;
      }
    `}

    span {
      padding: 20px 0 0 0;
    }
  }
`

export const PreferenceItem = styled.li`
  display: flex;
  width: 100%;
  place-items: center;
  padding: 18px 20px;
  border-radius: 5px;
  background-color: var(--white);
  transition: 0.1s ease-in;
  cursor: pointer;

  svg {
    width: 42px;
    height: 42px;
  }

  ${breakpoint.desktop} {
    flex-direction: column;
    padding: 32px 0;
    max-width: 215px;

    svg {
      width: 70px;
      height: 70px;
    }
  }

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
      g,
      path {
        fill: var(--white);
      }
    }
  }
`
