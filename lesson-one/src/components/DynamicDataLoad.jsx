import React, { useEffect, useState } from "react";

const DynamicDataLoad = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((Response) => Response.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      {players.map((player) => (
        <div className="text-center">
          <h1>Player Name : {player.name}</h1>
          <h1>Country : {player.country}</h1>
        </div>
      ))}
    </div>
  );
};

export default DynamicDataLoad;
