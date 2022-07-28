import React from 'react'
import './style.css'
import formField from './FormFields.js'

const App = () => {
  const [statusOK, setStatusOk] = React.useState(false)
  const dados = formField

  const [form, setForm] = React.useState(
    dados.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: ''
      }
    }, {})
  )

  function handleSubmit(event) {
    event.preventDefault()
    fetch(`https://ranekapi.origamid.dev/json/api/usuario`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then(response => {
      if (response.ok) {
        setStatusOk(true)
        setTimeout(() => {
          setStatusOk(false)
        }, 2000)
      }
    })
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({
      ...form,
      [id]: value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {dados.map(({ id, campo, type }) => {
          return (
            <div key={id}>
              <label htmlFor="nome">{campo}</label>
              <input
                type={type}
                name={id}
                id={id}
                onChange={handleChange}
                value={form[id]}
              />
            </div>
          )
        })}

        {statusOK && <p>Formulario enviado com sucesso</p>}
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
