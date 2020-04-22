import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Card from './Card'

const mockedData = {
  id: 4,
  name: 'Succulent Bowl',
  price: 30,
  sun: 'high',
  water: 'rarely',
  url: 'https://front-static-recruitment.s3.amazonaws.com/succulent-bowl.jpg',
  toxicity: false
}

describe('Card component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render component without crashing', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
      <Router history={history}>
        <Card {...mockedData} />
      </Router>
    )
    const plantName = getByText('Succulent Bowl')
    const priceText = getByText('$30')
    const button = getByText('buy now')

    expect(plantName).toBeTruthy()
    expect(priceText).toBeTruthy()
    expect(button).toBeTruthy()
  })

  it('should call history.push method when clicking on buy button', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
      <Router history={history}>
        <Card {...{ ...mockedData, sun: 'low', water: 'regularly', toxicity: true }} />
      </Router>
    )
    history.push = jest.fn()
    const button = getByText('buy now')
    fireEvent.click(button)

    expect(history.push).toBeCalled()
  })
})
