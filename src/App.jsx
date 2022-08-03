import React from 'react'
import Input from './Form/Input'
import Select from './Form/Select'

const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')

  return (
    <form>
      <Select
        options={['smarthphone', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input
        id="nome"
        label="Nome"
        value={nome}
        setValue={setNome}
        required
        style={{
          background: 'black',
          color: 'white',
          marginTop: '20px',
          marginBottom: '20px'
        }}
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
