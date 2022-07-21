import React, { useState } from 'react';
import EmployeeChildComponent from './EmployeeChildComponent';

const employeeData = [
  {
    id : `FL${Math.floor(Math.random()*1000)+1}`,
    name : "srinivas",
    year : 2022,
    designation : "web developer"
  },
  {
    id : `FL${Math.floor(Math.random()*1000)+1}`,
    name : "rakesh",
    year : 2021,
    designation : "full stack developer"
  },
  {
    id : `FL${Math.floor(Math.random()*1000)+1}`,
    name : "anusha",
    year : 2019,
    designation : "digital marketing"
  },
  {
    id : `FL${Math.floor(Math.random()*1000)+1}`,
    name : "bhagya lakshmi",
    year : 2020,
    designation : "digital marketing"
  },
  {
    id : `FL${Math.floor(Math.random()*1000)+1}`,
    name : "ashwin",
    year : 2022,
    designation : "android developer"
  },
  {
    id : `FL${Math.floor(Math.random()*1000)+1}`,
    name : "vamshi",
    year : 2022,
    designation : "UI/UX designer"
  },
  {
    id : `FL${Math.floor(Math.random()*1000)+1}`,
    name : "koushik",
    year : 2022,
    designation : "UI/UX designer"
  },
]


const EmployeeData = () => {

  const [findData, setFindData] = useState("");

  const findDataHandler = (e) => {
    setFindData(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();

  }

  return (
    <>
        {/* ------------- inputs ---------------- */}


    {/* <form onSubmit={submitHandler}>
        <label>Employee Name </label><br></br>
        <input type="text" value={findData} onChange={findDataHandler}></input>
        <button type="submit"><img src="/images/search.png" alt="aa" /></button>
        
    </form> */}ssss

    {/* <EmployeeChildComponent data={employeeData} /> */}

    </>
  )
}

export default EmployeeData;