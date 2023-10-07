import React from "react";
import Counter from "./components/Counter";
import DynamicDataLoad from "./components/DynamicDataLoad";

const App = () => {
  return (
    <div>
      <h1 className="bg-slate-500">hello</h1>
      <Counter></Counter>
      <DynamicDataLoad></DynamicDataLoad>
    </div>
  );
};

export default App;
