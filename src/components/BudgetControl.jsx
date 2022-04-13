import { useState, useEffect } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({ budget, setBudget, expense, setExpense, setIsValidBudget }) => {
    const [percent, setPercent] = useState(0)
    const [available, setavAilable] = useState(0)
    const [spent, setSpent] = useState(0)

useEffect((e) => {
   const totalSpent = expense.reduce( (total, spent) => spent.amount + total, 0) 
   const totalAvailable = budget - totalSpent

   const newPercent = (((budget - totalAvailable) / budget) * 100).toFixed(2)
   setPercent(newPercent)
   setavAilable(totalAvailable)
    setTimeout(() => {
        setSpent(totalSpent);
    }, 1500)
}, [expense])

    const formatQuantity = (amount) => {
        return amount.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP'
        })
    }
    const handleResetApp = () => {
        const result = confirm('¿Deseas reinciar presupuesto y gastos?');

        if(result) {
            setBudget(0)
            setExpense([])
            setIsValidBudget(false)
        } 
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                styles={buildStyles({
                    pathColor: percent > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: '#3B82F6'
                })}
                value={percent}
                text={`${percent}% Gastado`}>

                </CircularProgressbar>
            </div>
            <div className='contenido-presupuesto'>
                <button className='reset-app' type='button' onClick={handleResetApp}>
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto:</span> {formatQuantity(budget)}
                </p>
                <p className={`${available < 0 ? 'negativo' : 'positivo'}`}>
                    <span>Disponible:</span> {formatQuantity(available)}
                </p>
                <p>
                    <span>Gastado:</span> {formatQuantity(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl
