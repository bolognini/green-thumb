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
  grid-template-rows: 1fr auto;
  height: 100%;

  ${breakpoint.desktop} {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

export const PlantInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 28px;

  ${breakpoint.desktop} {
    justify-self: center;
  }
`

export const PlantName = styled.h2`
  font-weight: var(--bold-weight);
  color: var(--black);
  font-size: 35px;
  line-height: 42px;
  margin-top: 62px;

  ${breakpoint.desktop} {
    font-size: 50px;
    line-height: 55px;
    max-width: 300px;
    margin-top: 0;
  }
`

export const Price = styled.span`
  font-size: 24px;
  line-height: 29px;
  color: var(--price-text);
  padding-top: 12px;
`

export const PlantImage = styled.div`
  width: 244px;
  height: 244px;
  align-self: center;
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${breakpoint.desktop} {
    align-self: flex-start;
  }
`

export const ChosenPreferences = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 16px;
  padding: 19px 0 46px;

  ${breakpoint.desktop} {
    padding: 0;
  }
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
