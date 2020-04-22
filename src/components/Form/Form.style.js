import styled, { keyframes } from 'styled-components'
import { breakpoint } from 'components/GlobalStyle'
import { ButtonWrapper } from 'components/Button/Button.style'
import Envelop from 'assets/illustrations/envelop.png'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 14px 40px 14px;
  height: 100%;

  ${breakpoint.desktop} {
    padding: 0;
  }
`

export const Title = styled.h3`
  font-size: 30px;
  font-weight: var(--bold-weight);
  color: var(--black);
  line-height: 37px;
  padding: 0 12px;
  margin-bottom: 17px;
  text-align: ${({ align }) => (align ? 'center' : 'left')};

  ${breakpoint.desktop} {
    font-size: 40px;
    line-height: 37px;
  }
`

export const Description = styled.span`
  font-size: 16px;
  line-height: 27px;
  padding: 0 12px;
  text-align: ${({ align }) => (align ? 'center' : 'left')};
`

const envelopAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`

export const ThankYouImage = styled.div`
  max-width: 204px;
  max-height: 238px;
  width: 100%;
  height: 240px;
  align-self: center;
  margin-top: 32px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${Envelop});
  animation: ${envelopAnimation} 0.8s cubic-bezier(0.65, 0.05, 0.36, 1);

  ${breakpoint.desktop} {
    height: 60%;
  }
`

export const Formulary = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 14px 0 14px;

  input {
    appearance: none;
  }
`

export const Label = styled.label`
  font-size: 16px;
  font-weight: var(--bold-weight);
  line-height: 27px;
  color: ${({ error }) => (error ? 'var(--red)' : 'var(--grey)')};
  padding-left: 12px;
`

export const ErrorArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;

  span {
    font-size: 12px;
    line-height: 27px;
    color: var(--red);
    margin-left: 6px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: ${({ error }) => (error ? '1px solid var(--red)' : 'none')};
  font-family: 'Montserrat', sans-serif;
  padding-left: 24px;
  margin-bottom: ${({ error }) => (error ? '6px' : '22px')};
  background-color: var(--white);
  border-radius: 19px;

  &::placeholder {
    color: var(--placeholder-color);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
`

export const SendButton = styled(ButtonWrapper).attrs({
  as: 'input'
})`
  align-self: center;
  max-width: none;

  ${breakpoint.desktop} {
    max-width: 138px;
    align-self: flex-end;
  }
`
