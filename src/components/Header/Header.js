import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Logo } from './Header.style'

const Header = () => (
  <Wrapper>
    <Link to='/'>
      <Logo title='Green Thumb Logo' />
    </Link>
  </Wrapper>
)

export default Header
