import React from "react";
import Countries from "./components/Countries/Countries";
import GrandFather from "./components/Nested-Props/GrandFather";
import AddToCart from "./components/Local-Storage/AddToCart";

const App = () => {
  return (
    <div>
      <Countries></Countries>
      <GrandFather name="Tom Harry "></GrandFather>
      <AddToCart></AddToCart>
    </div>
  );
};

export default App;
