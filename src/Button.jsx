import React from 'react'
import './style.css'

const Button = ({ consumirApi }) => {
  return (
    <div className="divisao">
      <button onClick={consumirApi}>Tablet</button>
      <button onClick={consumirApi}>Notebook</button>
      <button onClick={consumirApi}>Smartphone</button>
    </div>
  )
}

export default Button
