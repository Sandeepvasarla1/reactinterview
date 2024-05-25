import React, { useState } from "react";

function Counter() {
  // Destructure useState to get count and setCount
  const [count, setCount] = useState(0); // Use const instead of var
    function inc() {
        setCount(count+1)
    }
    function dec() {
        if (count > 0 ) {

            setCount(count-1)
        }
    }
  return (
    <div>
      <h1>Sandeep</h1>
      <h1>Counter: {count}</h1>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
    </div>
  );
}

export default Counter;
