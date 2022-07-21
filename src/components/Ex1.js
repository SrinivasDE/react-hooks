import React, { useState } from 'react';
import Ex1_1 from './Ex1.1';

const Ex1 = () => {
    const [selectedName, setSelectedName] = useState("");
    const [showResult, setShowResult] = useState(false);

    const childToParent = () => {
        setSelectedName("")

    }

    const onClicking= (e) =>{
        setSelectedName(e)
        setShowResult(true)
        
    }
    console.log("event",selectedName)
    const names = ["Srinivas", "Rakesh", "Anusha", "Bagya", "Ashwin"];

    
  return (
    <div>
        {names.map((item, index) => 
        <button className={item} onClick={(e)=>{onClicking(item)}}>{ item}</button>
        )}
        {showResult?<Ex1_1 name={selectedName} decision={childToParent}/> :null}
        
    </div>
  )
}

export default Ex1;