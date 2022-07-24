import React, { useContext } from 'react';
import { cartDataStore } from '../ContextMain/ContextMain';

const Count = () => {
    const [cartData, setCartData] = useContext(cartDataStore);
  return (
    <div>
        <h3>Cart : {cartData.length}</h3>
    </div>
  )
}

export default Count;