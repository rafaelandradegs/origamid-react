import React from 'react'
import Home from './components/Home'
import Produtos from './components/Produtos'
import Rotas from './components/Rotas'

const App = () => {
  const { pathname } = window.location
  console.log(pathname)
  let Pagina

  if (pathname === '/') {
    Pagina = Home
  } else {
    Pagina = Produtos
  }

  return (
    <>
      <Rotas />
      <Pagina />
    </>
  )
}

export default App
