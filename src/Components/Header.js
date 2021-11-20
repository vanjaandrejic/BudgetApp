import React from 'react'

export default function Header({ income, expenses }) {

  const totalIncome = income ? income.reduce((sum, item) => sum + item.value, 0) : 0;
  const totalExpense = expenses ? expenses.reduce((sum, item) => sum + item.value, 0) : 0;


  const date = () => {

    const d = new Date()
    const months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'Avgust', 'September', 'October', 'November', 'December'];

    const month = months[d.getMonth()]
    const year = d.getFullYear()

    return (
      <h2><b>Availible Budget in {month} / {year}:</b></h2>
    );
  }

  const saldo = () => {
    const total = totalIncome - totalExpense
    return total > 0 ? `+${total}` : `${total}`
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-space-between bg-warning pb-0 mb-0 w-100">
      <div className="d-flex flex-row">
        {date()}
      </div>
      <h1><b>{saldo()}</b></h1>
      <div>
        <h3>Total Income: <b>+{totalIncome}</b></h3>
        <h3>Total Expense: <b>-{totalExpense} </b> <div className="btn btn-danger rounded">{Math.round((100 * totalExpense) / totalIncome)}%</div></h3>
      </div>
    </div>
  )
}

