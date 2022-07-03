import React from 'react'

export function App() {
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      {
        nome: 'Notebook',
        preco: 'R$ 2500'
      },
      {
        nome: 'Geladeira',
        preco: 'R$ 3000'
      },
      {
        nome: 'Smartphone',
        preco: 'R$ 1500'
      }
    ],
    ativa: true
  }
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      {
        nome: 'Notebook',
        preco: 'R$ 2500'
      },
      {
        nome: 'Geladeira',
        preco: 'R$ 3000'
      },
      {
        nome: 'Smartphone',
        preco: 'R$ 1500'
      },
      {
        nome: 'Guitarra',
        preco: 'R$ 3500'
      }
    ],
    ativa: false
  }

  const dados = mario

  //Minha resolucao

  // const styleAtiva = {
  //   color: dados.ativa ? 'green' : 'red'
  // }

  // function valorFinal() {
  //   const valores = dados.compras.map(valor =>
  //     Number(valor.preco.replace('R$ ', ''))
  //   )

  //   let valorTotal = 0

  //   valores.map(valor => {
  //     valorTotal += valor
  //   })
  //   return valorTotal
  // }

  const total = dados.compras
    .map(item => +item.preco.replace('R$ ', ''))
    .reduce((a, b) => a + b)

  console.log(total)

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situacao:{' '}
        <span
          style={{
            color: dados.ativa ? 'green' : 'red'
          }}
        >
          {dados.ativa ? 'Ativo' : 'Inativo'}
        </span>
      </p>
      <p>Total gasto: R${total}</p>
      {total > 10000 && <p>Voce esta gastando de mais</p>}
    </div>
  )
}
