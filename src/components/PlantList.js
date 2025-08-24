import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, toggleSoldOut, updatePrice, deletePlant }) {
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard 
        key={plant.id}
        plant={plant}
        toggleSoldOut={toggleSoldOut}
        updatePrice={updatePrice}
        deletePlant={deletePlant}
        />
      ))}
      </ul>
  );
}

export default PlantList;

/* 
loop through plants array
render a PlantCard for each one
pass down the action handlers
*/