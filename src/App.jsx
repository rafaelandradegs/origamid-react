import React from 'react'

export function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Smarthphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', ' #252a34', '#fc3766']
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', ' #d4394b', '#f37c59']
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', ' #47c1c8', '#f95786']
    }
  ]

  const dados = produtos.filter(({ preco }) => +preco.replace('R$ ', '') > 1500)
  console.log(dados)

  return (
    <div>
      {dados.map(({ id, nome, preco, cores }) => {
        return (
          <div key={id}>
            <h1>{nome}</h1>
            <p>Preco: {preco}</p>
            <ul>
              {cores.map(cor => (
                <li
                  style={{ background: cor, color: 'white', margin: 5 }}
                  key={cor}
                >
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
