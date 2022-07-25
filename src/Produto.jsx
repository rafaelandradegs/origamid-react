import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const { dados, limparDados } = React.useContext(GlobalContext)
  console.log(dados)
  return (
    <div>
      <ul>
        {dados.map(dado => (
          <li key={dado.id}>{dado.nome}</li>
        ))}
      </ul>
      <button onClick={limparDados}>Apagar Lista</button>
    </div>
  )
}

export default Produto
