import React, { useState } from "react";

function PlantCard({ plant, toggleSoldOut, updatePrice, deletePlant }) {
  const [newPrice, setNewPrice] = useState(plant.price);

  return (
    <li className="card" data-testid="plant-item">
      <img src={`/images/${plant.image}`} 
        alt={plant.name} 
        className="plant-image" 
      />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      
      {/* toggle stock button */}
       {plant.soldOut ? (
        <button onClick={() => toggleSoldOut(plant.id)}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => toggleSoldOut(plant.id)}>
          In Stock
        </button>
      )}

      {/* update price */}
      <div>
        <input
          type="number"
          value={newPrice}
          onChange={e => setNewPrice(parseFloat(e.target.value))}
        />
        <button onClick={() => updatePrice(plant.id, newPrice)}>
        Update Price
        </button>
        </div>

        {/* delete plant */}
        <button onClick={() => deletePlant(plant.id)} style={{ color: "red" }}>
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
