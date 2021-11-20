import React, { useState, useEffect } from 'react';
import Form from "./Components/Form"
import Header from "./Components/Header"
import IncomeList from "./Components/IncomeList"
import ExpensesList from "./Components/ExpensesList"


export default function App() {

  const [income, setIncome] = useState([]);
  const [expenses, setExpense] = useState([]);


  useEffect(() => {

    const incomeLS = localStorage.getItem('income');

    if (incomeLS) {
      const initialValue = JSON.parse(incomeLS);
      setIncome(initialValue);
    }


    const expensesLS = localStorage.getItem('expenses');

    if (expensesLS) {
      const initialValue = JSON.parse(expensesLS);
      setExpense(initialValue);
    }

  }, [])



  const setItem = (type, item) => {
    if (type === 'income') {

      const newArray = [...income, item]
      setIncome(newArray)
      localStorage.setItem(type, JSON.stringify(newArray))
    } else {
      const newArray = [...expenses, item]
      setExpense([...expenses, item])
      localStorage.setItem(type, JSON.stringify(newArray))

    }
  }

  const removeIncomeItem = (index) => {
    const newArray = income.filter((item, i) => i !== index)
    setIncome(newArray)
    localStorage.setItem('income', JSON.stringify(newArray))
  }

  const removeExpenseItem = (index) => {
    const newArray = expenses.filter((item, i) => i !== index)
    setExpense(newArray)
    localStorage.setItem('expenses', JSON.stringify(newArray))
  }

  return (
    <>
      <Header income={income} expenses={expenses} />
      <Form setItemProps={setItem} />
      <div className="container">
        <div className="row">
          <IncomeList income={income} removeIncomeItem={removeIncomeItem} />
          <ExpensesList expenses={expenses} income={income} removeExpenseItem={removeExpenseItem} />
        </div>
      </div>
    </>
  )
}