import React from 'react'
import Input from './Form/Input'

const App = () => {
  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState(null)

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preecha um CEP valido')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleChange({ target }) {
    if (error) {
      validateCep(target.value)
    }
    setCep(target.value)
  }

  function handleBlur({ target }) {
    console.log(validateCep(target.value))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (validateCep(cep)) {
      console.log('Enviou')
    } else {
      console.log('Nao enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  )
}

export default App
