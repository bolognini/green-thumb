import React, { useState } from 'react'
import { number } from 'prop-types'
import { sendUserInformation } from 'services'
import { ErrorSign } from 'assets'
import { REGEX } from 'constants/index'
import handleValue from './utils'
import {
  FormWrapper,
  Title,
  Description,
  ThankYouImage,
  Formulary,
  Label,
  Input,
  SendButton,
  ErrorArea
} from './Form.style'

const Form = ({ plantId }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const isInputValid = (inputValue, setErrorFn, regex) => {
    if (inputValue.match(regex)) {
      return true
    }
    setErrorFn(true)
    return false
  }

  const isFormValid = (nameValue, emailValue) => {
    const nameValidation = isInputValid(nameValue, setNameError, REGEX.NAME)
    const emailValidation = isInputValid(emailValue, setEmailError, REGEX.EMAIL)

    if (nameValidation && emailValidation) {
      return true
    }
    return false
  }

  const handleSubmitForm = e => {
    e.preventDefault()
    if (isFormValid(name, email)) {
      setEmailSent(true)
      sendUserInformation({
        name,
        email,
        id: plantId
      })
    }
  }

  const showErrorFeedback = value => (
    <ErrorArea>
      <ErrorSign />
      <span>Please provide a valid {value}</span>
    </ErrorArea>
  )

  return (
    <FormWrapper>
      <Title align={emailSent}>{emailSent ? 'Thank you!' : 'Nice pick!'}</Title>
      <Description align={emailSent}>{emailSent
        ? 'You will hear from us soon. Please check your e-mail!'
        : 'Tell us your name and e-mail and we will get in touch about your order ;)'}
      </Description>
      {emailSent
        ? <ThankYouImage />
        : (
          <Formulary onSubmit={handleSubmitForm}>
            <Label htmlFor='name' error={nameError}>Name</Label>
            <Input
              name='name'
              type='text'
              error={nameError}
              placeholder='Crazy Plant Person'
              onFocus={() => setNameError(false)}
              onChange={({ target: { value } }) => handleValue(value, setName)}
            />
            {nameError && showErrorFeedback('name')}
            <Label htmlFor='email' error={emailError}>Email</Label>
            <Input
              name='email'
              type='text'
              error={emailError}
              placeholder='plantperson@email.com'
              onFocus={() => setEmailError(false)}
              onChange={({ target: { value } }) => handleValue(value, setEmail)}
            />
            {emailError && showErrorFeedback('e-mail')}
            <SendButton
              value='send'
              type='submit'
            />
          </Formulary>
        )}
    </FormWrapper>
  )
}

Form.propTypes = {
  plantId: number
}

Form.defaultProps = {
  plantId: 0
}

export default Form
