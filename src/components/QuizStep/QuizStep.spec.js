import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { QUIZ_PREFERENCES } from 'constants/index'
import QuizStep from './QuizStep'
import handleSelected from './utils'

jest.mock('./utils')

const history = createMemoryHistory()
const mockedData = {
  step: QUIZ_PREFERENCES[2],
  active: true,
  setSelectedPreference: jest.fn(),
  setDisabled: jest.fn()
}

describe('QuizStep', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render component without crashing', () => {
    const { getByText } = render(
      <Router history={history}>
        <QuizStep {...mockedData} />
      </Router>
    )
    const firstOption = getByText('Yes')
    const secondOption = getByText(`No/They don't care`)

    expect(firstOption).toBeTruthy()
    expect(secondOption).toBeTruthy()
  })

  it('should render component without crashing', () => {
    handleSelected.mockImplementation(() => jest.fn())

    const { container } = render(
      <Router history={history}>
        <QuizStep {...mockedData} />
      </Router>
    )
    const button = container.querySelector('li')
    fireEvent.click(button)

    expect(handleSelected).toHaveBeenCalled()
  })
})
