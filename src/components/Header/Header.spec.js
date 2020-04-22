import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, cleanup } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render component without crashing', () => {
    const history = createMemoryHistory()
    const { getByTitle } = render(
      <Router history={history}>
        <Header />
      </Router>
    )
    const title = getByTitle('Green Thumb Logo')

    expect(title).toBeTruthy()
  })
})
