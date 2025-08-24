import React from "react";
import

function PlantCard({ plant, toggleSoldOut, updatePrice, deletePlant }) {
  const [newPrice, setNewPrice] = useState(plant.price);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.name} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      
      //toggle stock
       {plant.soldOut ? (
        <button onClick={() => toggleSoldOut(plant.id)}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => toggleSoldOut(plant.id)}>
          In Stock
        </button>
      )}

      //update price
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

        //delete plant
        <button onClick={() => deletePlant(plant.id)} style={{ color: "red" }}>
          Delete
        </button>
    </li>
  );
}

export default PlantCard;
