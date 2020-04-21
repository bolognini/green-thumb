import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  height: 50px;
  width: ${({ hasArrow }) => !hasArrow && '100%'};
  max-width: 215px;
  min-width: 146px;
  padding: 0 24px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  background-color: var(--dark-green);
  border: none;
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: ease-out 0.1s;

  &:focus {
    background-color: var(--dark-green);
    color: var(--white);
  }

  &:disabled {
    background-color: var(--placeholder-color);

    &:hover {
      background-color: var(--placeholder-color);
    }
  }

  ${({ secondary }) => secondary && `
    background-color: transparent;
    border: 1px solid var(--dark-green);
    color: var(--dark-green);

    svg {
      transform: rotate(180deg);
    }

    &:disabled {
      background-color: transparent;
      border-color: var(--placeholder-color);
      color: var(--placeholder-color);

      &:hover {
        background-color: transparent;
        border-color: var(--placeholder-color);
        color: var(--placeholder-color);

        svg {
          path {
            stroke: var(--placeholder-color);
          }
        }
      }

      svg {
        path {
          stroke: var(--placeholder-color);
        }
      }
    }
  `}

  &:hover {
    background-color: var(--green);
    ${({ secondary }) => secondary && `
      border-color: var(--green);
      background-color: transparent;
      color: var(--green);

      svg {
        path {
          stroke: var(--green);
        }
      }
    `}
    transition: ease-in 0.1s;
  }
`

export const ButtonContent = styled.div`
  display: ${({ hasArrow }) => hasArrow && 'grid'};
  grid-template-columns: 30px auto;
  grid-column-gap: 5px;
`
