import React, { createContext, useState } from 'react';
import ComponentA from '../components/ComponentA';
import ComponentB from '../components/ComponentB';
import Count from '../components/Count';
import Display from '../components/Display';


export const store = createContext();
export const cartDataStore = createContext();

const ContextMain = () => {
    const [data, setData] = useState(0);
    const [cartData, setCartData] = useState([{
        brandName : "Apple MacBook",
    },
    {
        brandName: "Samsung"
    }
])

    const incrementkHandler = (e) => {
        setData(data+1)
    }

  return (
    <>
    <store.Provider value={[data, setData]} >
        <ComponentA/>
        <ComponentB />
        <button type="submit" onClick={incrementkHandler}>Increment</button><br/><br/>

        
    </store.Provider>
    <cartDataStore.Provider value={[cartData, setCartData]}>
        <Count />
        <Display />
    </cartDataStore.Provider>
    </>
  )
}

export default ContextMain;