import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, cleanup } from '@testing-library/react'
import ErrorComponent from './ErrorComponent'

const mockedData = {
  text: 'please, click on puppy to get back to quiz.'
}

describe('ErrorComponent', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render component without crashing', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
      <Router history={history}>
        <ErrorComponent {...mockedData} />
      </Router>
    )
    const title = getByText('something went wrong')

    expect(title).toBeTruthy()
  })
})
