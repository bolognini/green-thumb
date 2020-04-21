import React from 'react'
import { Link } from 'react-router-dom'
import { GreenPet } from 'assets'
import { ErrorWrapper, ErrorContent, Caption, MobileCaption } from './ErrorComponent.style'

const ErrorComponent = () => (
  <ErrorWrapper>
    <ErrorContent>
      <Link to='/quiz'>
        <GreenPet title='Voltar ao quiz' />
      </Link>
      <h4>something went wrong</h4>
    </ErrorContent>
    <Caption>please, click on puppy to get back to quiz.</Caption>
    <MobileCaption>please, tap on the puppy to get back to the quiz.</MobileCaption>
  </ErrorWrapper>
)

export default ErrorComponent
