import React from 'react'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'
import { GreenPet } from 'assets'
import { ErrorWrapper, ErrorContent, Caption, MobileCaption } from './ErrorComponent.style'

const ErrorComponent = ({ text }) => (
  <ErrorWrapper>
    <ErrorContent>
      <Link to='/quiz'>
        <GreenPet title='Voltar ao quiz' />
      </Link>
      <h4>something went wrong</h4>
    </ErrorContent>
    <Caption>{text}</Caption>
    <MobileCaption>{text.replace('click', 'tap')}</MobileCaption>
  </ErrorWrapper>
)

ErrorComponent.propTypes = {
  text: string.isRequired
}

export default ErrorComponent
