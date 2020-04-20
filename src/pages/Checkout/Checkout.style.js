import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  min-height: 100vh;
  background-color: var(--white);

  ${breakpoint.desktop} {
    display: grid;
    grid-template-columns: 200px 11fr;
    padding-bottom: 53px;
  }
`

export const PlantInformation = styled.div``

export const PlantName = styled.h2`
  font-weight: var(--bold-weight);
  color: var(--black);
  font-size: 35px;
  line-height: 42px;
`

export const Price = styled.span`
  color: var(--price-text);
  font-size: 24px;
  line-height: 29px;
`

export const PlantImage = styled.div`
  width: 244px;
  height: 244px;
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const FormWrapper = styled.div`
  background-color: var(--quiz-background);
  height: 100%;
`

export const Title = styled.h3``

export const Description = styled.span``

export const Form = styled.form``

export const Label = styled.label``

export const Input = styled.input``
