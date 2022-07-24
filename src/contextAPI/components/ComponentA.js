import React, { useContext } from 'react';
import { store } from '../ContextMain/ContextMain';

const ComponentA = () => {
    const [data, setData] = useContext(store);
  return (
    <div>
        Hello ComponentA {data}
    </div>
  )
}

export default ComponentA;