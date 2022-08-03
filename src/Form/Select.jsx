import React from 'react'

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option value="" disabled></option>
      {options.map(option => {
        return <option key={option}>{option}</option>
      })}
    </select>
  )
}

export default Select
