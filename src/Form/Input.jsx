import React from 'react'

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        name={id}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </div>
  )
}

export default Input
