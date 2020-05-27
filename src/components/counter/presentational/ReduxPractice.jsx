import React from 'react' ;

const Counter = ({ text,value, onIncrement, onDecrement,onTest }) => {
    return (
      <div>
        <h1>{text}</h1>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onTest}>TEST</button>
      </div>
    ) ;
  } ;
  
  export default Counter ;