import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("Countries.json")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 ">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
