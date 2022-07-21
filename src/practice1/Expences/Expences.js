import React, { useState } from 'react';
import ExpenceItem from './ExpenceItem';
import ExpencesFilter from './ExpencesFilter';


const Expences = (props) => {
    const [filtered, setFiltered] = useState("2020");
    const [show, setShow] = useState(false);
    const [filterData, setFilterData] = useState([]);

    const filterChangeHandler = e => {
      setFiltered(e);
      
        const data =props.items.filter((i)=>{
          return i.date.getFullYear() == e 
        })
        
    
      console.log("filter data ",data)
      setFilterData(data )

      
      
        
    }
  return (
    <div>
        <ExpencesFilter selected={filtered} data={props.items} onChangeFilter={filterChangeHandler} /> <br></br>


        {
        filterData.map((e) => (
        <ExpenceItem 
        key = {e.id}
        title = {e.title}
        amount = {e.amount} 
        date = {e.date}
        />
      
       ))}



       {/* {
        show? props.items.map((e) => (
        <ExpenceItem 
        key = {e.id}
        title = {e.title}
        amount = {e.amount} 
        date = {e.date}
        />
      
       )):null} */}
    </div> 
  )
}

export default Expences;