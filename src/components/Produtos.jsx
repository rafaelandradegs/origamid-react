import React from 'react'
import Produto from './Produto'
import Titulos from './Titulos'

const Produtos = () => {
  const itemsLoja = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] }
  ]
  return (
    <>
      <Titulos titulo="Produtos" />
      {itemsLoja.map(item => (
        <section>
          <Produto key={item.nome} {...item} />
        </section>
      ))}
    </>
  )
}

export default Produtos
