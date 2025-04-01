import React, { useState } from 'react';
import './BudgetTracking.css';

const BudgetTracking = () => {
  const [budget, setBudget] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleExpenseChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ description: '', amount: '' });
    }
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
  const remainingBudget = budget ? budget - totalExpenses : 0;

  return (
    <div className="budget-tracking-container">
      <h1>Budget Tracking</h1>
      <form className="budget-form">
        <label htmlFor="budget">Enter Your Budget:</label>
        <input
          type="number"
          id="budget"
          name="budget"
          value={budget}
          onChange={handleBudgetChange}
          placeholder="Total Budget"
        />
      </form>
      <form className="expense-form" onSubmit={addExpense}>
        <label htmlFor="description">Expense Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newExpense.description}
          onChange={handleExpenseChange}
          placeholder="Expense Description"
        />
        <label htmlFor="amount">Expense Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={newExpense.amount}
          onChange={handleExpenseChange}
          placeholder="Expense Amount"
        />
        <button type="submit">Add Expense</button>
      </form>
      <div className="expense-list">
        <h2>Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.description}: ${expense.amount}
            </li>
          ))}
        </ul>
      </div>
      <div className="budget-summary">
        <h2>Budget Summary</h2>
        <p>Total Budget: ${budget}</p>
        <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
        <p>Remaining Budget: ${remainingBudget.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BudgetTracking;