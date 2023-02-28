import React, { useState } from "react";

const CountComponent = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
      setCount(count + 1)
    }
    const decrement = () => {
      if(count > 0) {
        setCount(count - 1)
       }
    }  

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default CountComponent;
