import React from "react";
import Counter from "./components/Counter";
import DynamicDataLoad from "./components/DynamicDataLoad";
import Country from "./components/Country";

const App = () => {
  return (
    <div>
      <h1 className="bg-slate-500">hello</h1>
      <Counter></Counter>
      <DynamicDataLoad></DynamicDataLoad>
      <Country></Country>
    </div>
  );
};

export default App;
