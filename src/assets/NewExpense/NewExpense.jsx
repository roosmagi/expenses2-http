import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
    const [editForm, setEditForm] = useState(false)  
    
    const startEditHandler = () => {
        setEditForm(true)
    } 

    const endEditHandler = () => {
        setEditForm(false)
    } 

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        } 
        props.onAddExpense(expenseData)
        setEditForm(false)
    } 

    return(
        <div className="new-expense">
        {!editForm && (
        <button onClick={startEditHandler}>Add New Expense</button>
      )}
      {editForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={endEditHandler}
        />
      )}
        </div>
    )
} 

export default NewExpense