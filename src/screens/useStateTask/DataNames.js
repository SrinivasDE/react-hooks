// import React,{useState} from 'react'
// import DataDetails from './DataDetails'

// const allNames=["srinivasa","rakesh","ramesh"]
// const DataNames = () => {
//   const [show, setShow] = useState(false);
//   const [selectedName, setSelectedName] = useState("");
//   const [ finalDecisionAccepted,   setFinalDecisionAccepted] = useState("");



//     const onClickName=(event)=>{
// console.log("event",event)
// setSelectedName(event)
// setShow(true)
//     }
//     const onClickDecisionFinal=(event)=>{
//         console.log("eventFinal",event)
//         setFinalDecisionAccepted(event)

//     }
   
//   return (
//     <>
 

//     {
// allNames.map((item,index)=>
//     (<button onClick= {()=>onClickName(item)} className={finalDecisionAccepted?.name==item ? finalDecisionAccepted?.Finaldecision=="ok"?:finalDecisionAccepted?.Finaldecision=="notOk"?:null}>{index+1} {item}</button>)

// )}

// {show?<DataDetails name={selectedName} onClickDecision={onClickDecisionFinal}/>:null}

    
    
    
    
    
//     </>
//   )
// }

// export default DataNames