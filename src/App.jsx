import React from 'react'
import Input from './Form/Input'
import Radio from './Form/Radio'
import Select from './Form/Select'

const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [frutas, setFrutas] = React.useState('')

  return (
    <form style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
      <h2>Cores</h2>
      <Radio
        options={['azul', 'vermelho']}
        value={frutas}
        setValue={setFrutas}
      />
      <h2>Frutas</h2>
      <Radio
        options={['Limao', 'Laranja', 'Uva']}
        value={cor}
        setValue={setCor}
      />
      <br />
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
