import React, { useContext, useState } from 'react';
import { cartDataStore } from '../ContextMain/ContextMain';

const Display = () => {
    const [cartData, setCartData] = useContext(cartDataStore);
    const [newData, setNewData] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setCartData([...cartData, {brandName:newData}])
        setNewData('')
    }

  return (
    <div>
        {
            cartData.map((item) => <h4>{item.brandName}</h4>)
        }
        <form onSubmit={submitHandler}>
            <input type="text" value={newData} onChange={(e) => setNewData(e.target.value)}/>
            <input type="submit" value='Add to Cart'/>
        </form>
    </div>
  )
}

export default Display;