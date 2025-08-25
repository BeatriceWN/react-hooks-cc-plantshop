import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // fetching plants on mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data));
  }, []);

  
  function handleAddPlant(newPlant) {
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: { "Content-Type": "Application/JSON" },
    body: JSON.stringify(newPlant),
  })
    .then(res => res.json())
    .then(data => setPlants([...plants, data]));
}

  // toggle sold out
  function toggleSoldOut(id) {
  setPlants(plants.map(plant =>
    plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
  ));

  fetch(`http://localhost:6001/plants/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      soldOut: !plants.find(p => p.id === id).soldOut
    }),
  });
}

  // update price
  function updatePrice(id, newPrice) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify({ price: newPrice }),
    })
      .then(res => res.json())
      .then(updatedPlant =>
        setPlants(plants.map(plant => (plant.id === id ? updatedPlant : plant)))
      );
  }

  // delete plant
  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, { method: "DELETE" }).then(() =>
      setPlants(plants.filter(plant => plant.id !== id))
    );
  }

  // filtered list (defensive check)
  const filteredPlants = plants.filter(
  (plant) =>
    plant.name &&
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList
        plants={filteredPlants}
        toggleSoldOut={toggleSoldOut}
        updatePrice={updatePrice}
        deletePlant={deletePlant}
      />
    </main>
  );
}
export default PlantPage;
