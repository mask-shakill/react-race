import React from "react";
import Son from "./Son";

const Father = (props) => {
  return (
    <div className="">
      <h1>
        Hello, my name is{" "}
        <span className="bg-green-500">
          {props.fatherName} I am your father
        </span>
      </h1>
      <Son sonName="Top Parry"></Son>
    </div>
  );
};

export default Father;
