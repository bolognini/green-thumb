import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Button from './Button'

const mockedData = {
  text: 'next',
  hasArrow: true,
  secondary: false,
  disabled: false,
  onClick: jest.fn()
}

describe('Button component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render component without crashing', () => {
    const { getByText, rerender } = render(<Button {...mockedData} />)
    rerender(<Button {...{ ...mockedData, secondary: true }} />)
    const buttonText = getByText('next')

    expect(buttonText.textContent).toMatch(/next/)
  })
})
