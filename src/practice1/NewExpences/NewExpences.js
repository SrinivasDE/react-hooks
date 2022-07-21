import React from 'react';
import ExpencesForm from './ExpencesForm';

const NewExpences = (props) => {
    const addExpenceHandler = (e) => {
        const expences = {
            ...e,
            id:`E${Math.floor(Math.random()*1000)+1}`
        }
        props.onSaveExpences(expences)
    }
  return (
    <div>
        <ExpencesForm onAddExpences = {addExpenceHandler} /><br></br>
    </div>
  )
}

export default NewExpences; 