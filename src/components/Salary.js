import React from 'react';

const Salary = ({ salary, onSalaryChange}) => {
  return (
    <div>
        <h2>Welcome to salary component...</h2>
        <p>
        <label >Employee Salary : 
          <input type="text" name="salary" value={salary} onChange={onSalaryChange}></input></label>
      </p>
    </div>
  )
}

export default Salary;


