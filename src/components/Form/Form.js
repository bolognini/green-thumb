import React, { useState } from 'react'
import { number } from 'prop-types'
import { sendUserInformation } from 'services'
import { FormWrapper, Title, Description, Formulary, Label, Input, SendButton } from './Form.style'

const Form = ({ plantId }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmitForm = e => {
    e.preventDefault()
    sendUserInformation({
      name,
      email,
      id: plantId
    })
  }

  const handleNameValue = value => {
    // validações de nome
    setName(value)
  }

  const handleEmailValue = value => {
    // validações de nome
    setEmail(value)
  }

  return (
    <FormWrapper>
      <Title>Nice pick!</Title>
      <Description>Tell us your name and e-mail and we will get in touch about your order ;)</Description>
      <Formulary onSubmit={handleSubmitForm}>
        <Label htmlFor='name'>Name</Label>
        <Input
          name='name'
          type='text'
          placeholder='Crazy Plant Person'
          onChange={({ target: { value } }) => handleNameValue(value)}
        />
        <Label htmlFor='email'>Email</Label>
        <Input
          name='email'
          type='text'
          placeholder='plantperson@email.com'
          onChange={({ target: { value } }) => handleEmailValue(value)}
        />
        <SendButton
          value='send'
          type='submit'
        />
      </Formulary>
    </FormWrapper>
  )
}

Form.propTypes = {
  plantId: number.isRequired
}

export default Form
