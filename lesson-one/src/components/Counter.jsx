import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  const Increased = () => setCount(count + 1);
  return (
    <div className="text-center mt-10 text-2xl">
      <h1>Count : {count}</h1>
      <button className="bg-amber-400 px-3 py-1 rounded-xl" onClick={Increased}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
