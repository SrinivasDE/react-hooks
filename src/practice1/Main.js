import React, { useState } from 'react';
import Expences from './Expences/Expences';
import NewExpences from './NewExpences/NewExpences';


const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Books',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  

const Main = () => {
    const [expences, setExpences] = useState(DUMMY_EXPENSES);


    const saveExpencesHandler = e => {
        setExpences((prevExpences) => {
            return [e, ...prevExpences];
        })
      }
    
  return (
    <div>
        <NewExpences onSaveExpences = {saveExpencesHandler} />
        <Expences items={expences} />

    </div>
  )
}

export default Main; 