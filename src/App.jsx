import React from 'react'
import Button from './Button'
import Produtos from './Produtos'

const App = () => {
  const [dados, setDados] = React.useState(null)
  const [isLoad, setIsLoad] = React.useState(null)

  async function consumirApi(e) {
    setIsLoad(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
    )
    const json = await response.json()
    setDados(json)
    setIsLoad(false)
  }

  return (
    <div>
      <Button consumirApi={consumirApi}></Button>
      {isLoad ? <p>Carregando</p> : <Produtos dados={dados} />}
    </div>
  )
}

export default App
