import React from 'react'
import { BsXSquareFill } from "react-icons/bs";

export default function ExpensesList({ expenses, income, removeExpenseItem }) {

  const totalIncome = income ? income.reduce((sum, item) => sum + item.value, 0) : 0;

  return (
    <div className="col">
      <h2><b>EXPENSES</b></h2>


      {expenses.map((item, i) => (
        <div key={i}>
          <h3><b>{item.name}:</b> -{item.value} <div className="btn bg-danger rounded">{Math.round((100 * item.value) / totalIncome)}%</div>
            < BsXSquareFill onClick={() => removeExpenseItem(i)} />
          </h3>
        </div>
      ))}


    </div>
  )
}


