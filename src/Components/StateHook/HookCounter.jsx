import React, { useState } from "react";

function HookCounter() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incrementFive = () => {
    for (let i = 1; i <= 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      HookCounter count value is <h2> {count} </h2>
      <br />
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={incrementFive}>Increment by 5</button>
    </div>
  );
}

export default HookCounter;
