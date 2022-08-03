import React from 'react'

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </div>
  )
}

export default Input
