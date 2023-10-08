import React from "react";
import Father from "./Father";

const GrandFather = (props) => {
  return (
    <div className="text-center mt-5 ">
      <h1>
        MY name's <span className="text-amber-700">{props.name}</span> I am Your
        Grand Father
      </h1>
      <Father fatherName="Tom Larry"></Father>
    </div>
  );
};

export default GrandFather;
