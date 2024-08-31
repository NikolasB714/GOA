import React, { useState, useEffect } from 'react';

function Counter() {

  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);


  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;
