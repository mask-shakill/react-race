import React, { useEffect, useState } from "react";

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1 className="bg-slate-600 p-5 text-xl text-center text-white">
        {countries.length} Countries
      </h1>
      {countries.map((country) => (
        <div className="bg-amber-600 text-white text-center text-lg">
          <h1>Country name :{country.name.common} </h1>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Country;
