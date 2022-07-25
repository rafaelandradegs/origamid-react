import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0)

  function contar1() {
    setContar(contar + 1)
  }

  function contar2() {
    setContar(contar + 2)
  }

  return (
    <GlobalContext.Provider value={{ contar, contar1, contar2 }}>
      {children}
    </GlobalContext.Provider>
  )
}
