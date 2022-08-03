import React from 'react'
import Input from './Form/Input'

const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  return (
    <form>
      <Input
        id="nome"
        label="Nome"
        value={nome}
        setValue={setNome}
        required
        style={{ background: 'black', color: 'white' }}
      />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
