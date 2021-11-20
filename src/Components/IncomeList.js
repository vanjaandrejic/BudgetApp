import React from 'react'
import { BsXSquareFill } from "react-icons/bs";

export default function IncomeList({ income, removeIncomeItem }) {

  const removeItemIncome = (index) => {
    removeIncomeItem(index)
  }

  return (
    <div className="col">
      <h2><b>INCOME</b></h2>
      {income.map((item, i) => (
        <h3 key={i}><div className="user">
          <b>{item.name}:</b> +{item.value}  < BsXSquareFill onClick={() => removeItemIncome(i)} />
        </div></h3>
      ))}


    </div>
  )
}


