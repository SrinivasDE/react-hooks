import { useState } from "react";
import React from 'react';
import DetailsChild from "./DetailsChild";
let AllSelectedNamesObject=[]

const NamesParent = () => {
    const names = ["srinivas", "rakesh", "premkumar", "kumar"];
    const [show, setShow] = useState(false);
   
    const [name, setName] = useState("");
    const [finalDecision, setFinalDecision] = useState();
    const styles = {
      
      OK:{
        backgroundColor:'green',
        color:'#fff'
      },
      NOTOK :{
        backgroundColor:'red',
        color:'#fff'
      },
     
    }

    const nameDisplayHandler = (e) => {
        console.log(e)
        setName(e)
        setShow(true)
    }
    const colorChange = (e) => {
        
        AllSelectedNamesObject.push(e)
        setFinalDecision(AllSelectedNamesObject)
        console.log(e)
      
    }
    console.log("final",finalDecision)
    const showChildData=()=>{
      setShow(false)
    }
    // style={ finalDecision?.name==item ?finalDecision.decision=='OK'? styles.OK:finalDecision.decision=='NOTOK'? styles.NOTOK:null:null} 

    // { finalDecision.decision == "OK" ? "background-green": finalDecision.decision == "NOT OK"? "background-red" :null }
  return (
    <>
    
    {names.map((item, index) => (<button className={item} style={ finalDecision?.name==item ?finalDecision.decision=='OK'? styles.OK:finalDecision.decision=='NOTOK'? styles.NOTOK:null:null} 
    onClick={() => {nameDisplayHandler(item)}}>{index+1} {item}</button>))}

    {/* {names.map((item, index) => (<button className={item} style={ finalDecision?.name?(finalDecision.map((i) => {i.decision=='OK'? styles.OK : i.decision=='NOTOK'? styles.NOTOK:null})):null} 
    onClick={() => {nameDisplayHandler(item)}}>{index+1} {item}</button>))} */}

    {show?(<DetailsChild name={name} color={colorChange}  showChildData={showChildData}/>):null}
    </>
  )
}

export default NamesParent;

