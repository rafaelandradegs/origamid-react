import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const dados = React.useContext(GlobalContext)
  console.log(dados)
  return (
    <div>
      <h1> Numero: {dados.contar}</h1>
      <button onClick={dados.contar1}>Conte mais 1 </button>
      <button onClick={dados.contar2}>Conte mais 2 </button>
    </div>
  )
}

export default Produto
