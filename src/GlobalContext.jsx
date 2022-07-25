import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState([])

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then(response => response.json())
      .then(json => setDados(json))
  }, [])

  function limparDados() {
    setDados([])
  }

  return (
    <GlobalContext.Provider value={{ dados, setDados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  )
}
