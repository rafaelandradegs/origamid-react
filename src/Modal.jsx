import React from 'react'

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <div>
        <p>Modal aberto</p>
        <button onClick={() => setModal(false)}>Fechar Modal</button>
      </div>
    )
  } else {
    return null
  }
}

export default Modal
