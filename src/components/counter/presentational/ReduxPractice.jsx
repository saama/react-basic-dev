import React from 'react' ;

const Counter = ({ text,value,value2, onIncrement, onDecrement,onTest,onLoad }) => {
    return (
      <div>
        <h1>{text}</h1>
        <h1>{value}</h1>
        <h1>{value2}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onTest}>TEST</button>
        <button onClick={onLoad}>ACTION</button>
      </div>
    ) ;
  } ;
  
  export default Counter ;