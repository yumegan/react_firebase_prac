import React from 'react'

const Button = ({onClick}) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>Button</button>
  )
}

export default Button