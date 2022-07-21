import React, { useState } from 'react';

const EmployeeChildComponent = (props) => {

    const [allData, setAllData] = useState([]);
    setAllData(props.data);
    console.log(allData);
    



  return (
    <>
    {allData.map((item) => {
      // <h3>{item.id} {item.name} {item.designation} {item.designation} </h3>
      <h3>{item}</h3>
      console.log(item)
    })}

    </>
  )
}

export default EmployeeChildComponent;