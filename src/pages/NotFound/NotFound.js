import React from 'react'
import { Link } from 'react-router-dom'
import { CoralNoAnswer } from 'assets'
import Header from 'components/Header'
import { NotFoundWrapper, NotFoundContent, ForbiddenArea, Caption } from './NotFound.style'

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
      <Caption>essa página não existe. por favor, volte à página principal</Caption>
    </NotFoundContent>
  </NotFoundWrapper>
)

export default NotFound
