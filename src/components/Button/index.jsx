import P from 'prop-types'
import React from "react"

export const Button = ({ children, onButtonClick, disabled = false }) => {
  return (
    <button disabled={disabled} style={{ fontSize: '30px' }} onClick={onButtonClick}>{children}</button>
  )
}

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
  disabled: P.bool,
}
