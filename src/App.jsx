import React from 'react'

const App = () => {
  const [cores, setCores] = React.useState([])

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']

  function handleChange({ target }) {
    if (target.checked) setCores([...cores, target.value])
    else
      setCores(
        cores.filter(cor => {
          return cor !== target.value
        })
      )
  }

  return (
    <form>
      {coresArray.map(cor => {
        return (
          <label
            key={cor}
            style={{
              textTransform: 'capitalize',
              display: 'flex',
              marginBottom: '20px'
            }}
          >
            <input
              type="checkbox"
              value={cor}
              checked={cores.includes(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        )
      })}
    </form>
  )
}

export default App
