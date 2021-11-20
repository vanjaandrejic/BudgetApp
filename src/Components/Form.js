import React, { useState } from 'react';

export default function Form({ setItemProps }) {

  const [type, setType] = useState('income');
  const [desc, setDesc] = useState('');
  const [value, setValue] = useState('');

  const submitForm = (e) => {
    const item = { name: desc, value: value }
    setItemProps(type, item)
    e.preventDefault();
  }

  const typeChange = (e) => {
    setType(e.target.value);
  }

  const descChange = (e) => {
    const desc = e.target.value

    if (desc.length > 50) {
      alert('Description must have least at 50 characters')
    } else {
      setDesc(desc);
    }

  }

  const valueChange = (e) => {
    setValue(Number(e.target.value));
  }


  return (
    <div className="w-100  bg-dark">
      <form className="d-flex align-items-center form-group" onSubmit={submitForm}>
        <select onChange={typeChange} className="w-auto form-control m-2">
          <option value="income" defaultValue>+</option>
          <option value="expenses">-</option>
        </select>
        <input type="text" className="w-100 form-control m-2" onChange={descChange} placeholder="Add description..." value={desc}></input>
        <input onChange={valueChange} type="number" className="w-25 form-control m-2" placeholder="Value" value={value}></input>
        <button type="submit" className="btn btn-success m-1">Add</button>
      </form>
    </div>
  )
}


