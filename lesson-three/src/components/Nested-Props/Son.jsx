import React from "react";

const Son = (props) => {
  return (
    <div>
      <h1>
        Hello, My name is{" "}
        <span className="text-blue-500">
          {props.sonName}, I am my father son
        </span>
      </h1>
    </div>
  );
};

export default Son;
