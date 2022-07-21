import React, {useState} from 'react';

const Prac = () => {
    const allData=[]
    const [data,setData] = useState();
    const nameChangeHandler = (e) => (
        setData({...data,[e.target.name]:[e.target.value]})
    );
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("rakesh")
       allData.push(data)
       
    
       console.log(allData)
        // const saveData = () => {
        //     setData(data.push(e.target.value))
        // }

    }
    console.log(allData)
  return (
    <form onSubmit={submitHandler}>
        <label>Name : 
            <input type="text" name="name" value={data.name} onChange={nameChangeHandler}></input>
        </label>
        <button type="submit" >ClickMe</button>
    </form>
  )
}

export default Prac;