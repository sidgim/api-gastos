import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListSpending from './components/ListSpending'
import NewExpenseIcon from './img/nuevo-gasto.svg'
import { generateId } from './helpers'
import Filters from './components/Filters'
function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('presupuesto') ?? 0)
  )
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expense, setExpense] = useState([])

  const [editExpense, setEditExpense] = useState({})

  const [filter, setFilter] = useState('')
  const [leakedExpenses, setLeakedExpenses] = useState([])

  useEffect(() => {
    if(filter) {
      const leakedExpense = expense.filter(e => e.category === filter)
      setLeakedExpenses(leakedExpense)
    }
  }, [filter])
  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      }, 300);
    }
  }, [editExpense])

  useEffect(() => {
    localStorage.setItem('presupuesto', budget ?? 0)
  }, [budget])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if (budgetLS > 0) {
      setIsValidBudget(true)
    }
  }, [])
  

  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})
    setTimeout(() => {
      setAnimateModal(true)
    }, 300);
  }
  const saveExpense = e => {
    if (e.id) {
      const expenseUpdate = expense.map(exp => exp.id === e.id
        ? e : exp)
      setExpense(expenseUpdate)
      setEditExpense({})
    } else {
      e.id = generateId();
      e.date = Date.now();
      setExpense([...expense, e]);
    }
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)

  }

  const deleteExpense = id => {
    const updateExpense = expense.filter(e => e.id !== id)
    setExpense(updateExpense)
  }
  return (
    <div className={modal ? 'fijar' : ''}><Header
      expense={expense}
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
      setExpense={setExpense}
    />
      {
        isValidBudget &&
        <>
          <main>
            <Filters
            filter={filter}
            setFilter={setFilter}/>
            <ListSpending
              expense={expense}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              leakedExpenses={leakedExpenses}
              filter={filter}
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={NewExpenseIcon} alt="icono nuevo gasto"
              onClick={handleNewExpense}
            />
          </div>
        </>
      }
      {
        modal && <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />
      }
    </div>
  )
}

export default App
