import React from 'react'

const ButtonModal = ({ modal, setModal }) => {
  if (!modal) return <button onClick={() => setModal(true)}>Abrir</button>
  else return null
}

export default ButtonModal
