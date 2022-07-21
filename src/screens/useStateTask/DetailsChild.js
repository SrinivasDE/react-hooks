import React,{useState} from 'react';

const DetailsChild = (props) => {
  
  console.log("props",props)
    const decision = ['OK', 'NOTOK', 'NOTSURE'];
    const styles = {
      OK:{
        backgroundColor:'green'
      },
      NOTOK :{
        backgroundColor:'red'
      }
    }

    // const [show, setShow] = useState(true);
    
    const decisionDisplayHandler = (e) => {
        // setShow(false);
        props.showChildData()
        const decisionAccepted = {
            name:props.name,
            decision:e
        }
        props.color(decisionAccepted)
    }

  return (
    <div>
     
        <><h1>{props.name}</h1>


        {props.name=="srinivas"?<p>Hyderbad</p>
        :props.name=="rakesh"?<p>Mumbai</p>
        :props.name=="premkumar"?<p>Noida</p>
        :props.name=="kumar"?<p>Lucknow</p>
        :null
        }

        {decision.map((item) => (<button onClick={() => decisionDisplayHandler(item)}> {item}</button>))}</>
       

    </div>
  )
}

export default DetailsChild;