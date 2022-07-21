import React from 'react';
import Card from '../Card/Card';
import ExpenceDate from './ExpenceDate';

const ExpenceItem = (props) => {
  
  return (
    <Card>
        <ExpenceDate date={props.date} />
        <div>
            <h2>{props.title}</h2>
            <div>{props.amount}</div>
        </div>
    </Card>
  )
}

export default ExpenceItem; 