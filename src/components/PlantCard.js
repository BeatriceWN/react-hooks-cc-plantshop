import React, { useState } from "react";

function PlantCard({ plant, toggleSoldOut, updatePrice, deletePlant }) {
  const [newPrice, setNewPrice] = useState(plant.price);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {/* Toggle stock button */}
      {plant.soldOut ? (
        <button className="sold-out" onClick={() => toggleSoldOut(plant.id)}>
          Out of Stock
        </button>
      ) : (
        <button className="primary" onClick={() => toggleSoldOut(plant.id)}>
          In Stock
        </button>
      )}

      {/* Update price */}
      <div>
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(parseFloat(e.target.value) || 0)}
        />
        <button
          className="primary"
          onClick={() => updatePrice(plant.id, newPrice)}
        >
          Update Price
        </button>
      </div>

      {/* Delete plant */}
      <button className="delete" onClick={() => deletePlant(plant.id)}>
        Delete
      </button>
    </li>
  );
}

export default PlantCard;

/*
display each plant’s details
toggle in stock / out of stock
allow updating price (PATCH)
allow deleting plant (DELETE)
 */
