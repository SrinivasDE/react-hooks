import React ,{useState}from 'react'

const DataDetails = (props) => {
    const [show, setShow] = useState(true);
    const decision=["ok","notOk","notSure"]

    const decisionFinal=(event)=>{
        setShow(false)
        const dataAccepted={
            name:props.name,
            Finaldecision:event
        }
        props.onClickDecision(dataAccepted)
    }

  
  return (
   
    <div>
        {show?(<>

       <h1>{props.name}</h1>

        {props.name=="rakesh"?<p>hyderabad</p>:props.name=="ramesh"?<p>karimnagar</p>:props.name=="srinivasa"?<p>vijaywada</p>:null}
      {decision.map((item,index)=>(
        <button onClick= {()=>decisionFinal(item)}>{index+1} {item}</button>)
       )}
       </>
        ):null}
        


        



    </div>
  )
}

export default DataDetails