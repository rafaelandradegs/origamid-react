import React from 'react'
import useFetch from './useFetch'
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')
  const { request, data, loading, error } = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        `https://ranekapi.origamid.dev/json/api/produto/`
      )
    }
    fetchData()
  }, [])

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  if (error) return <h1>{error}</h1>
  if (loading) return <h1>Carregando...</h1>
  if (data)
    return (
      <>
        <h1>Produto: {produto}</h1>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smarthphone</button>

        {data.map(produto => (
          <h1 key={produto.id}>{produto.nome}</h1>
        ))}
      </>
    )
  else return null
}

export default App
