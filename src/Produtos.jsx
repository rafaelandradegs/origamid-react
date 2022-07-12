import React from 'react'

const Produtos = ({ dados }) => {
  if (dados) {
    return (
      <div>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco}</p>
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
      </div>
    )
  } else {
    null
  }
}

export default Produtos
