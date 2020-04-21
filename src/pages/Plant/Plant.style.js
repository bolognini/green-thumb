import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'

export const PlantWrapper = styled.div`
  display: grid;
  grid-template-rows: 62px 1fr;
  min-height: 100vh;
  place-items: center;
  background-color: var(--white);

  ${breakpoint.desktop} {
    grid-template-rows: none;
    place-items: unset;
    grid-template-columns: 200px 11fr;
  }
`

export const PlantContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;

  ${breakpoint.desktop} {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
`

export const PlantInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 28px;
`

export const PlantName = styled.h2`
  font-weight: var(--bold-weight);
  color: var(--black);
  font-size: 35px;
  line-height: 42px;
  margin-top: 62px;
`

export const Price = styled.span`
  color: var(--price-text);
  font-size: 24px;
  line-height: 29px;
`

export const PlantImage = styled.div`
  width: 244px;
  height: 244px;
  align-self: center;
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const ChosenPreferences = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 24px;
  padding: 19px 0 46px;
`

export const Preference = styled.div`
  display: flex;
  align-items: center;

  div {
    display: grid;
    grid-template-columns: 52px 1fr;
    align-items: center;
  }

  svg {
    width: 28px;
    height: 28px;
  }

  b {
    font-weight: var(--bold-weight);
  }
`

export const FormArea = styled.div`
  background-color: var(--quiz-background);
  height: 100%;

  ${breakpoint.desktop} {
    max-width: 380px;
    max-height: 512px;
    padding: 46px;
  }
`
