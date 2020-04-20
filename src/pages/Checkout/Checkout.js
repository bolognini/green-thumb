import React from 'react'
import { useHistory } from 'react-router-dom'
import { sendUserInformation } from 'services'
import Header from 'components/Header'
import {
  CheckoutWrapper,
  PlantInformation,
  PlantName,
  Price,
  PlantImage,
  FormWrapper,
  Title,
  Description,
  Form,
  Label,
  Input
} from './Checkout.style'

const Checkout = () => {
  const history = useHistory()
  const { location: { state } } = history
  const {
    id,
    name,
    price,
    sun,
    water,
    url,
    toxicity
  } = state

  return (
    <CheckoutWrapper>
      <Header />
      <PlantInformation>
        <PlantName>{name}</PlantName>
        <Price>${price}</Price>
        <PlantImage url={url} />
      </PlantInformation>
      <FormWrapper>
        <Title>Nice pick!</Title>
        <Description>Tell us your name and e-mail and we will get in touch about your order ;)</Description>
        <Form id='my-form'>
          <Label for='name'>Name: </Label>
          <Input name='name' type='text' />
          <Label for='email'>Email: </Label>
          <Input name='email' type='text' />
          {/* <input
            type='submit'
            value='save'
            onClick={sendUserInformation({
              name: 'Raphael Fabeni',
              email: 'rfabeni@redventures.com',
              id: '1'
            })}
          /> */}
        </Form>
      </FormWrapper>
    </CheckoutWrapper>
  )
}

export default Checkout
