import React, { useState } from 'react';
import Salary from './Salary';

const StateConcept = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    id:"",
    name:"",
    location:"",
    salary:""
  })
  const changeEmployeeData = (e) => {
    setEmployeeDetails({...employeeDetails, [e.target.name]:[e.target.value]})
    console.log(employeeDetails)
  }
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();

  
  return (
    <div>
      <h5>{date}, {time}</h5>
      <h2>Welcome to Employee Functional Component... </h2>
      <p>
        <label >Employee ID : 
          <input type="text" name="id" value={employeeDetails.id} onChange={changeEmployeeData}></input></label>
      </p>
      <p>
        <label >Employee Name : 
          <input type="text" name="name" value={employeeDetails.name} onChange={changeEmployeeData}></input></label>
      </p>
      <p>
        <label >Employee Location : 
          <input type="text" name="location" value={employeeDetails.location} onChange={changeEmployeeData}></input></label>
      </p>
      <p>
        <label >Employee Salary : 
          <input type="text" name="salary" value={employeeDetails.salary} onChange={changeEmployeeData}></input></label>
      </p>
      
      <p>
        Employee ID is : <b>{employeeDetails.id}</b>, Employee Name is : <b>{employeeDetails.name}</b>, 
        Employee Location is : <b>{employeeDetails.location}</b> and Employeee Salary is : <b>{employeeDetails.salary}</b>
      </p>

      <Salary salary={employeeDetails.salary} onSalaryChange={changeEmployeeData} />
    </div>
  )
  
}

export default StateConcept;