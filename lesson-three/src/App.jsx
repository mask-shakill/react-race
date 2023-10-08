import React from "react";
import Countries from "./components/Countries/Countries";
import GrandFather from "./components/Nested-Props/GrandFather";

const App = () => {
  return (
    <div>
      <Countries></Countries>
      <GrandFather name="Tom Harry "></GrandFather>
    </div>
  );
};

export default App;
