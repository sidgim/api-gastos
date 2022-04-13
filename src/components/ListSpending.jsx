import React from 'react'
import Spending from './Spending'
const ListSpending = ({ expense, setEditExpense, deleteExpense, leakedExpenses, filter }) => {
  return (
    <div className='listado-gastos contenedor'>
      {
        filter ?
          (<>
            <h2>{leakedExpenses.length ? 'Gastos' : 'No tiene Gastos aún'}</h2>
          {leakedExpenses.map(e => <Spending
            key={e.id}
            expense={e}
            setEditExpense={setEditExpense}
            deleteExpense={deleteExpense}
          />)}</>)
          : (
            <>
             <h2>{expense.length ? 'Gastos' : 'No tiene Gastos aún'}</h2>
           { expense.map(e => <Spending
            key={e.id}
            expense={e}
            setEditExpense={setEditExpense}
            deleteExpense={deleteExpense}
          />)}
            </>
            )
      }

    </div>
  )
}

export default ListSpending
