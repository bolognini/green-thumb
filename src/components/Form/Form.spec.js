import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import handleValue from './utils'
import Form from './Form'

jest.mock('./utils')

const history = createMemoryHistory()
const mockedData = {
  plantId: 2
}

describe('Form', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render component without crashing', () => {
    const { getByPlaceholderText } = render(
      <Router history={history}>
        <Form {...mockedData} />
      </Router>
    )
    const nameInput = getByPlaceholderText('Crazy Plant Person')
    const emailInput = getByPlaceholderText('plantperson@email.com')

    expect(nameInput).toBeTruthy()
    expect(emailInput).toBeTruthy()
  })

  it('should call validate method when changing input value', () => {
    handleValue.mockImplementation(() => jest.fn())
    const { getByPlaceholderText } = render(
      <Router history={history}>
        <Form {...mockedData} />
      </Router>
    )
    const nameInput = getByPlaceholderText('Crazy Plant Person')
    const emailInput = getByPlaceholderText('plantperson@email.com')
    const button = screen.getByText('send')

    fireEvent.focus(nameInput)
    fireEvent.change(nameInput, { target: { value: 'Name Lastname' } })
    fireEvent.focus(emailInput)
    fireEvent.change(emailInput, { target: { value: 'email@email.com' } })
    fireEvent.click(button)

    expect(handleValue).toBeCalledTimes(2)
  })
})
