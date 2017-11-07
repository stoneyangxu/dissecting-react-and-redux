import React from 'react';

function Counter({onIncrease, onDecrease, caption, value}) {
  return (
    <div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <span>{caption} Count: {value}</span>
    </div>
  );
}

export default Counter;
