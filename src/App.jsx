import React from 'react'

const App = () => {
  const [data, setData] = React.useState([])
  const [curso, setCurso] = React.useState('')

  React.useEffect(() => {
    fetch('http://localhost:3010/cursos')
      .then(response => response.json())
      .then(json => setData(json))
  }, [data])

  function novoCurso() {
    fetch('http://localhost:3010/cursos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: curso })
    })
      .then(response => response.json())
      .then(json => console.log(json))
    console.log(curso)
  }

  return (
    <>
      <ul>
        {data.map(d => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <input type="text" onChange={({ target }) => setCurso(target.value)} />
      <button onClick={novoCurso}>Cadastrar Novo Curso</button>
    </>
  )
}

export default App
