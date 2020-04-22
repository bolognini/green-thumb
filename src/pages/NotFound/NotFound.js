import React from 'react'
import { Link } from 'react-router-dom'
import { CoralNoAnswer } from 'assets'
import Header from 'components/Header'
import { NotFoundWrapper, NotFoundContent, ForbiddenArea, Caption, MobileCaption } from './NotFound.style'

const NotFound = () => (
  <NotFoundWrapper>
    <Header />
    <NotFoundContent>
      <ForbiddenArea>
        <Link to='/'>
          <CoralNoAnswer title='Voltar à página inicial' />
        </Link>
        <h4>404</h4>
      </ForbiddenArea>
      <Caption>This page doesn&apos;t exist. Please, <Link to='/'>click here</Link> to return to homepage</Caption>
      <MobileCaption>This page doesn&apos;t exist. Please, <Link to='/'>tap here</Link> to return to homepage</MobileCaption>
    </NotFoundContent>
  </NotFoundWrapper>
)

export default NotFound
