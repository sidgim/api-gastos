import BudgetControl from "./BudgetControl"
import NewBudget from "./NewBudget"
const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, expense, setExpense }) => {
  return (
    <header>
      <h1>Gastos Mensuales</h1>
      {isValidBudget ? (
        <BudgetControl
        expense = {expense}
        budget={budget}
        setExpense={setExpense}
        setBudget={setBudget}
        setIsValidBudget={setIsValidBudget}/>
      ) :
        (
          <NewBudget
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
          />
        )}

    </header>
  )
}

export default Header
