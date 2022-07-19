import React, { useEffect } from 'react'

const App = () => {
  const [listaProduto, setListaProduto] = React.useState(null)

  async function handleClick(e) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
    )
    const data = await response.json()
    setListaProduto(data)
  }

  useEffect(() => {
    if (localStorage.getItem('produto') !== null) {
      setListaProduto(JSON.parse(localStorage.getItem('produto')))
    }
  }, [])

  useEffect(
    () => localStorage.setItem('produto', JSON.stringify(listaProduto)),
    [listaProduto]
  )

  return (
    <div>
      {listaProduto && (
        <div>
          <h1>{listaProduto.nome}</h1>
          <p>R$ {listaProduto.preco}</p>
        </div>
      )}
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </div>
  )
}

export default App
