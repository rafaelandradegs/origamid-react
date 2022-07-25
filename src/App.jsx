import React from 'react'
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  return (
    <>
      <h1>Produto: {produto}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smarthphone</button>
    </>
  )
}

export default App
