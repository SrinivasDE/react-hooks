import React, { useState } from 'react';

const ExpencesForm = (props) => {
    const [enteredTitle, setEnteredTitle] =  useState("");
    const [enteredAmount, setEnteredAmount] =  useState("");
    const [enteredDate, setEnteredDate] =  useState("");


    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }


    const submitHandler = (e) => {
        e.preventDefault();
        const expences = {
            title : enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate),
        }

        props.onAddExpences(expences);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

    } 

  return (
    <form onSubmit={submitHandler}>
        <div>
            <div>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"  value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div>
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div>
            <button type="submit">Add Data</button>
        </div>

    </form>
  )
}

export default ExpencesForm;