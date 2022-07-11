import React from 'react'

const App = () => {
  const [contar, setContar] = React.useState(1)
  const [items, setItems] = React.useState(['item 1'])

  function handleClick() {
    setContar(contar + 1)
    setItems(items => [...items, 'item ' + (contar + 1)])
  }

  return (
    <h1>
      <button onClick={handleClick}>{contar}</button>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </h1>
  )
}

export default App
