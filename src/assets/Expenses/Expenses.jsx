import React, { useState } from 'react';
import ExpensesFilter from './ExpenseFilter.jsx';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList'
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const onChangeHandler = (selectedYear) => {
    console.log('Valitud aasta: ',typeof selectedYear); 
    setFilteredYear(selectedYear);
  };

  
  const filteredExpenses = props.expenses.filter(expense => {
    return new Date(expense.date).getFullYear().toString() === filteredYear
  });
  

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeHandler} />
      <ExpensesList expenses={filteredExpenses} isLoading={props.isLoading}/> 
      </Card>
    </div>
  );
};

export default Expenses;
