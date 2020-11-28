import React, {useState} from 'react';

const App = () => {
  return (
    <Counter>
   </Counter>
  )
};
const Counter = () => {
  const [count, setCount] = useState(0)

  const handlePlusButton = () => {
    setCount(count + 1);
  }

  const handleMinusButton = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div>counter: {count}</div>
      <button onClick={handlePlusButton}>+1</button>
      <button onClick={handleMinusButton}>-1</button>
    </>
  )
};

export default App;
