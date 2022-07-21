import React from 'react';

const Ex1_1 = (props) => {
    console.log("props",props.name)

    const okHandler = () => {

    }
    
  return (
    <div>
        {props.name?<h4>Hello, {props.name}</h4>:null}
   
        { props.name == "Rakesh" ? <p className='rakesh'>Noida</p> 
        :  props.name == "Srinivas" ? <p>Bangulore</p> 
        :  props.name == "Bagya" ? <p>Mumbai</p> 
        :  props.name == "Ashwin" ? <p>Lahore</p> 
        :  props.name == "Anusha" ? <p>Hyderbad</p>
        : null
    }

    <button onClick={props.decision}>OK</button>
    <button>Not OK</button>
    <button>Not Sure</button>

        
    </div>
  )
}

export default Ex1_1;