import styled from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'
import { ButtonWrapper } from 'components/Button/Button.style'

export const FormWrapper = styled.div`
  padding: 26px 14px 32px;

  ${breakpoint.desktop} {
    padding: 0%;
  }
`

export const Title = styled.h3`
  font-size: 30px;
  font-weight: var(--bold-weight);
  line-height: 37px;
  margin-bottom: 17px;
  color: var(--black);
`

export const Description = styled.span`
  font-size: 16px;
  line-height: 27px;
`

export const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 14px 0 14px;
`

export const Label = styled.label`
  font-size: 16px;
  font-weight: var(--bold-weight);
  line-height: 27px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  padding-left: 24px;
  margin-bottom: 22px;
  background-color: var(--white);
  border-radius: 19px;
  outline: none;

  &::placeholder {
    color: var(--placeholder-color);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 27px;
  }
`

export const SendButton = styled(ButtonWrapper).attrs({
  as: 'input'
})`
  align-self: center;

  ${breakpoint.desktop} {
    max-width: 138px;
    align-self: flex-end;
  }
`
