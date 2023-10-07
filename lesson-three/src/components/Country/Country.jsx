import React from "react";

const Country = (props) => {
  const { name, code } = props.country;
  return (
    <div>
      <div className="bg-slate-700 text-white text-center rounded-xl mt-10 py-4">
        <h1>Country Name : {name}</h1>
        <h1>Country code: {code} </h1>
      </div>
    </div>
  );
};

export default Country;
