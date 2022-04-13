import { useState, useEffect } from 'react'
import CloseBTN from '../img/cerrar.svg'
import Message from "./Message"

const Modal = ({ setModal, animateModal, setAnimateModal, 
  saveExpense, editExpense, setEditExpense }) => {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {
      setName(editExpense.name)
      setAmount(editExpense.amount)
      setCategory(editExpense.category)
      setId(editExpense.id)
      setDate(editExpense.date)
    }
  },[])

  const hideModal = () => {
    setAnimateModal(false)
    setEditExpense({})
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
  const HandleSubmit = e => {
    e.preventDefault()
    if ([name, amount, category].includes('')) {
      setMessage('Todos los campos son obligatorios');
      return;
    }
    setMessage('')
    saveExpense({name, amount, category, id, date})
    hideModal()
  }
  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CloseBTN} alt="cerrar modal"
          onClick={hideModal}
        />
      </div>

      <form onSubmit={HandleSubmit}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <legend>{editExpense.name ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {message && <Message type="error">{message}</Message>}
        <div className='campo'>
          <label htmlFor="name">Nombre Gasto </label>
          <input id='name' type="text"
            placeholder='Añade el nombre del gasto'
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>

        <div className='campo'>
          <label htmlFor="amount">Cantidad </label>
          <input id='amount' type="number"
            placeholder='Añade la cantidad del gasto ej. 300'
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))} />
        </div>
        <div className='campo'>
          <label htmlFor="category">Categoria </label>
          <select name="category" id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="">-- Seleccione --</option>
            <option value="saving">Ahorro</option>
            <option value="eat">Comida</option>
            <option value="home">Hogar</option>
            <option value="expenses">Gastos varios</option>
            <option value="leisure">Ocio</option>
            <option value="health">Salud</option>
            <option value="subscriptions">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value={editExpense.name ? "EDITAR GASTO" : "AÑADIR GASTO"} />
      </form>
    </div>
  )
}

export default Modal
