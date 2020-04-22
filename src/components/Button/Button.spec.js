import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Button from './Button'

const mockedData = {
  text: 'next',
  hasArrow: false,
  secondary: false,
  disabled: false,
  onClick: jest.fn()
}

describe('Button component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render component without crashing', () => {
    const { getByText } = render(<Button {...mockedData} />)
    const buttonText = getByText('next')

    expect(buttonText).toBeTruthy()
  })
})
