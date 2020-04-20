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
      <h4>algo deu errado</h4>
    </ErrorContent>
    <Caption>por favor, clique no doguinho para voltar ao quiz.</Caption>
    <MobileCaption>por favor, toque no doguinho para voltar ao quiz.</MobileCaption>
  </ErrorWrapper>
)

export default ErrorComponent
