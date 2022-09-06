import React from 'react'
import { useParams, Routes, Route, Link } from 'react-router-dom'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoCustomizado from './ProdutoCustomizado'
import ProdutoDescricao from './ProdutoDescricao'

const Produto = () => {
  const params = useParams()

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <Link to="">Descricao</Link>
        <Link to="avaliacao">Avalicao</Link>
        <Link to="customizado">Customizado</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  )
}

export default Produto
