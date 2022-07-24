import React, { useContext } from 'react';
import { store } from '../ContextMain/ContextMain';

const ComponentB = () => {
    const [data, setData] = useContext(store);
  return (
    <div>ComponentB {data}</div>
  )
}

export default ComponentB;