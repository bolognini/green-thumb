import React from 'react'
import { string, bool, func } from 'prop-types'
import { WhiteArrow, GreenArrow } from 'assets'
import { ButtonWrapper, ButtonContent } from './Button.style'

const Button = ({
  text,
  hasArrow,
  secondary,
  disabled,
  onClick
}) => (
  <ButtonWrapper
    disabled={disabled}
    secondary={secondary}
    hasArrow={hasArrow}
    onClick={onClick}
    type='button'
  >
    <ButtonContent hasArrow={hasArrow}>
      {hasArrow && (
        secondary ? <GreenArrow /> : <WhiteArrow />
      )}
      <span>{text}</span>
    </ButtonContent>
  </ButtonWrapper>
)

Button.propTypes = {
  text: string.isRequired,
  hasArrow: bool,
  secondary: bool,
  disabled: bool,
  onClick: func.isRequired
}

Button.defaultProps = {
  hasArrow: false,
  secondary: false,
  disabled: false
}

export default Button
