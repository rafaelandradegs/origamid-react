import React from 'react'

const App = () => {
  const [comentarios, setComentarios] = React.useState([])

  const [input, setInput] = React.useState('')
  const inputSelect = React.useRef()

  function handleChange({ target }) {
    setInput(target.value)
  }

  function handleClick() {
    if (input) setComentarios([...comentarios, input])
    setInput('')
    inputSelect.current.focus()
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        ref={inputSelect}
        onChange={handleChange}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            handleClick()
          }
        }}
      />
      <button onClick={handleClick}>Enviar</button>
      <ul>
        {comentarios.map(comentario => {
          return <li key={comentario}>{comentario}</li>
        })}
      </ul>
    </div>
  )
}

export default App
